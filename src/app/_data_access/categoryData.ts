import { unstable_cache } from 'next/cache';
import { fetchData } from '../_data_access/fetchData';
const API_BASE_URL = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

//Pega todas as categorias dos produtos

// cache de Server Component do Next.js (RSC Cache)
export const getCategoriesAll = unstable_cache(
  async () => {
    console.log('🔄 Cache MISS - buscando categorias da API');
    const url = `${API_BASE_URL}/api/category`;
    return await fetchData(url);
  },
  ['categories-all'],
  {
    tags: ['categories'],
    revalidate: 600,
  }
);