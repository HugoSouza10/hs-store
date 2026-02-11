export async function createCheckout(products: any[]) {
  const response = await fetch('/api/mercado-pago/payments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ products }),
  });

  if (!response.ok) {
    throw new Error('Erro ao criar pagamento');
  }

  return response.json();
}
