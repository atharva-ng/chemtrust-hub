import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table";
import {
  ArrowLeft,
  FileText,
  Download,
  AlertTriangle,
  Beaker,
  CheckCircle,
} from "lucide-react";

const gradeColors = {
  Industrial: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
  Laboratory: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300",
  Pharmaceutical: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
};

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <Layout>
        <div className="container py-16 text-center">
          <Beaker className="mx-auto h-16 w-16 text-muted-foreground/50" />
          <h1 className="mt-4 text-2xl font-bold">Product Not Found</h1>
          <p className="mt-2 text-muted-foreground">
            The product you're looking for doesn't exist.
          </p>
          <Button asChild className="mt-6">
            <Link to="/products">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Products
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
          <Button variant="ghost" size="sm" asChild>
            <Link to="/products">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Products
            </Link>
          </Button>
        </div>
      </div>

      <div className="container py-8 md:py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Header */}
            <div>
              <div className="flex flex-wrap items-start gap-3 mb-4">
                <h1 className="text-3xl font-bold md:text-4xl">{product.name}</h1>
                <Badge variant="secondary" className={gradeColors[product.grade]}>
                  {product.grade} Grade
                </Badge>
              </div>
              <p className="text-muted-foreground">CAS Number: {product.casNumber}</p>
              <p className="mt-4 text-lg text-muted-foreground">{product.description}</p>
            </div>

            {/* Chemical Properties */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Beaker className="h-5 w-5" />
                  Chemical Properties
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Molecular Formula</TableCell>
                      <TableCell>{product.properties.molecularFormula}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Molecular Weight</TableCell>
                      <TableCell>{product.properties.molecularWeight}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Appearance</TableCell>
                      <TableCell>{product.properties.appearance}</TableCell>
                    </TableRow>
                    {product.properties.density && (
                      <TableRow>
                        <TableCell className="font-medium">Density</TableCell>
                        <TableCell>{product.properties.density}</TableCell>
                      </TableRow>
                    )}
                    {product.properties.meltingPoint && (
                      <TableRow>
                        <TableCell className="font-medium">Melting Point</TableCell>
                        <TableCell>{product.properties.meltingPoint}</TableCell>
                      </TableRow>
                    )}
                    {product.properties.boilingPoint && (
                      <TableRow>
                        <TableCell className="font-medium">Boiling Point</TableCell>
                        <TableCell>{product.properties.boilingPoint}</TableCell>
                      </TableRow>
                    )}
                    <TableRow>
                      <TableCell className="font-medium">Purity</TableCell>
                      <TableCell>{product.properties.purity}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Applications */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  Applications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="grid gap-2 sm:grid-cols-2">
                  {product.applications.map((application, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {application}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Safety Information */}
            <Card className="border-yellow-600/30">
              <CardHeader className="bg-yellow-50/50 dark:bg-yellow-900/20">
                <CardTitle className="flex items-center gap-2 text-yellow-700 dark:text-yellow-300">
                  <AlertTriangle className="h-5 w-5" />
                  Safety & Handling
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <ul className="space-y-2">
                  {product.safetyInfo.map((info, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <AlertTriangle className="h-4 w-4 mt-0.5 shrink-0 text-yellow-600 dark:text-yellow-400" />
                      {info}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Product Info Card */}
            <Card>
              <CardHeader>
                <CardTitle>Product Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground">Potency</p>
                  <p className="font-semibold">{product.potency}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Category</p>
                  <p className="font-semibold">{product.category}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Available Packaging</p>
                  <div className="flex flex-wrap gap-2">
                    {product.weights.map((weight) => (
                      <span
                        key={weight}
                        className="rounded-md border bg-muted/50 px-2.5 py-1 text-sm font-medium"
                      >
                        {weight}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Downloads */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Documentation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start" asChild>
                  <a href={product.sdsLink}>
                    <Download className="mr-2 h-4 w-4" />
                    Safety Data Sheet (SDS)
                  </a>
                </Button>
                <Button variant="outline" className="w-full justify-start" asChild>
                  <a href={product.technicalDatasheetLink}>
                    <Download className="mr-2 h-4 w-4" />
                    Technical Datasheet
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* CTA */}
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">Need This Product?</h3>
                <p className="text-sm text-primary-foreground/80 mb-4">
                  Contact us for pricing, availability, and custom packaging options.
                </p>
                <Button variant="secondary" className="w-full" asChild>
                  <Link to="/contact">Request a Quote</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}