import { useState } from "react";
import { useCart } from "../context/CartContext";
import { Plus, Minus, ShoppingCart } from "lucide-react";

export default function Cart() {
  const {
    cartItems,
    removeFromCart,
    clearCart,
    cartTotal,
    increaseQty,
    decreaseQty,
  } = useCart();

  const [itemToRemove, setItemToRemove] = useState(null);

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 px-6 text-center text-gray-600">
        <ShoppingCart size={64} className="mb-6 text-indigo-400" />
        <h2 className="text-2xl font-semibold mb-2">Your cart is empty</h2>
        <p className="max-w-md">
          Looks like you haven’t added any products yet. Start exploring and add
          your favorite items to the cart.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-10">
      <h1 className="text-3xl font-bold mb-8 text-indigo-600">Your Cart</h1>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px] border border-gray-200 rounded-lg">
          <thead className="bg-indigo-50 text-indigo-700">
            <tr>
              <th className="p-3 text-left">Product</th>
              <th className="p-3 text-left">Price</th>
              <th className="p-3 text-center">Quantity</th>
              <th className="p-3 text-center">Remove</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr
                key={item.id}
                className="border-b last:border-b-0 hover:bg-indigo-50 transition"
              >
                <td className="flex items-center gap-4 p-3">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded-md flex-shrink-0"
                  />
                  <span className="font-semibold text-gray-900">
                    {item.title}
                  </span>
                </td>
                <td className="p-3 text-indigo-600 font-semibold">
                  ${item.price}
                </td>
                <td className="p-3">
                  <div className="flex items-center justify-center gap-2 max-w-[120px] mx-auto">
                    <button
                      onClick={() => decreaseQty(item.id)}
                      className="bg-gray-200 hover:bg-gray-300 text-gray-700 rounded px-2 py-1 transition focus:outline-none focus:ring-2 focus:ring-indigo-400"
                      aria-label={`Decrease quantity of ${item.title}`}
                    >
                      <Minus size={16} />
                    </button>
                    <span className="font-medium">{item.qty}</span>
                    <button
                      onClick={() => increaseQty(item.id)}
                      className="bg-gray-200 hover:bg-gray-300 text-gray-700 rounded px-2 py-1 transition focus:outline-none focus:ring-2 focus:ring-indigo-400"
                      aria-label={`Increase quantity of ${item.title}`}
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                </td>
                <td className="p-3 text-center">
                  <button
                    onClick={() => setItemToRemove(item)}
                    className="text-red-500 hover:text-red-600 font-semibold transition focus:outline-none focus:ring-2 focus:ring-red-400 rounded px-2 py-1"
                    aria-label={`Remove ${item.title} from cart`}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center mt-8 gap-4">
        <div className="text-xl font-semibold text-gray-900">
          Total:{" "}
          <span className="text-indigo-600">${cartTotal.toFixed(2)}</span>
        </div>
        <button
          onClick={clearCart}
          className="bg-red-600 hover:bg-red-700 text-white rounded-md px-6 py-3 font-semibold transition focus:outline-none focus:ring-2 focus:ring-red-400"
        >
          Clear Cart
        </button>
      </div>

      {itemToRemove && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50"
          onClick={() => setItemToRemove(null)}
        >
          <div
            className="bg-white rounded-lg p-6 shadow-xl max-w-sm w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-lg font-semibold mb-4 text-gray-800">
              Remove Item
            </h2>
            <p className="text-gray-600 mb-6">
              Are you sure you want to remove{" "}
              <span className="font-semibold text-red-500">
                {itemToRemove.title}
              </span>{" "}
              from your cart?
            </p>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setItemToRemove(null)}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  removeFromCart(itemToRemove.id);
                  setItemToRemove(null);
                }}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
