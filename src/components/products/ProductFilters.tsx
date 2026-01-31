import { Search, SlidersHorizontal, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { series, productTypes } from "@/data/products";

interface ProductFiltersProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  selectedSeries: string[];
  onSeriesChange: (series: string[]) => void;
  selectedTypes: string[];
  onTypeChange: (types: string[]) => void;
  onClearFilters: () => void;
}

export function ProductFilters({
  searchQuery,
  onSearchChange,
  selectedSeries,
  onSeriesChange,
  selectedTypes,
  onTypeChange,
  onClearFilters,
}: ProductFiltersProps) {
  const hasActiveFilters =
    searchQuery || selectedSeries.length > 0 || selectedTypes.length > 0;

  const handleSeriesToggle = (s: string) => {
    if (selectedSeries.includes(s)) {
      onSeriesChange(selectedSeries.filter((item) => item !== s));
    } else {
      onSeriesChange([...selectedSeries, s]);
    }
  };

  const handleTypeToggle = (type: string) => {
    if (selectedTypes.includes(type)) {
      onTypeChange(selectedTypes.filter((t) => t !== type));
    } else {
      onTypeChange([...selectedTypes, type]);
    }
  };

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Series Filter */}
      <div>
        <Label className="text-sm font-semibold">Product Series</Label>
        <div className="mt-3 space-y-2">
          {series.map((s) => (
            <div key={s} className="flex items-center space-x-2">
              <Checkbox
                id={`series-${s}`}
                checked={selectedSeries.includes(s)}
                onCheckedChange={() => handleSeriesToggle(s)}
              />
              <label
                htmlFor={`series-${s}`}
                className="text-sm font-medium leading-none cursor-pointer"
              >
                {s}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Type Filter */}
      <div>
        <Label className="text-sm font-semibold">Product Type</Label>
        <div className="mt-3 space-y-2">
          {productTypes.map((type) => (
            <div key={type} className="flex items-center space-x-2">
              <Checkbox
                id={`type-${type}`}
                checked={selectedTypes.includes(type)}
                onCheckedChange={() => handleTypeToggle(type)}
              />
              <label
                htmlFor={`type-${type}`}
                className="text-sm font-medium leading-none cursor-pointer"
              >
                {type}
              </label>
            </div>
          ))}
        </div>
      </div>

      {hasActiveFilters && (
        <Button variant="outline" size="sm" onClick={onClearFilters} className="w-full">
          <X className="mr-2 h-4 w-4" />
          Clear All Filters
        </Button>
      )}
    </div>
  );

  return (
    <div className="space-y-4">
      {/* Search and Mobile Filter Button */}
      <div className="flex gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10"
          />
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="lg:hidden shrink-0">
              <SlidersHorizontal className="h-4 w-4" />
              <span className="sr-only">Filters</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle>Filters</SheetTitle>
            </SheetHeader>
            <div className="mt-6">
              <FilterContent />
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Filters */}
      <div className="hidden lg:block rounded-lg border bg-card p-6">
        <h3 className="mb-4 font-semibold">Filters</h3>
        <FilterContent />
      </div>

      {/* Active Filters Display */}
      {hasActiveFilters && (
        <div className="flex flex-wrap gap-2 lg:hidden">
          {selectedSeries.map((s) => (
            <span
              key={s}
              className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary"
            >
              {s}
              <button onClick={() => handleSeriesToggle(s)}>
                <X className="h-3 w-3" />
              </button>
            </span>
          ))}
          {selectedTypes.map((type) => (
            <span
              key={type}
              className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary"
            >
              {type}
              <button onClick={() => handleTypeToggle(type)}>
                <X className="h-3 w-3" />
              </button>
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
