import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useMemo, useState } from "react";
import FeatureStrip from "../components/FeatureStrip";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import ProductFilters from "../components/ProductFilters";
import PromoSection from "../components/PromoSection";
import { useShop } from "../context/ShopContext";

export default function HomePage() {
  const { products } = useShop();
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("featured");

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const filteredProducts = useMemo(() => {
    const lowered = search.trim().toLowerCase();
    const matches = products.filter((product) => {
      const searchable = `${product.name} ${product.category} ${product.brand}`.toLowerCase();
      const matchesSearch = lowered === "" || searchable.includes(lowered);
      const matchesCategory =
        selectedCategory === "All" || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    const sorted = [...matches];
    if (sortBy === "price-low") sorted.sort((a, b) => a.price - b.price);
    if (sortBy === "price-high") sorted.sort((a, b) => b.price - a.price);
    if (sortBy === "rating") sorted.sort((a, b) => b.rating - a.rating);
    if (sortBy === "featured") {
      sorted.sort((a, b) => Number(b.featured) - Number(a.featured));
    }
    return sorted;
  }, [products, search, selectedCategory, sortBy]);

  return (
    <>
      <Hero />
      <FeatureStrip />
      <ProductFilters
        search={search}
        setSearch={setSearch}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
      <section className="section-wrap pb-16">
        <div className="mb-6 flex items-center justify-between gap-4">
          <p className="text-sm text-slate-400">
            Showing <span className="font-semibold text-white">{filteredProducts.length}</span> products
          </p>
          <p className="text-right text-sm text-slate-400">
            Responsive product listing with modern interactions
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </section>
      <PromoSection />
    </>
  );
}
