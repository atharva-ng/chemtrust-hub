import { Link } from "react-router-dom";
import { Product } from "@/data/products";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

const typeColors = {
  Concentrate: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
  "Ready to Use": "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="group flex h-full flex-col transition-shadow hover:shadow-md">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1">
            <p className="text-xs font-medium text-primary mb-1">{product.code}</p>
            <h3 className="font-semibold leading-tight group-hover:text-primary transition-colors">
              {product.name}
            </h3>
          </div>
          <Badge variant="secondary" className={typeColors[product.type]}>
            {product.type}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="flex-1 pb-3">
        <p className="mb-4 text-sm text-muted-foreground line-clamp-2">
          {product.description}
        </p>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Series:</span>
            <span className="font-medium text-right">{product.series}</span>
          </div>
          {product.usage && (
            <div>
              <span className="text-muted-foreground">Dilution:</span>
              <div className="mt-1 flex flex-wrap gap-1">
                {Object.entries(product.usage).slice(0, 2).map(([key, value]) => (
                  <span
                    key={key}
                    className="rounded bg-muted px-1.5 py-0.5 text-xs"
                  >
                    {value}
                  </span>
                ))}
              </div>
            </div>
          )}
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
