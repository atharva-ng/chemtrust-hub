import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { ProductCard } from "@/components/products/ProductCard";
import { ProductFilters } from "@/components/products/ProductFilters";
import { products } from "@/data/products";
import { Beaker } from "lucide-react";

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get("search") || "");
  const [selectedGrades, setSelectedGrades] = useState<string[]>(() => {
    const grade = searchParams.get("grade");
    return grade ? [grade] : [];
  });
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchesSearch =
          product.name.toLowerCase().includes(query) ||
          product.shortDescription.toLowerCase().includes(query) ||
          product.casNumber.includes(query) ||
          product.category.toLowerCase().includes(query);
        if (!matchesSearch) return false;
      }

      // Grade filter
      if (selectedGrades.length > 0 && !selectedGrades.includes(product.grade)) {
        return false;
      }

      // Category filter
      if (selectedCategories.length > 0 && !selectedCategories.includes(product.category)) {
        return false;
      }

      return true;
    });
  }, [searchQuery, selectedGrades, selectedCategories]);

  const handleClearFilters = () => {
    setSearchQuery("");
    setSelectedGrades([]);
    setSelectedCategories([]);
    setSearchParams({});
  };

  return (
    <Layout>
      {/* Header */}
      <section className="border-b bg-muted/30 py-12 md:py-16">
        <div className="container">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <Beaker className="h-5 w-5 text-primary" />
            </div>
            <h1 className="text-3xl font-bold md:text-4xl">Chemical Products</h1>
          </div>
          <p className="max-w-2xl text-muted-foreground">
            Browse our comprehensive catalog of high-quality industrial, laboratory, and
            pharmaceutical-grade chemicals. All products meet strict quality standards and are
            available with full documentation.
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
                selectedGrades={selectedGrades}
                onGradeChange={setSelectedGrades}
                selectedCategories={selectedCategories}
                onCategoryChange={setSelectedCategories}
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
                  <Beaker className="mx-auto h-12 w-12 text-muted-foreground/50" />
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