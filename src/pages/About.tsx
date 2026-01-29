import { Layout } from "@/components/layout/Layout";
import { FounderCard } from "@/components/about/FounderCard";
import { founders } from "@/data/founders";
import { Card, CardContent } from "@/components/ui/card";
import {
  Target,
  Eye,
  Award,
  Building2,
  Lightbulb,
  TrendingUp,
  Shield,
  Users,
} from "lucide-react";

const certifications = [
  { name: "ISO 9001:2015", description: "Quality Management System" },
  { name: "ISO 14001:2015", description: "Environmental Management" },
  { name: "GMP Certified", description: "Good Manufacturing Practice" },
  { name: "REACH Compliant", description: "EU Chemical Registration" },
];

const goals = [
  {
    icon: TrendingUp,
    title: "Market Expansion",
    description: "Expand presence in emerging markets across Asia and South America by 2026.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Launch 15 new specialty chemical products for pharmaceutical applications.",
  },
  {
    icon: Shield,
    title: "Sustainability",
    description: "Achieve carbon neutrality in manufacturing operations by 2030.",
  },
  {
    icon: Users,
    title: "Talent Development",
    description: "Invest in workforce training and expand our team of expert chemists.",
  },
];

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <section className="border-b bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">About ChemCo Industries</h1>
            <p className="text-lg text-muted-foreground">
              For over 25 years, we've been at the forefront of chemical manufacturing,
              delivering excellence to industries worldwide through innovation, quality, and trust.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="mb-4 text-3xl font-bold">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 1998 by three visionary chemists, ChemCo Industries began as a small
                  specialty chemicals supplier serving local pharmaceutical companies. Our founders
                  shared a common belief: that the chemical industry needed a partner who prioritized
                  quality, reliability, and customer success above all else.
                </p>
                <p>
                  Over the past two decades, we've grown from a modest facility into a global
                  chemical manufacturer with state-of-the-art production plants, advanced R&D
                  laboratories, and a distribution network spanning over 40 countries.
                </p>
                <p>
                  Today, ChemCo serves thousands of customers across diverse industries—from
                  pharmaceutical giants to cutting-edge research institutions. Yet our core values
                  remain unchanged: unwavering commitment to quality, continuous innovation, and
                  genuine partnership with every customer we serve.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <Building2 className="h-24 w-24 text-primary/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="border-y bg-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="bg-background">
              <CardContent className="p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">Our Mission</h3>
                <p className="text-muted-foreground">
                  To provide the highest quality chemical products and solutions that enable our
                  customers to achieve their goals, while maintaining the highest standards of safety,
                  environmental responsibility, and ethical business practices.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-background">
              <CardContent className="p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                  <Eye className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">Our Vision</h3>
                <p className="text-muted-foreground">
                  To be the global leader in specialty chemicals, recognized for our innovation,
                  sustainability, and customer-centric approach. We aim to shape the future of the
                  chemical industry through responsible practices and breakthrough solutions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Goals & Roadmap */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Our Goals & Roadmap</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              We're committed to continuous growth and improvement, guided by clear objectives
              that drive our organization forward.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {goals.map((goal) => (
              <Card key={goal.title}>
                <CardContent className="p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <goal.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="mb-2 font-semibold">{goal.title}</h3>
                  <p className="text-sm text-muted-foreground">{goal.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="border-t bg-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Meet Our Founders</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              The vision and expertise of our founding team continue to guide ChemCo's commitment
              to excellence.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {founders.map((founder) => (
              <FounderCard key={founder.id} founder={founder} />
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Certifications & Compliance</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Our commitment to quality is demonstrated through internationally recognized
              certifications and rigorous compliance standards.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {certifications.map((cert) => (
              <Card key={cert.name} className="text-center">
                <CardContent className="p-6">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                    <Award className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="mb-1 font-semibold">{cert.name}</h3>
                  <p className="text-sm text-muted-foreground">{cert.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}