import { useParams, useNavigate } from "react-router-dom";
import products from "../data/products";
import { useCart } from "../context/CartContext";
import { useState } from "react";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const product = products.find((p) => p.id === parseInt(id));
  const [imageLoaded, setImageLoaded] = useState(false);

  if (!product)
    return (
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-8 text-center text-red-600">
        Product not found.
      </div>
    );

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-10">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 text-indigo-600 hover:text-indigo-800 font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded transition"
      >
        ← Back
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="overflow-hidden rounded-lg shadow-sm relative">
          {!imageLoaded && (
            <div className="w-full aspect-square bg-gray-200 animate-pulse rounded-lg" />
          )}
          <img
            src={product.image}
            alt={product.title}
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
            className={`w-full h-auto rounded-lg object-cover transition-opacity duration-500 ${
              imageLoaded ? "opacity-100" : "opacity-0 absolute"
            }`}
          />
        </div>

        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-4 text-gray-900">
              {product.title}
            </h1>
            <p className="text-gray-700 mb-6">{product.description}</p>
            <p className="text-indigo-600 font-extrabold text-2xl mb-6">
              ${product.price}
            </p>
          </div>

          <button
            onClick={() => addToCart(product)}
            className="bg-indigo-600 text-white rounded-md py-3 px-6 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            aria-label={`Add ${product.title} to cart`}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
