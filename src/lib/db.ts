import prisma from "./prisma";

export async function getCompanies() {
  const companies = await prisma.company.findMany();

  return { companies: companies };
}
