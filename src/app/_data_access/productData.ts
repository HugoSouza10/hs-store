// app/_data_access/productData.ts
import { fetchData } from '../_data_access/fetchData';
import { Product } from '@/types/product';

const API_BASE_URL = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000/';

// Função genérica para buscar produtos com um filtro opcional
async function fetchProducts(filterFn?: (product: Product) => boolean) {
  const url = `${API_BASE_URL}/api/product`;
  const products = await fetchData(url);

  // Se um filtro for fornecido, aplica-o, caso contrário, retorna todos os produtos
  return filterFn ? products.filter(filterFn) : products;
}

// Função para buscar um produto pelo slug
export async function getProduct(slug: string) {
  const url = `${API_BASE_URL}/api/product/${slug}`;
  return await fetchData(url);
}

// Função para buscar produtos com desconto
export async function getDeals() {
  return await fetchProducts((product: { discountPercentage: number }) => product.discountPercentage > 0);
}
//Função para busca produtos pela a categoria
export async function getProductsByCategory(categorySlug: string) {
  return await fetchProducts((product: { categorySlug: string }) => product.categorySlug === categorySlug);
}

// Função para buscar produtos relacionados com desconto
export async function getProductRelated() {
  return await fetchProducts((product: { discountPercentage: number }) => product.discountPercentage > 0);
}
