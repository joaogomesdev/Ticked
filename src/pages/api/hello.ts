// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getCompanies } from "lib/db";
import prisma from "lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  id: string;
  name: string;
  slug: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  const data = await getCompanies();

  res.status(200).json(data.companies);
}
