import Image from "next/image";
import { Button } from "@/components/ui/button"

export default function Category({ params }: { params: { slug: string } }) {
  const { slug } = params;
  return (
    <>
    <h1 className="bg-primary">Lista de produtos por categorias{slug}</h1>
    </>
    
  )
}