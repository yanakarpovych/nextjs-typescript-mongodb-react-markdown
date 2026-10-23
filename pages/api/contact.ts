import type { NextApiRequest, NextApiResponse } from "next";

type MessageData = {
  email: string;
  name: string;
  message: string;
};

type ApiResponse = {
  message: string;
  data?: MessageData;
};

function handler(req: NextApiRequest, res: NextApiResponse<ApiResponse>) {
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
    name,
    message,
  };

  console.log(newMessage);

  return res.status(201).json({
    message: "Successfully stored message!",
    data: newMessage,
  });
}

export default handler;
