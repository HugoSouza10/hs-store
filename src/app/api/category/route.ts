// pages/api/categorias.ts
import { NextResponse } from "next/server";

const category = [
  { 
    slug: "keyboards", 
    name: "Teclados",
    imageUrls: "https://utfs.io/f/1e030d68-5443-4d33-b408-b772b319b9ab-w8rm3f.png",
  },
  { 
    slug: "mouses", 
    name: "Mouses",
    imageUrls: "https://utfs.io/f/8c82989e-5a24-421e-b56d-a87d526ba5c1-qe5e93.png",
  },
  { 
    slug: "headphones", 
    name: "Fones",
    imageUrls: "https://utfs.io/f/e0f86a80-3156-4327-bb51-2a421e3eeabc-cuwa00.png"
  },
  { 
    slug: "mousepads", 
    name: "Mousepads",
    imageUrls: "https://utfs.io/f/b8585eb2-bc88-4ebf-af0a-decdfb8d59fa-on5ldd.png"
  },
  { 
    slug: "monitors", 
    name: "Monitores",
    imageUrls: "https://utfs.io/f/01157cd9-cd59-43ad-9b84-6fe5419aecb4-l17xro.png"
  },
  { 
    slug: "speakers", 
    name: "Speakers",
    imageUrls: "https://utfs.io/f/8a4daee1-2182-4f70-8f26-43ee804de8f3-b5j8co.png"
  },
];


export async function GET() {
  return NextResponse.json(category);
}