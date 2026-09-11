import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export type StockStatus = "In Stock" | "Sold Out";

export interface Product {
  id: number;
  name: string;
  quantity: number;
  status: StockStatus;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { id, name, quantity, status } = product;

  return (
    <Card className="hover:shadow-md transition-shadow duration-200">
      <CardHeader>
        <CardDescription className="text-xs">Product ID #{id}</CardDescription>
        <CardTitle>{name}</CardTitle>
      </CardHeader>

      <CardContent className="flex items-center justify-between">
        <span className="text-sm text-muted-foreground">
          Qty: <span className="font-semibold text-foreground">{quantity}</span>
        </span>
        <Badge variant={status === "In Stock" ? "default" : "destructive"}>
          {status}
        </Badge>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
