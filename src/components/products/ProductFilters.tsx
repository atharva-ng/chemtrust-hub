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
import { categories, grades } from "@/data/products";

interface ProductFiltersProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  selectedGrades: string[];
  onGradeChange: (grades: string[]) => void;
  selectedCategories: string[];
  onCategoryChange: (categories: string[]) => void;
  onClearFilters: () => void;
}

export function ProductFilters({
  searchQuery,
  onSearchChange,
  selectedGrades,
  onGradeChange,
  selectedCategories,
  onCategoryChange,
  onClearFilters,
}: ProductFiltersProps) {
  const hasActiveFilters =
    searchQuery || selectedGrades.length > 0 || selectedCategories.length > 0;

  const handleGradeToggle = (grade: string) => {
    if (selectedGrades.includes(grade)) {
      onGradeChange(selectedGrades.filter((g) => g !== grade));
    } else {
      onGradeChange([...selectedGrades, grade]);
    }
  };

  const handleCategoryToggle = (category: string) => {
    if (selectedCategories.includes(category)) {
      onCategoryChange(selectedCategories.filter((c) => c !== category));
    } else {
      onCategoryChange([...selectedCategories, category]);
    }
  };

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Grade Filter */}
      <div>
        <Label className="text-sm font-semibold">Grade</Label>
        <div className="mt-3 space-y-2">
          {grades.map((grade) => (
            <div key={grade} className="flex items-center space-x-2">
              <Checkbox
                id={`grade-${grade}`}
                checked={selectedGrades.includes(grade)}
                onCheckedChange={() => handleGradeToggle(grade)}
              />
              <label
                htmlFor={`grade-${grade}`}
                className="text-sm font-medium leading-none cursor-pointer"
              >
                {grade}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Category Filter */}
      <div>
        <Label className="text-sm font-semibold">Category</Label>
        <div className="mt-3 space-y-2">
          {categories.map((category) => (
            <div key={category} className="flex items-center space-x-2">
              <Checkbox
                id={`category-${category}`}
                checked={selectedCategories.includes(category)}
                onCheckedChange={() => handleCategoryToggle(category)}
              />
              <label
                htmlFor={`category-${category}`}
                className="text-sm font-medium leading-none cursor-pointer"
              >
                {category}
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
            placeholder="Search chemicals..."
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
          {selectedGrades.map((grade) => (
            <span
              key={grade}
              className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary"
            >
              {grade}
              <button onClick={() => handleGradeToggle(grade)}>
                <X className="h-3 w-3" />
              </button>
            </span>
          ))}
          {selectedCategories.map((category) => (
            <span
              key={category}
              className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary"
            >
              {category}
              <button onClick={() => handleCategoryToggle(category)}>
                <X className="h-3 w-3" />
              </button>
            </span>
          ))}
        </div>
      )}
    </div>
  );
}