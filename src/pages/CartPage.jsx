import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useShop } from "../context/ShopContext";
import { formatCurrency } from "../utils/format";

export default function CartPage() {
  const { cartItems, subtotal, updateCartQuantity, removeFromCart } = useShop();
  const delivery = cartItems.length > 0 ? 199 : 0;
  const total = subtotal + delivery;

  return (
    <section className="section-wrap py-10 lg:py-16">
      <div className="mb-8">
        <p className="text-sm uppercase tracking-[0.35em] text-brand-200">Shopping Cart</p>
        <h1 className="mt-4 font-display text-4xl font-bold text-white">Review your order</h1>
      </div>
      <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
        <div className="space-y-4">
          {cartItems.length === 0 ? (
            <div className="glass-panel rounded-[2rem] p-10 text-center">
              <ShoppingBag className="mx-auto h-12 w-12 text-brand-200" />
              <h2 className="mt-5 font-display text-2xl font-bold text-white">Your cart is empty</h2>
              <p className="mt-3 text-sm text-slate-400">
                Add products from the listing page to see the checkout layout come alive.
              </p>
              <Link
                to="/"
                className="mt-6 inline-flex rounded-full bg-brand-500 px-6 py-3 font-semibold text-white"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="glass-panel flex flex-col gap-5 rounded-[2rem] p-5 sm:flex-row">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-40 w-full rounded-[1.5rem] object-cover sm:w-40"
                />
                <div className="flex-1">
                  <div className="flex flex-col justify-between gap-4 sm:flex-row">
                    <div>
                      <p className="text-sm uppercase tracking-[0.25em] text-brand-200">{item.category}</p>
                      <h3 className="mt-2 font-display text-2xl font-semibold text-white">{item.name}</h3>
                    </div>
                    <p className="text-xl font-bold text-white">{formatCurrency(item.price)}</p>
                  </div>
                  <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                    <div className="inline-flex items-center gap-3 rounded-full border border-white/10 px-3 py-2">
                      <button type="button" onClick={() => updateCartQuantity(item.id, item.quantity - 1)}>
                        <Minus className="h-4 w-4 text-slate-300" />
                      </button>
                      <span className="min-w-6 text-center text-sm font-semibold text-white">{item.quantity}</span>
                      <button type="button" onClick={() => updateCartQuantity(item.id, item.quantity + 1)}>
                        <Plus className="h-4 w-4 text-slate-300" />
                      </button>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeFromCart(item.id)}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-rose-300"
                    >
                      <Trash2 className="h-4 w-4" /> Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <aside className="glass-panel h-fit rounded-[2rem] p-6">
          <h2 className="font-display text-2xl font-bold text-white">Price Summary</h2>
          <div className="mt-6 space-y-4 text-sm text-slate-300">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>{formatCurrency(subtotal)}</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery</span>
              <span>{formatCurrency(delivery)}</span>
            </div>
            <div className="border-t border-white/10 pt-4">
              <div className="flex justify-between text-lg font-bold text-white">
                <span>Total</span>
                <span>{formatCurrency(total)}</span>
              </div>
            </div>
          </div>
          <button
            type="button"
            className="mt-8 w-full rounded-full bg-brand-500 px-5 py-4 font-semibold text-white transition hover:bg-brand-400"
          >
            Proceed to Checkout
          </button>
        </aside>
      </div>
    </section>
  );
}
