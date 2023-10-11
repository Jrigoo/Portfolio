import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient, Prisma } from "@prisma/client";

type Data = {};
const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  //Obtener toda la data de la base de datos
  if (req.method === "GET") {
    try {
      const response = await prisma.projects.findMany();
      res.status(200).json(response);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
