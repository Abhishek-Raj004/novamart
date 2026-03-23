import { SlidersHorizontal } from "lucide-react";
import { categories } from "../data/products";

export default function ProductFilters({
  search,
  setSearch,
  selectedCategory,
  setSelectedCategory,
  sortBy,
  setSortBy,
}) {
  return (
    <section id="products" className="section-wrap py-8">
      <div className="glass-panel rounded-[2rem] p-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-brand-200">
              Product Listing
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-white">
              Search, filter, and sort in real time
            </h2>
          </div>
          <div className="inline-flex items-center gap-3 rounded-full bg-white/5 px-4 py-3 text-sm text-slate-300">
            <SlidersHorizontal className="h-4 w-4 text-brand-200" />
            Interactive catalog experience
          </div>
        </div>

        <div className="mt-8 grid gap-4 xl:grid-cols-[1.2fr_1fr_0.8fr]">
          <label className="glass-panel flex items-center rounded-[1.25rem] px-4 py-4">
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search by product, category, or brand"
              className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
            />
          </label>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-4 py-3 text-sm font-semibold transition ${
                  selectedCategory === category
                    ? "bg-brand-500 text-white"
                    : "border border-white/10 text-slate-300 hover:border-brand-300/40 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <select
            value={sortBy}
            onChange={(event) => setSortBy(event.target.value)}
            className="rounded-[1.25rem] border border-white/10 bg-transparent px-4 py-4 text-sm text-slate-200 outline-none"
          >
            <option className="bg-slate-900" value="featured">
              Sort: Featured
            </option>
            <option className="bg-slate-900" value="price-low">
              Price: Low to High
            </option>
            <option className="bg-slate-900" value="price-high">
              Price: High to Low
            </option>
            <option className="bg-slate-900" value="rating">
              Rating
            </option>
          </select>
        </div>
      </div>
    </section>
  );
}
