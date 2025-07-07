import { useState } from "react";
import products from "../data/products";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function Home() {
  const { addToCart } = useCart();
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");

  let filtered = products.filter(
    (p) =>
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase())
  );

  if (sort === "low") filtered.sort((a, b) => a.price - b.price);
  if (sort === "high") filtered.sort((a, b) => b.price - a.price);

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-8">
      {/* Search & Sort Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
        <input
          type="text"
          placeholder="Search products..."
          className="border border-gray-300 rounded-md px-4 py-2 w-full sm:w-72 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          aria-label="Search products"
        />
        <select
          className="border border-gray-300 rounded-md px-4 py-2 w-full sm:w-48 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          onChange={(e) => setSort(e.target.value)}
          aria-label="Sort products"
        >
          <option value="">Sort by price</option>
          <option value="low">Low → High</option>
          <option value="high">High → Low</option>
        </select>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
        {filtered.map((product) => (
          <div
            key={product.id}
            className="border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition p-4 flex flex-col"
          >
            <Link
              to={`/product/${product.id}`}
              className="mb-4 block overflow-hidden rounded-md"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full aspect-[4/3] object-cover rounded-md transform hover:scale-105 transition duration-300"
              />
            </Link>
            <h2 className="font-semibold text-lg mb-2 text-gray-900">
              {product.title}
            </h2>
            <p className="text-indigo-600 font-bold text-xl mb-4">
              ${product.price}
            </p>
            <button
              className="mt-auto bg-indigo-600 text-white rounded-md py-2 px-4 hover:bg-indigo-700 transition focus:outline-none focus:ring-2 focus:ring-indigo-500"
              onClick={() => addToCart(product)}
              aria-label={`Add ${product.title} to cart`}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
