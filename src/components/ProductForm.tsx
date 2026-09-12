import { useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { StockStatus } from "./ProductCard";
import { DraftProduct } from "./ProfilePage";

interface ProductFormProps {
  onProductCreated: (product: Omit<DraftProduct, "id">) => void;
}

interface FieldErrors {
  name?: string;
  quantity?: string;
}

export function ProductForm({ onProductCreated }: ProductFormProps) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  // const [internalCode, setInternalCode] = useState("");
  const [quantity, setQuantity] = useState("");
  const [status, setStatus] = useState<StockStatus>("In Stock");
  const [errors, setErrors] = useState<FieldErrors>({});

  const resetForm = () => {
    setName("");
    // setInternalCode("");
    setQuantity("");
    setStatus("In Stock");
    setErrors({});
  };

  const handleOpenChange = (nextOpen: boolean) => {
    setOpen(nextOpen);
    if (!nextOpen) {
      setErrors({});
    }
  };

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newErrors: FieldErrors = {};
    const trimmedName = name.trim();
    const numericQuantity = Number(quantity);

    if (!trimmedName) {
      newErrors.name = "Product name is required.";
    }

    if (
      quantity === "" ||
      Number.isNaN(numericQuantity) ||
      numericQuantity < 0
    ) {
      newErrors.quantity = "Quantity must be a number of 0 or more.";
    }

    setErrors(newErrors);

    if (newErrors.name || newErrors.quantity) {
      return;
    }

    onProductCreated({
      name: trimmedName,
      quantity: numericQuantity,
      status,
      internalCode: "",
    });
    resetForm();
    setOpen(false);
    alert(`Product "${name}" created successfully!`);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger
        render={
          <Button className="cursor-pointer">
            <Plus />
            New product
          </Button>
        }
      />
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Create new product</DialogTitle>
          <DialogDescription>
            Add a product to your inventory.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4">
          <div className="grid gap-2">
            <label htmlFor="product-name">Product name</label>
            <Input
              id="product-name"
              value={name ?? ""}
              aria-invalid={!!errors.name}
              onChange={(event) => {
                setName(event.target.value);
                if (errors.name) {
                  setErrors((prev) => ({ ...prev, name: undefined }));
                }
              }}
              placeholder="e.g. Wireless Mouse"
            />
            {errors.name && (
              <p role="alert" className="text-xs font-medium text-destructive">
                {errors.name}
              </p>
            )}
          </div>
          <div className="grid gap-2">
            <label htmlFor="product-amount">Quantity</label>
            <Input
              id="product-amount"
              type="number"
              min="0"
              value={quantity ?? ""}
              aria-invalid={!!errors.quantity}
              onChange={(event) => {
                setQuantity(event.target.value);
                if (errors.quantity) {
                  setErrors((prev) => ({ ...prev, quantity: undefined }));
                }
              }}
              placeholder="0"
            />
            {errors.quantity && (
              <p role="alert" className="text-xs font-medium text-destructive">
                {errors.quantity}
              </p>
            )}
          </div>
          <div className="grid gap-2">
            <label htmlFor="product-status">Status</label>
            <select
              id="product-status"
              value={status ?? "In Stock"}
              onChange={(event) => setStatus(event.target.value as StockStatus)}
              className="h-8 rounded-lg border border-input bg-transparent px-2.5 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
            >
              <option>In Stock</option>
              <option>Sold Out</option>
            </select>
          </div>
          <DialogFooter>
            <DialogClose
              render={
                <Button
                  className="cursor-pointer"
                  type="button"
                  variant="outline"
                >
                  Cancel
                </Button>
              }
            />
            <Button className="cursor-pointer" type="submit">
              Create product
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
