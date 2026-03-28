import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  ArrowLeft,
  Sparkles,
  AlertTriangle,
  FileText,
  Droplets,
  Info,
} from "lucide-react";
import {
  typeColors,
  safetyTips,
  productNotFound,
  productDetailLabels as labels,
} from "@/data/productDetail";

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <Layout>
        <div className="container py-24 text-center">
          <Sparkles className="mx-auto h-16 w-16 text-muted-foreground/50" />
          <h1 className="mt-6 text-2xl font-bold">{productNotFound.title}</h1>
          <p className="mt-2 text-muted-foreground">
            {productNotFound.description}
          </p>
          <Button asChild className="mt-6">
            <Link to="/products">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {productNotFound.backButton}
            </Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="border-b bg-muted/30">
        <div className="container py-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/products">Products</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{product.name}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <div className="container py-8 md:py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Header */}
            <div>
              <div className="flex items-start gap-4 mb-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <Sparkles className="h-7 w-7 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-primary mb-1">{product.code}</p>
                  <h1 className="text-2xl font-bold md:text-3xl">{product.name}</h1>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className={typeColors[product.type]}>
                  {product.type}
                </Badge>
                <Badge variant="outline">{product.series}</Badge>
              </div>
            </div>

            {/* Description */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Info className="h-5 w-5 text-primary" />
                  {labels.description}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{product.description}</p>
              </CardContent>
            </Card>

            {/* Usage Instructions */}
            {product.usage && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Droplets className="h-5 w-5 text-primary" />
                    {labels.dilutionUsage}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="py-3 pr-4 text-left font-semibold">{labels.conditionColumn}</th>
                          <th className="py-3 text-left font-semibold">{labels.dilutionColumn}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {Object.entries(product.usage).map(([key, value]) => (
                          <tr key={key} className="border-b last:border-0">
                            <td className="py-3 pr-4 text-muted-foreground">{key}</td>
                            <td className="py-3 font-medium">{value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Safety Information */}
            <Card className="border-amber-200 bg-amber-50/50 dark:border-amber-900/50 dark:bg-amber-950/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-amber-800 dark:text-amber-200">
                  <AlertTriangle className="h-5 w-5" />
                  {labels.safetyTitle}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-amber-900/80 dark:text-amber-100/80">
                <ul className="space-y-2 text-sm">
                  {safetyTips.map((tip) => (
                    <li key={tip}>• {tip}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Info */}
            <Card>
              <CardHeader>
                <CardTitle>{labels.productInfo}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">{labels.productCode}</span>
                  <span className="font-medium">{product.code}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">{labels.type}</span>
                  <span className="font-medium">{product.type}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">{labels.series}</span>
                  <span className="font-medium">{product.series}</span>
                </div>
              </CardContent>
            </Card>

            {/* Documentation */}
            <Card>
              <CardHeader>
                <CardTitle>{labels.documentation}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start" disabled>
                  <FileText className="mr-2 h-4 w-4" />
                  {labels.tdsButton}
                </Button>
                <Button variant="outline" className="w-full justify-start" disabled>
                  <FileText className="mr-2 h-4 w-4" />
                  {labels.sdsButton}
                </Button>
                <p className="text-xs text-muted-foreground">
                  {labels.docNote}
                </p>
              </CardContent>
            </Card>

            {/* CTA */}
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">{labels.ctaTitle}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {labels.ctaDescription}
                </p>
                <Button asChild className="w-full">
                  <Link to="/contact">{labels.ctaButton}</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Back to Products */}
            <Button variant="outline" asChild className="w-full">
              <Link to="/products">
                <ArrowLeft className="mr-2 h-4 w-4" />
                {productNotFound.backButton}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
