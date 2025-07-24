import { NextResponse } from "next/server";
import { products } from "../route"; // Importa a lista de produtos da rota principal

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const { slug } = params;

  // Normaliza o slug para comparação (remove espaços, acentos, etc)
  const normalizeSlug = (str: string) =>
    str
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s+/g, "-");

  const product = products.find((p) => 
    normalizeSlug(p.slug) === normalizeSlug(slug)
  );

  if (!product) {
    return NextResponse.json(
      { error: "Produto não encontrado" },
      { status: 404 }
    );
  }

  return NextResponse.json(product);
}