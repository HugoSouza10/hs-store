import { NextResponse } from 'next/server';
import { db } from '@/lib/prisma';

export async function GET() {
  try {
    const products = await db.product.findMany({
      // include: {
      //   categorySlug: true, // relacionamento
      // },
    })
    return NextResponse.json(products)
  }catch(error) {
    console.error('Houve um problema:', error);
    return NextResponse.json(
      {error: 'Erro ao buscar produtos'},
      {status: 500}
    )
  }
}
