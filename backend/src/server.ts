import express from "express";
import { prisma } from "./prisma";

const app = express();

app.use(express.json());

/* READ */
app.get("/products", async (req, res) => {
  try {
    const products = await prisma.product.findMany();
    return res.json(products);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao listar produtos" });
  }
});

app.listen(3001, () => {
  console.log("Servidor rodando na porta 3001");
});