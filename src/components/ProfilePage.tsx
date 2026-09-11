import { useState } from "react";
import StatusBadge from "./StatusBadge";
import ProjectsGrid from "./ProjectsGrid";
import ProductsGrid from "./ProductsGrid";
import { ProductForm } from "./ProductForm";
import type { Product } from "./ProductCard";

interface Project {
  id: number;
  title: string;
  description: string;
  status: string;
}

const ProfilePage = () => {
  const name = "Seng Kimnam";
  const goal =
    "My goal for this course is to learn more about frontend architecture, " +
    "build good frontend applications, manage state with a state-management library, " +
    "and dive deep into React hooks.";

  const projects: Project[] = [
    {
      id: 1,
      title: "Portfolio Site",
      description: "Personal portfolio built with React + Vite + Tailwind.",
      status: "In Progress",
    },
    {
      id: 2,
      title: "E-Commerce Dashboard",
      description:
        "Admin panel with data tables, charts, and order management.",
      status: "Planning",
    },
    {
      id: 3,
      title: "Blog Platform",
      description: "Markdown-based blog with SSG and dark-mode support.",
      status: "Completed",
    },
  ];

  const [products, setProducts] = useState<Product[]>([
    { id: 1, name: "Wireless Headphones", quantity: 120, status: "In Stock" },
    { id: 2, name: "Mechanical Keyboard", quantity: 0, status: "Sold Out" },
    { id: 3, name: "USB-C Hub", quantity: 0, status: "Sold Out" },
    { id: 4, name: "Webcam HD", quantity: 45, status: "In Stock" },
    { id: 5, name: "Monitor Stand", quantity: 0, status: "Sold Out" },
    { id: 6, name: "Laptop Sleeve", quantity: 0, status: "Sold Out" },
  ]);

  const handleProductCreated = (product: Omit<Product, "id">) => {
    const newProduct: Product = {
      id: products.length + 1,
      ...product,
    };
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  };

  return (
    <section className="md:col-span-3 p-6 space-y-6">
      <h1 className="text-2xl font-bold text-foreground">My name is {name}</h1>

      <p className="text-muted-foreground leading-relaxed">{goal}</p>

      <StatusBadge isAvailable={true}>
        <p className="text-blue-600 font-medium">Entrepreneur</p>
        <p className="text-gray-700">Full Stack</p>
      </StatusBadge>

      <ProjectsGrid projects={projects} />

      <ProductForm onProductCreated={handleProductCreated} />
      <ProductsGrid products={products} />
    </section>
  );
};

export default ProfilePage;
