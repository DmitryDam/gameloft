import React from "react";

interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  quantity: number;
}

interface Props {
  product: Product;
  addToCart: (product: Product) => void;
}

const ProductCard: React.FC<Props> = ({ product, addToCart }) => {
  return (
    <div className="border rounded p-4 flex flex-col items-center shadow hover:shadow-lg transition">
      <img src={product.image} alt={product.title} className="w-full h-40 object-cover mb-4" />
      <h2 className="text-lg font-semibold">{product.title}</h2>
      <p className="text-gray-600 text-sm mb-2">{product.description}</p>
      <p className="font-bold mb-2">${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;