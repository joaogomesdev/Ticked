import prisma from "./prisma";

export async function getCompanies() {
  const companies = await prisma.company.findMany();

  return { companies };
}

export async function getEvents() {
  const events = await prisma.event.findMany();

  return { events };
}
