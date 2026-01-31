import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { ProductCard } from "@/components/products/ProductCard";
import { ProductFilters } from "@/components/products/ProductFilters";
import { products } from "@/data/products";
import { Sparkles } from "lucide-react";

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get("search") || "");
  const [selectedSeries, setSelectedSeries] = useState<string[]>(() => {
    const series = searchParams.get("series");
    return series ? [series] : [];
  });
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchesSearch =
          product.name.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query) ||
          product.code.toLowerCase().includes(query) ||
          product.series.toLowerCase().includes(query);
        if (!matchesSearch) return false;
      }

      // Series filter
      if (selectedSeries.length > 0 && !selectedSeries.includes(product.series)) {
        return false;
      }

      // Type filter
      if (selectedTypes.length > 0 && !selectedTypes.includes(product.type)) {
        return false;
      }

      return true;
    });
  }, [searchQuery, selectedSeries, selectedTypes]);

  const handleClearFilters = () => {
    setSearchQuery("");
    setSelectedSeries([]);
    setSelectedTypes([]);
    setSearchParams({});
  };

  return (
    <Layout>
      {/* Header */}
      <section className="border-b bg-muted/30 py-12 md:py-16">
        <div className="container">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <Sparkles className="h-5 w-5 text-primary" />
            </div>
            <h1 className="text-3xl font-bold md:text-4xl">CleanWhiz Products</h1>
          </div>
          <p className="max-w-2xl text-muted-foreground">
            Browse our comprehensive range of high-performance cleaning solutions for housekeeping,
            kitchen, laundry, and industrial applications. All products are quality assured and
            designed for professional results.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-8 md:py-12">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
            {/* Sidebar Filters */}
            <aside className="space-y-4">
              <ProductFilters
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                selectedSeries={selectedSeries}
                onSeriesChange={setSelectedSeries}
                selectedTypes={selectedTypes}
                onTypeChange={setSelectedTypes}
                onClearFilters={handleClearFilters}
              />
            </aside>

            {/* Products */}
            <div>
              <div className="mb-4 flex items-center justify-between">
                <p className="text-sm text-muted-foreground">
                  Showing {filteredProducts.length} of {products.length} products
                </p>
              </div>

              {filteredProducts.length > 0 ? (
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="rounded-lg border bg-muted/30 p-12 text-center">
                  <Sparkles className="mx-auto h-12 w-12 text-muted-foreground/50" />
                  <h3 className="mt-4 font-semibold">No products found</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Try adjusting your search or filter criteria.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
