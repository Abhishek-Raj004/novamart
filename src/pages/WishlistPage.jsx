import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { useShop } from "../context/ShopContext";

export default function WishlistPage() {
  const { wishlistItems } = useShop();

  return (
    <section className="section-wrap py-10 lg:py-16">
      <p className="text-sm uppercase tracking-[0.35em] text-brand-200">Saved Items</p>
      <h1 className="mt-4 font-display text-4xl font-bold text-white">Your wishlist</h1>
      {wishlistItems.length === 0 ? (
        <div className="glass-panel mt-8 rounded-[2rem] p-10 text-center">
          <Heart className="mx-auto h-12 w-12 text-brand-200" />
          <p className="mt-5 text-lg font-semibold text-white">No saved products yet</p>
          <p className="mt-3 text-sm text-slate-400">
            Tap the heart icon on product cards to build a shortlist.
          </p>
          <Link
            to="/"
            className="mt-6 inline-flex rounded-full bg-brand-500 px-6 py-3 font-semibold text-white"
          >
            Browse Products
          </Link>
        </div>
      ) : (
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {wishlistItems.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      )}
    </section>
  );
}
