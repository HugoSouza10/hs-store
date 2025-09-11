import { Card } from "@/components/ui/card";
import { Truck } from "lucide-react";

export const ShippingInfo = () => {
  return (
    <Card className="bg-accent rounded-xl mt-5">
        <div className="flex justify-between items-center p-4 rounded-lg">
            <div className="flex">
               <Truck className="text-white text-2xl mr-3" /> {/* Usando o ícone Truck */}
               <div>
                    <div className="text-xs">Entrega via <span className="font-bold text-xs">FSPacket®</span></div>
                    <div className="text-xs text-[#8162FF]">Envio para <span className="font-bold text-xs">todo Brasil</span></div>
               </div>
            </div>
            <div className="font-bold text-xs">Frete Grátis</div>
        </div>
    </Card>
  );
};
