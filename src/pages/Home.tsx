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
import {
  heroSection,
  introSection,
  industries,
  highlightsSection,
  highlights,
  valuesSection,
  whyChooseUs,
  ctaSection,
} from "@/data/home";

const iconMap = { Award, Shield, Lightbulb, Users, CheckCircle, Target, Leaf };

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
              <span className="text-muted-foreground">{heroSection.badge}</span>
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              {heroSection.headline}{" "}
              <span className="text-primary">{heroSection.headlineAccent}</span>
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              {heroSection.subheading}
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" asChild>
                <Link to="/products">
                  {heroSection.ctaPrimary}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">{heroSection.ctaSecondary}</Link>
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
                {introSection.title}
              </h2>
              <p className="mb-6 text-lg text-muted-foreground">
                {introSection.description}
              </p>
              <div className="space-y-3">
                <p className="text-muted-foreground">
                  {introSection.body}
                </p>
              </div>
              <div className="mt-8">
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  {introSection.industriesLabel}
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
                    <p className="font-semibold">{introSection.qualityBadge}</p>
                    <p className="text-sm text-muted-foreground">{introSection.originBadge}</p>
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
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">{highlightsSection.title}</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              {highlightsSection.description}
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item) => {
              const Icon = iconMap[item.iconName];
              return (
                <Card key={item.title} className="border-none bg-background shadow-sm">
                  <CardContent className="p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mb-2 font-semibold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">{valuesSection.title}</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              {valuesSection.description}
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {whyChooseUs.map((item) => {
              const Icon = iconMap[item.iconName];
              return (
                <div key={item.title} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                    <Icon className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t bg-primary py-16 md:py-24">
        <div className="container text-center">
          <h2 className="mb-4 text-3xl font-bold text-primary-foreground md:text-4xl">
            {ctaSection.title}
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-primary-foreground/80">
            {ctaSection.description}
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/products">{ctaSection.ctaPrimary}</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/20 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
              asChild
            >
              <Link to="/contact">{ctaSection.ctaSecondary}</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
