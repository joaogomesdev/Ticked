import { getEvents } from "lib/db";
import { NextApiRequest, NextApiResponse } from "next";
import { getToken } from "next-auth/jwt";
import { addAbortSignal } from "stream";

const secret = process.env.SECRET;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const token = await getToken({ req, secret });

    const data = await getEvents();

    res.status(200).json({ events: data.events });
  } catch (error) {
    // logger.error(
    //   {
    //     request: {
    //       headers: formatObjectKeys(req.headers),
    //       url: req.url,
    //       method: req.method,
    //     },
    //     response: {
    //       statusCode: res.statusCode,
    //     },
    //   },
    //   error.message
    // );

    res.status(500).send({ error });
  }
}
