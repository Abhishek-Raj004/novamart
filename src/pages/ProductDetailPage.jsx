import { Heart, ShieldCheck, ShoppingBag, Star, Truck } from "lucide-react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useShop } from "../context/ShopContext";
import { formatCurrency } from "../utils/format";

export default function ProductDetailPage() {
  const { productId } = useParams();
  const { products, addToCart, toggleWishlist, isWishlisted } = useShop();
  const product = products.find((item) => item.id === productId);
  const [selectedImage, setSelectedImage] = useState(product?.gallery?.[0] ?? "");

  if (!product) {
    return (
      <div className="section-wrap py-24">
        <div className="glass-panel rounded-[2rem] p-10 text-center">
          <h1 className="font-display text-3xl font-bold text-white">Product not found</h1>
          <Link to="/" className="mt-6 inline-block rounded-full bg-brand-500 px-6 py-3 font-semibold text-white">
            Back to store
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="section-wrap py-10 lg:py-16">
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="glass-panel rounded-[2rem] p-5">
          <img
            src={selectedImage}
            alt={product.name}
            className="h-[430px] w-full rounded-[1.5rem] object-cover"
          />
          <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {product.gallery.map((image) => (
              <button
                key={image}
                type="button"
                onClick={() => setSelectedImage(image)}
                className={`overflow-hidden rounded-[1.25rem] border ${
                  selectedImage === image ? "border-brand-300" : "border-white/10"
                }`}
              >
                <img src={image} alt={product.name} className="h-24 w-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        <div className="glass-panel rounded-[2rem] p-8">
          <p className="text-sm uppercase tracking-[0.35em] text-brand-200">{product.category}</p>
          <h1 className="mt-4 font-display text-4xl font-bold text-white">{product.name}</h1>
          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-slate-300">
            <span className="inline-flex items-center gap-1 text-amber-300">
              <Star className="h-4 w-4 fill-current" /> {product.rating}
            </span>
            <span>{product.reviews} reviews</span>
            <span className="rounded-full bg-brand-500/15 px-3 py-1 text-brand-100">
              {product.stock}
            </span>
          </div>
          <div className="mt-6 flex items-end gap-4">
            <p className="text-4xl font-bold text-white">{formatCurrency(product.price)}</p>
            <p className="text-lg text-slate-500 line-through">
              {formatCurrency(product.originalPrice)}
            </p>
          </div>
          <p className="mt-6 text-sm leading-8 text-slate-400">{product.description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {product.specs.map((spec) => (
              <span
                key={spec}
                className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300"
              >
                {spec}
              </span>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <button
              type="button"
              onClick={() => addToCart(product.id)}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-500 px-6 py-4 font-semibold text-white transition hover:bg-brand-400"
            >
              <ShoppingBag className="h-4 w-4" /> Add to Cart
            </button>
            <button
              type="button"
              onClick={() => toggleWishlist(product.id)}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-6 py-4 font-semibold text-slate-200 transition hover:border-brand-300/50 hover:text-white"
            >
              <Heart className={`h-4 w-4 ${isWishlisted(product.id) ? "fill-current text-rose-400" : ""}`} />
              Save to Wishlist
            </button>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
              <Truck className="h-5 w-5 text-brand-200" />
              <p className="mt-3 font-semibold text-white">Fast delivery</p>
              <p className="mt-2 text-sm text-slate-400">Dispatch within 24 hours in major cities.</p>
            </div>
            <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
              <ShieldCheck className="h-5 w-5 text-brand-200" />
              <p className="mt-3 font-semibold text-white">Secure buying confidence</p>
              <p className="mt-2 text-sm text-slate-400">Protected checkout and easy return messaging.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
