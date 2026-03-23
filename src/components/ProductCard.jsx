import { Heart, ShoppingBag, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useShop } from "../context/ShopContext";
import { formatCurrency } from "../utils/format";

export default function ProductCard({ product, index = 0 }) {
  const { addToCart, toggleWishlist, isWishlisted } = useShop();
  const saved = isWishlisted(product.id);

  return (
    <article
      data-aos="fade-up"
      data-aos-delay={index * 70}
      className="group glass-panel overflow-hidden rounded-[1.75rem] transition duration-300 hover:-translate-y-1 hover:border-brand-300/40"
    >
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute left-4 top-4 rounded-full bg-slate-950/75 px-3 py-1 text-xs font-semibold text-white">
          {product.badge}
        </div>
        <button
          type="button"
          onClick={() => toggleWishlist(product.id)}
          className={`absolute right-4 top-4 rounded-full p-3 transition ${
            saved
              ? "bg-rose-500 text-white"
              : "bg-slate-950/75 text-white hover:bg-white hover:text-slate-950"
          }`}
          aria-label="Toggle wishlist"
        >
          <Heart className={`h-4 w-4 ${saved ? "fill-current" : ""}`} />
        </button>
      </div>

      <div className="p-5">
        <div className="flex items-center justify-between gap-3">
          <span className="text-xs uppercase tracking-[0.25em] text-brand-200">
            {product.category}
          </span>
          <div className="flex items-center gap-1 text-sm text-amber-300">
            <Star className="h-4 w-4 fill-current" />
            {product.rating}
          </div>
        </div>
        <Link to={`/product/${product.id}`}>
          <h3 className="mt-3 font-display text-xl font-semibold text-white transition group-hover:text-brand-200">
            {product.name}
          </h3>
        </Link>
        <p className="mt-3 text-sm leading-7 text-slate-400">{product.description}</p>
        <div className="mt-4 flex items-end gap-3">
          <p className="text-2xl font-bold text-white">{formatCurrency(product.price)}</p>
          <p className="text-sm text-slate-500 line-through">
            {formatCurrency(product.originalPrice)}
          </p>
        </div>
        <div className="mt-5 flex gap-3">
          <Link
            to={`/product/${product.id}`}
            className="flex-1 rounded-full border border-white/10 px-4 py-3 text-center text-sm font-semibold text-slate-200 transition hover:border-brand-300/50 hover:text-white"
          >
            View Details
          </Link>
          <button
            type="button"
            onClick={() => addToCart(product.id)}
            className="inline-flex items-center justify-center rounded-full bg-brand-500 px-5 py-3 text-white transition hover:bg-brand-400"
          >
            <ShoppingBag className="h-4 w-4" />
          </button>
        </div>
      </div>
    </article>
  );
}
