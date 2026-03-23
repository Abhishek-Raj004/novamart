import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { products } from "../data/products";

const ShopContext = createContext(null);

const CART_KEY = "novamart-cart";
const WISHLIST_KEY = "novamart-wishlist";

function readStorage(key, fallback) {
  if (typeof window === "undefined") return fallback;

  try {
    const raw = window.localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

export function ShopProvider({ children }) {
  const [cart, setCart] = useState(() => readStorage(CART_KEY, []));
  const [wishlist, setWishlist] = useState(() => readStorage(WISHLIST_KEY, []));

  useEffect(() => {
    window.localStorage.setItem(CART_KEY, JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    window.localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
  }, [wishlist]);

  const cartItems = useMemo(
    () =>
      cart.map((entry) => ({
        ...products.find((product) => product.id === entry.id),
        quantity: entry.quantity,
      })),
    [cart],
  );

  const wishlistItems = useMemo(
    () => products.filter((product) => wishlist.includes(product.id)),
    [wishlist],
  );

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const wishlistCount = wishlist.length;
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  function addToCart(productId) {
    setCart((current) => {
      const existing = current.find((item) => item.id === productId);
      if (existing) {
        return current.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...current, { id: productId, quantity: 1 }];
    });
  }

  function updateCartQuantity(productId, quantity) {
    setCart((current) =>
      quantity <= 0
        ? current.filter((item) => item.id !== productId)
        : current.map((item) =>
            item.id === productId ? { ...item, quantity } : item,
          ),
    );
  }

  function removeFromCart(productId) {
    setCart((current) => current.filter((item) => item.id !== productId));
  }

  function toggleWishlist(productId) {
    setWishlist((current) =>
      current.includes(productId)
        ? current.filter((id) => id !== productId)
        : [...current, productId],
    );
  }

  return (
    <ShopContext.Provider
      value={{
        products,
        cartItems,
        wishlistItems,
        cartCount,
        wishlistCount,
        subtotal,
        addToCart,
        updateCartQuantity,
        removeFromCart,
        toggleWishlist,
        isWishlisted: (productId) => wishlist.includes(productId),
      }}
    >
      {children}
    </ShopContext.Provider>
  );
}

export function useShop() {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error("useShop must be used within ShopProvider");
  }

  return context;
}
