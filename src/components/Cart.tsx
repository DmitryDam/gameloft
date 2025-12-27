import React from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  quantity: number;
}

interface Props {
  cart: Product[];
}

const Cart: React.FC<Props> = ({ cart }) => {
  const total = cart.reduce((acc, item) => {
    const itemTotal = item.quantity > 5 ? item.price * item.quantity * 0.9 : item.price * item.quantity;
    return acc + itemTotal;
  }, 0);

  return (
    <div className="border p-4 rounded shadow mt-6">
      <h2 className="text-lg font-bold mb-2">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id} className="flex justify-between mb-1">
              <span>
                {item.title} x {item.quantity}
              </span>
              <span>${item.quantity > 5 ? (item.price * item.quantity * 0.9).toFixed(2) : (item.price * item.quantity).toFixed(2)}</span>
            </li>
          ))}
        </ul>
      )}
      <p className="font-bold mt-2">Total: ${total.toFixed(2)}</p>
    </div>
  );
};

export default Cart;