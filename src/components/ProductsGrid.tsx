import { useState } from "react";
import ProductCard from "./ProductCard";
import { DraftProduct, PublicProducts } from "./ProfilePage";

interface ProductsGridProps {
  products: DraftProduct[];
}

const ProductsGrid = ({ products }: ProductsGridProps) => {
  const [inStockOnly, setInStockOnly] = useState(false);

  const soldOutCount = products.filter(
    (product) => product.status === "Sold Out",
  );
  const filteredProductsInStock = inStockOnly
    ? products.filter((product) => product.status === "In Stock")
    : products;
  return (
    <section aria-label="Products">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-lg font-semibold text-foreground">Products</h2>
        <label className="flex cursor-pointer items-center gap-2 text-sm text-muted-foreground">
          <input
            type="checkbox"
            checked={inStockOnly}
            onChange={(event) => setInStockOnly(event.target.checked)}
            className="size-4 accent-primary"
          />
          In stock only
        </label>
        <p className="text-sm text-muted-foreground">
          Showing {filteredProductsInStock && filteredProductsInStock.length} of{" "}
          {products.length} products
        </p>
        <p className="text-sm text-white rounded-xl p-2 bg-red-600">
          {soldOutCount && soldOutCount.length} sold out
        </p>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProductsInStock.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductsGrid;
