import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Sparkles,
  Shield,
  Award,
  Lightbulb,
  Users,
  CheckCircle,
  ArrowRight,
  Target,
  Factory,
  Leaf,
} from "lucide-react";

const highlights = [
  {
    icon: Award,
    title: "Premium Quality",
    description: "High quality raw materials with strict quality control at every stage",
  },
  {
    icon: Shield,
    title: "Safe & Effective",
    description: "Product safety, effectiveness, and consistency guaranteed",
  },
  {
    icon: Lightbulb,
    title: "Innovative Formulas",
    description: "Advanced formulations with improved efficiency and fragrance",
  },
  {
    icon: Users,
    title: "Customer First",
    description: "Solutions for real customer needs with prompt response",
  },
];

const whyChooseUs = [
  {
    icon: CheckCircle,
    title: "Quality Assurance",
    description:
      "High quality raw materials and strict quality control at every stage ensures product safety, effectiveness, and consistency.",
  },
  {
    icon: Target,
    title: "Customer Satisfaction",
    description:
      "Solutions designed for real customer needs with competitive pricing, prompt response, and continuous product improvement.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Advanced formulations, new market-aligned products, improved efficiency, and adoption of emerging technologies.",
  },
  {
    icon: Leaf,
    title: "Regulatory Compliance",
    description:
      "Full regulatory and quality compliance ensuring all products meet industry standards and safety requirements.",
  },
];

const industries = [
  "Hotels & Hospitality",
  "Hospitals & Healthcare",
  "Commercial Buildings",
  "Educational Institutions",
  "Manufacturing Plants",
  "Residential Complexes",
];

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20 md:py-32">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-accent/5 blur-3xl" />
        </div>

        <div className="container relative">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border bg-background/80 px-4 py-2 text-sm backdrop-blur">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">Tough on Dirt. Gentle on Surfaces.</span>
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Clean That You Can See.{" "}
              <span className="text-primary">Power You Can Trust.</span>
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              Sapphire Chemicals delivers high-performance cleaning solutions under the CleanWhiz brand.
              Engineered to clean. Built to last.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" asChild>
                <Link to="/products">
                  View Our Products
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Hygiene is a Necessity, Not a Luxury
              </h2>
              <p className="mb-6 text-lg text-muted-foreground">
                Sapphire Chemicals is a specialized marketing firm for hygiene products, promoting
                solutions that safeguard health, enhance well-being, and elevate everyday living.
              </p>
              <div className="space-y-3">
                <p className="text-muted-foreground">
                  Our mission is to make effective, dependable, and modern hygiene solutions accessible
                  to every market served. We focus on effectiveness, safety, consistency, innovation,
                  and customer satisfaction.
                </p>
              </div>
              <div className="mt-8">
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  Industries We Serve
                </h3>
                <div className="flex flex-wrap gap-2">
                  {industries.map((industry) => (
                    <span
                      key={industry}
                      className="rounded-full border bg-muted/50 px-3 py-1 text-sm"
                    >
                      {industry}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 p-8">
                <div className="flex h-full items-center justify-center">
                  <Factory className="h-32 w-32 text-primary/40" />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 rounded-xl border bg-background p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                    <Shield className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold">Quality Assured</p>
                    <p className="text-sm text-muted-foreground">Made in India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="border-y bg-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Why CleanWhiz?</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Quality-driven manufacturing combined with innovative formulations to deliver
              exceptional cleaning performance.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item) => (
              <Card key={item.title} className="border-none bg-background shadow-sm">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Our Values</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Partner with a company that prioritizes quality, customer satisfaction, and continuous innovation.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                  <item.icon className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="mb-2 font-semibold">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t bg-primary py-16 md:py-24">
        <div className="container text-center">
          <h2 className="mb-4 text-3xl font-bold text-primary-foreground md:text-4xl">
            Ready to Get Started?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-primary-foreground/80">
            Contact our team today to discuss your cleaning requirements and discover how CleanWhiz
            can support your operations.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/products">Browse Products</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/20 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
              asChild
            >
              <Link to="/contact">Request a Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
