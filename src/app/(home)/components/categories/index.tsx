// app/categories/page.tsx (ou dentro de uma pasta de Server Component)
import { CATEGORY_ICON } from '@/constants/categories-icon';
import Link from 'next/link';

// Função para buscar as categorias no servidor
async function fetchCategories() {
  const response = await fetch('http://localhost:3000/api/category');
  if (!response.ok) {
    throw new Error('Falha ao buscar categorias');
  }
  return response.json();
}

// Componente de categoria no lado do servidor
export default async function CategoriesPage() {
  const categories = await fetchCategories(); // Busca as categorias diretamente no servidor

  return (
    <div className='grid grid-cols-2 gap-4 mt-7'>
      {categories.map((item: { slug: string; name: string }) => (
        <Link href={`category/${item.slug}`} key={item.slug}>
          <div className='flex justify-center items-center border border-[#1A1A1A] p-3 rounded-lg text-xs font-bold'>
            <div className='pr-2'>{CATEGORY_ICON[item.slug as keyof typeof CATEGORY_ICON]}</div>
            {item.name}
          </div>
        </Link>
      ))}
    </div>
  );
}
