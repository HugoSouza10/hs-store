import { fetchData } from '../_data_access/fetchData';
const API_BASE_URL = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

//Pega todas as categorias dos produtos
export async function getCategoriesAll() {
  const url = `${API_BASE_URL}/api/category`;
  return await fetchData(url);
}