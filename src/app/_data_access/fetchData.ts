export async function fetchData(url: string, options: RequestInit = {}) {
  const res = await fetch(url, options);

  if (!res.ok) {
    throw new Error(`Erro ao buscar dados de ${url}`);
  }

  return res.json();
}