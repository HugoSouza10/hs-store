'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-lg border-0">
        <CardHeader className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="rounded-full bg-green-100 p-4">
              <CheckCircle className="h-12 w-12 text-green-600" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold tracking-tight">
            Pagamento Aprovado
          </CardTitle>
          <CardDescription className="text-base">
            Sua compra foi confirmada com sucesso
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <div className="rounded-lg bg-muted p-4 text-center">
            <p className="text-sm text-muted-foreground">
              Obrigado pela sua compra! Seu pedido está sendo processado.
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              ID: #{Date.now().toString().slice(-8)}
            </p>
          </div>
        </CardContent>
        
        <CardFooter className="flex flex-col gap-3">
          <Button 
            className="w-full bg-green-600 hover:bg-green-700"
            size="lg"
            asChild
          >
            <a href="/">
              Voltar para a Loja
            </a>
          </Button>
          
          <Button 
            variant="outline" 
            className="w-full"
            size="sm"
            onClick={() => window.print()}
          >
            Imprimir Comprovante
          </Button>
          
          <p className="text-xs text-center text-muted-foreground mt-4">
            Em caso de dúvidas, entre em contato com nosso suporte.
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}