import { info } from "console";
import { getEvents } from "lib/db";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(405).send({ message: "Only POST requests allowed" });
    return;
  }

  const { email, password } = await req.body;
  res.status(200).send({ id: "10101001", email, password });
}
