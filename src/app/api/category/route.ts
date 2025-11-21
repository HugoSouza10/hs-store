// pages/api/categorias.ts
import { NextResponse } from "next/server";

const category = [
  {slug: "keyboards", name: "Teclados" },
  {slug: "mouses", name: "Mouses" },
  {slug: "headphones", name: "Fones" },
  {slug: "mousepads", name: "Mousepads" },
  {slug: "monitors", name: "Monitores" },
  {slug: "speakers", name: "Speakers" },
];

export async function GET() {
  return NextResponse.json(category);
}