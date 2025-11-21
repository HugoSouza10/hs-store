import { getCategoriesAll } from '@/app/_data_access/categoryData';
import { CATEGORY_ICON } from '@/constants/categories-icon';
import Link from 'next/link';

// Componente de categoria no lado do servidor
export default async function CategoriesPage() {
  // Função para buscar as categorias no servidor
  const categories = await getCategoriesAll(); // Busca as categorias diretamente no servidor

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
