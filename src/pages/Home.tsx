import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  FlaskConical,
  Shield,
  Award,
  Globe,
  Microscope,
  Users,
  CheckCircle,
  ArrowRight,
  Beaker,
  Factory,
} from "lucide-react";

const highlights = [
  {
    icon: Award,
    title: "25+ Years Experience",
    description: "Trusted expertise in chemical manufacturing since 1998",
  },
  {
    icon: Shield,
    title: "Quality Certified",
    description: "ISO 9001:2015 and GMP certified facilities",
  },
  {
    icon: Microscope,
    title: "R&D Excellence",
    description: "Dedicated research team for product innovation",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Serving clients across 40+ countries worldwide",
  },
];

const whyChooseUs = [
  {
    icon: CheckCircle,
    title: "Quality Assurance",
    description:
      "Rigorous quality control at every stage ensures consistent product purity and performance.",
  },
  {
    icon: Shield,
    title: "Regulatory Compliance",
    description:
      "Full compliance with international standards including REACH, FDA, and EPA regulations.",
  },
  {
    icon: Users,
    title: "Customer-Focused",
    description:
      "Dedicated account managers and technical support for personalized service.",
  },
  {
    icon: Beaker,
    title: "Technical Support",
    description:
      "Expert chemists available to assist with product selection and application guidance.",
  },
];

const industries = [
  "Pharmaceutical",
  "Research & Academia",
  "Food & Beverage",
  "Electronics",
  "Automotive",
  "Water Treatment",
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
              <FlaskConical className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">Trusted Chemical Partner Since 1998</span>
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Quality Chemicals for{" "}
              <span className="text-primary">Critical Applications</span>
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              From laboratory research to industrial manufacturing, ChemCo delivers high-purity
              chemical products with uncompromising quality and reliable supply.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" asChild>
                <Link to="/products">
                  View Our Chemicals
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
                Your Trusted Partner in Chemical Solutions
              </h2>
              <p className="mb-6 text-lg text-muted-foreground">
                ChemCo Industries is a leading manufacturer and supplier of high-quality chemical
                products serving diverse industries worldwide. With state-of-the-art facilities
                and a commitment to excellence, we provide reliable solutions for your most
                demanding applications.
              </p>
              <div className="space-y-3">
                <p className="text-muted-foreground">
                  Our comprehensive product portfolio includes industrial chemicals, laboratory
                  reagents, and pharmaceutical-grade compounds—all manufactured under strict
                  quality controls and certified to international standards.
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
                    <p className="font-semibold">ISO 9001:2015</p>
                    <p className="text-sm text-muted-foreground">Certified Quality</p>
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
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Why ChemCo?</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Decades of expertise combined with cutting-edge technology to deliver exceptional
              quality and service.
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
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">The ChemCo Advantage</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Partner with a company that prioritizes your success through quality, compliance,
              and dedicated support.
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
            Contact our team today to discuss your chemical requirements and discover how ChemCo
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