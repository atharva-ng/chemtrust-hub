import { Link } from "react-router-dom";
import { Product } from "@/data/products";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

const gradeColors = {
  Industrial: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
  Laboratory: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300",
  Pharmaceutical: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="group flex h-full flex-col transition-shadow hover:shadow-md">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1">
            <h3 className="font-semibold leading-tight group-hover:text-primary transition-colors">
              {product.name}
            </h3>
            <p className="mt-1 text-xs text-muted-foreground">CAS: {product.casNumber}</p>
          </div>
          <Badge variant="secondary" className={gradeColors[product.grade]}>
            {product.grade}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="flex-1 pb-3">
        <p className="mb-4 text-sm text-muted-foreground line-clamp-2">
          {product.shortDescription}
        </p>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Potency:</span>
            <span className="font-medium">{product.potency}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Category:</span>
            <span className="font-medium">{product.category}</span>
          </div>
          <div>
            <span className="text-muted-foreground">Available:</span>
            <div className="mt-1 flex flex-wrap gap-1">
              {product.weights.slice(0, 3).map((weight) => (
                <span
                  key={weight}
                  className="rounded bg-muted px-1.5 py-0.5 text-xs"
                >
                  {weight}
                </span>
              ))}
              {product.weights.length > 3 && (
                <span className="rounded bg-muted px-1.5 py-0.5 text-xs">
                  +{product.weights.length - 3} more
                </span>
              )}
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-0">
        <Button variant="ghost" size="sm" className="w-full" asChild>
          <Link to={`/products/${product.id}`}>
            View Details
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}