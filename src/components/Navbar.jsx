import { Link, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { ShoppingCart, Home, Info } from "lucide-react";

export default function Navbar() {
  const { cartCount } = useCart();
  const location = useLocation();

  const navLinks = [
    { to: "/", label: "Home", icon: <Home size={18} /> },
    { to: "/about", label: "About", icon: <Info size={18} /> },
    { to: "/cart", label: "Cart", icon: <ShoppingCart size={18} /> },
  ];

  return (
    <nav className="bg-gray-50 border-b border-gray-200 sticky top-0 z-50 w-full shadow-sm">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-xl font-bold tracking-wide text-indigo-600"
        >
          ByteCraft
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-x-8 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`flex items-center gap-1 hover:text-indigo-600 transition ${
                location.pathname === link.to
                  ? "underline underline-offset-4 text-indigo-600"
                  : "text-gray-700"
              }`}
            >
              {link.icon}
              {link.label === "Cart" ? (
                <>
                  <span>{link.label}</span>
                  <span className="ml-1 bg-indigo-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
                    {cartCount}
                  </span>
                </>
              ) : (
                <span>{link.label}</span>
              )}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
