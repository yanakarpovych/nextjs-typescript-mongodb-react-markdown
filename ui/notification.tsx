import classes from "./notification.module.css";

type NotificationProps = {
  title: string;
  message: string;
  status: "pending" | "success" | "error";
};

function Notification({ title, message, status }: NotificationProps) {
  let statusClasses: string;

  if (status === "success") {
    statusClasses = classes.success;
  } else if (status === "error") {
    statusClasses = classes.error;
  } else {
    statusClasses = "";
  }

  const cssClasses = `${classes.notification} ${statusClasses}`;

  return (
    <div className={cssClasses}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
}

export default Notification;
