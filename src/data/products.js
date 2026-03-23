export const categories = [
  "All",
  "Mobiles",
  "Laptops",
  "Audio",
  "Fashion",
  "Home",
];

export const products = [
  {
    id: "nova-x1",
    name: "Nova X1 Pro Smartphone",
    category: "Mobiles",
    brand: "Nova",
    price: 52999,
    originalPrice: 62999,
    rating: 4.8,
    reviews: 1824,
    stock: "In Stock",
    badge: "Top Rated",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80"
    ],
    description:
      "Flagship performance, cinematic display, and all-day battery in a sleek metal frame.",
    specs: ["144Hz AMOLED", "120W fast charge", "50MP OIS camera", "512GB storage"],
    featured: true,
  },
  {
    id: "pulsebook-air",
    name: "PulseBook Air 14",
    category: "Laptops",
    brand: "Pulse",
    price: 78990,
    originalPrice: 89990,
    rating: 4.7,
    reviews: 943,
    stock: "In Stock",
    badge: "Best Seller",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?auto=format&fit=crop&w=900&q=80"
    ],
    description:
      "Ultra-light laptop tuned for productivity, creative workflows, and battery life that keeps going.",
    specs: ["2.8K display", "16GB RAM", "1TB SSD", "18-hour battery"],
    featured: true,
  },
  {
    id: "echo-buds-max",
    name: "Echo Buds Max",
    category: "Audio",
    brand: "Echo",
    price: 6999,
    originalPrice: 9999,
    rating: 4.6,
    reviews: 5221,
    stock: "In Stock",
    badge: "Hot Deal",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=900&q=80"
    ],
    description:
      "Deep bass, active noise cancellation, and a compact case designed for daily commutes.",
    specs: ["ANC", "38-hour playtime", "Spatial audio", "IPX5 resistant"],
    featured: true,
  },
  {
    id: "urban-knit-set",
    name: "Urban Knit Co-ord Set",
    category: "Fashion",
    brand: "ModeHaus",
    price: 2999,
    originalPrice: 4499,
    rating: 4.4,
    reviews: 312,
    stock: "Low Stock",
    badge: "New Drop",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80"
    ],
    description:
      "Soft, modern streetwear set with a relaxed fit and premium detailing for everyday styling.",
    specs: ["Cotton blend", "Relaxed fit", "Machine washable", "Seasonal colorway"],
    featured: false,
  },
  {
    id: "aura-lamp",
    name: "Aura Smart Ambient Lamp",
    category: "Home",
    brand: "Luma",
    price: 4599,
    originalPrice: 5999,
    rating: 4.5,
    reviews: 701,
    stock: "In Stock",
    badge: "Trending",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=900&q=80"
    ],
    description:
      "Voice-enabled lamp with adaptive scenes and warm gradients built to transform your desk or bedroom.",
    specs: ["16M colors", "App control", "Voice assistant ready", "Scene presets"],
    featured: false,
  },
  {
    id: "zenpad-11",
    name: "ZenPad 11 Tablet",
    category: "Mobiles",
    brand: "Zen",
    price: 34990,
    originalPrice: 39990,
    rating: 4.3,
    reviews: 654,
    stock: "In Stock",
    badge: "Student Pick",
    image:
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?auto=format&fit=crop&w=900&q=80"
    ],
    description:
      "Lightweight tablet for streaming, sketching, studying, and taking notes on the move.",
    specs: ["11-inch display", "Stylus support", "Quad speakers", "Fast charging"],
    featured: false,
  },
  {
    id: "studio-view-curve",
    name: "StudioView Curved Monitor",
    category: "Laptops",
    brand: "StudioView",
    price: 22999,
    originalPrice: 27999,
    rating: 4.6,
    reviews: 488,
    stock: "In Stock",
    badge: "Creator Choice",
    image:
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=900&q=80"
    ],
    description:
      "Immersive curved monitor with rich color accuracy for workstations, editing, and gaming.",
    specs: ["34-inch ultrawide", "165Hz refresh", "USB-C hub", "HDR400"],
    featured: false,
  },
  {
    id: "roam-pack",
    name: "Roam Tech Backpack",
    category: "Fashion",
    brand: "Roam",
    price: 2499,
    originalPrice: 3599,
    rating: 4.5,
    reviews: 1430,
    stock: "In Stock",
    badge: "Travel Ready",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80"
    ],
    description:
      "Water-resistant backpack with laptop sleeve, easy-access pockets, and a clean commuter profile.",
    specs: ["18L capacity", "15-inch sleeve", "Water resistant", "Quick access pockets"],
    featured: false,
  },
];

export const stats = [
  { label: "Orders Delivered", value: "12K+" },
  { label: "Happy Customers", value: "8.6K" },
  { label: "Brands Onboard", value: "240+" },
  { label: "Average Rating", value: "4.8/5" },
];
