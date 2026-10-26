import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import classes from "./contact-form.module.css";
import Notification from "@/ui/notification";

type ContactDetails = {
  email: string;
  name: string;
  message: string;
};

type RequestStatus = "pending" | "success" | "error";

type NotificationData = {
  status: RequestStatus;
  title: string;
  message: string;
};

async function sendContactData(contactDetails: ContactDetails): Promise<void> {
  const response = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(contactDetails),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data: { message?: string } = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong!");
  }
}

function ContactForm() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");

  const [requestStatus, setRequestStatus] = useState<RequestStatus | null>(
    null,
  );
  const [requestError, setRequestError] = useState<string | null>(null);

  useEffect(() => {
    if (requestStatus !== "success" && requestStatus !== "error") {
      return;
    }

    const timer = setTimeout(() => {
      setRequestStatus(null);
      setRequestError(null);
    }, 3000);

    return () => clearTimeout(timer);
  }, [requestStatus]);

  async function sendMessageHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (requestStatus === "pending") {
      return;
    }

    setRequestStatus("pending");
    setRequestError(null);

    try {
      await sendContactData({
        email: enteredEmail,
        name: enteredName,
        message: enteredMessage,
      });

      setRequestStatus("success");
      setEnteredEmail("");
      setEnteredName("");
      setEnteredMessage("");
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : "Something went wrong!";

      setRequestError(errorMessage);
      setRequestStatus("error");
    }
  }

  let notification: NotificationData | null = null;

  if (requestStatus === "pending") {
    notification = {
      status: "pending",
      title: "Sending message...",
      message: "Your message is on its way!",
    };
  } else if (requestStatus === "success") {
    notification = {
      status: "success",
      title: "Success!",
      message: "Message sent successfully!",
    };
  } else if (requestStatus === "error") {
    notification = {
      status: "error",
      title: "Error!",
      message: requestError ?? "Something went wrong!",
    };
  }

  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>

      <form className={classes.form} onSubmit={sendMessageHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your email</label>
            <input
              type="email"
              id="email"
              required
              value={enteredEmail}
              onChange={(event) => setEnteredEmail(event.target.value)}
            />
          </div>

          <div className={classes.control}>
            <label htmlFor="name">Your name</label>
            <input
              type="text"
              id="name"
              required
              value={enteredName}
              onChange={(event) => setEnteredName(event.target.value)}
            />
          </div>
        </div>

        <div className={classes.control}>
          <label htmlFor="message">Your message</label>
          <textarea
            id="message"
            rows={5}
            required
            value={enteredMessage}
            onChange={(event) => setEnteredMessage(event.target.value)}
          />
        </div>

        <div className={classes.actions}>
          <button type="submit" disabled={requestStatus === "pending"}>
            {requestStatus === "pending" ? "Sending..." : "Send message"}
          </button>
        </div>
      </form>

      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    </section>
  );
}

export default ContactForm;
