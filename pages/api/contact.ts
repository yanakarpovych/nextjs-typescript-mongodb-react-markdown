import type { NextApiRequest, NextApiResponse } from "next";
import type { ObjectId } from "mongodb";
import clientPromise from "../../lib/mongodb";

type MessageData = {
  email: string;
  name: string;
  message: string;
};

type StoredMessage = MessageData & {
  id: string;
};

type ApiResponse = {
  message: string;
  data?: StoredMessage;
};

async function handler(req: NextApiRequest, res: NextApiResponse<ApiResponse>) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ message: "Method not allowed." });
  }

  const { email, name, message } = req.body;

  if (
    typeof email !== "string" ||
    !email.includes("@") ||
    typeof name !== "string" ||
    name.trim() === "" ||
    typeof message !== "string" ||
    message.trim() === ""
  ) {
    return res.status(422).json({ message: "Invalid input." });
  }

  const newMessage: MessageData = {
    email,
    name: name.trim(),
    message: message.trim(),
  };

  try {
    const client = await clientPromise;
    const db = client.db("personal-blog");

    const result = await db
      .collection<MessageData>("messages")
      .insertOne(newMessage);

    const storedMessage: StoredMessage = {
      ...newMessage,
      id: result.insertedId.toString(),
    };

    return res.status(201).json({
      message: "Successfully stored message!",
      data: storedMessage,
    });
  } catch (error) {
    console.error("Failed to store contact message:", error);

    return res.status(500).json({
      message: "Failed to store message.",
    });
  }
}

export default handler;
