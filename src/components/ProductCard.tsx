import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DraftProduct, PublicProducts } from "./ProfilePage";

export type StockStatus = "In Stock" | "Sold Out";

export interface Product {
  id: number;
  name: string;
  quantity: number;
  status: StockStatus;
  internalCode: string;
}

interface ProductCardProps {
  product: DraftProduct;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card className="hover:shadow-md transition-shadow duration-200">
      <CardHeader>
        <CardDescription className="text-xs">
          Product ID #{product?.id ?? "Unknown"}
        </CardDescription>
        <CardTitle>{product?.name ?? "Unknown"}</CardTitle>
      </CardHeader>

      <CardContent className="flex items-center justify-between">
        <span className="text-sm text-muted-foreground">
          Qty:{" "}
          <span className="font-semibold text-foreground">
            {product?.quantity}
          </span>
        </span>
        <Badge
          variant={product?.status === "In Stock" ? "default" : "destructive"}
        >
          {product?.status ?? "Unknown"}
        </Badge>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
