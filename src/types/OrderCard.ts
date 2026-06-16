export interface OrderCardProps {
  id: string;
  status: string;
  total: number;
  createdAt: Date;

  items: {
    id: string;
    quantity: number;
    price: number;
    product: {
      id: string;
      name: string;
      imageUrls: string[];
    };
  }[];
}