import React, { useState } from "react";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";

interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  quantity: number;
}

const products: Product[] = [
  {
    id: 1,
    title: "Gameloft Slot Machine",
    description: "Try your luck with this exciting slot game.",
    image: "https://picsum.photos/200/150?random=1",
    price: 10,
    quantity: 1,
  },
  {
    id: 2,
    title: "Dragon Slayer Game",
    description: "Adventure and dragons await you.",
    image: "https://picsum.photos/200/150?random=2",
    price: 15,
    quantity: 1,
  },
  {
    id: 3,
    title: "Casino Royale",
    description: "High stakes and big rewards.",
    image: "https://picsum.photos/200/150?random=3",
    price: 20,
    quantity: 1,
  },
];

const App: React.FC = () => {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === product.id);
      if (existing) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      } else {
        return [...prev, { ...product }];
      }
    });
  };

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Gameloft Products</h1>
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
      <Cart cart={cart} />
    </div>
  );
};

export default App;