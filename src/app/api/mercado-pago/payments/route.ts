import { MercadoPagoConfig, Preference } from 'mercadopago';
import { NextResponse, NextRequest } from 'next/server';

// Configuração simplificada
const client = new MercadoPagoConfig({
  accessToken: process.env.MERCADOPAGO_ACCESS_TOKEN!,
  options: { timeout: 5000 }
});

export async function POST(request: NextRequest) {
  try {
    const data  =  {
      id: `prod_${Date.now()}`,
      description: 'Produto Exemplo',
      price: 1,
      quantity: 1
    }
    // Validação rápida
    if (!data.price || !data.description) {
      return NextResponse.json(
        { error: 'Preço e descrição são obrigatórios' },
        { status: 400 }
      );
    }

    // Cria preferência
    const preference = new Preference(client);
    const result = await preference.create({
      body: {
        items: [{
          id: data.id || `prod_${Date.now()}`,
          title: data.description.substring(0, 200),
          quantity: Number(data.quantity),
          currency_id: 'BRL',
          unit_price: Number(data.price)
        }],
        back_urls: {
          success: `${process.env.NEXT_PUBLIC_SITE_URL}/payment/success`,
          failure: `${process.env.NEXT_PUBLIC_SITE_URL}/payment/failure`,
          pending: `${process.env.NEXT_PUBLIC_SITE_URL}/payment/pending`
        },
        external_reference: `order_${Date.now()}`
      }
    });

    // Retorna o necessário
    return NextResponse.json({
      success: true,
      id: result.id,
      checkout: result.init_point
    });

  } catch (error: any) {
    console.error('Erro payment:', error);
    return NextResponse.json(
      { error: 'Falha ao criar pagamento' },
      { status: 500 }
    );
  }
}

// Health check
export async function GET() {
  return NextResponse.json({
    ok: true,
    service: 'Mercado Pago API'
  });
}