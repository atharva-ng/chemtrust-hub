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
  Shield,
  Users,
  CheckCircle,
} from "lucide-react";

const values = [
  {
    icon: Award,
    title: "Quality",
    points: [
      "High quality raw materials",
      "Strict quality control at every stage",
      "Product safety, effectiveness, and consistency",
      "Regulatory and quality compliance",
    ],
  },
  {
    icon: Users,
    title: "Customer Satisfaction",
    points: [
      "Solutions for real customer needs",
      "Competitive pricing",
      "Prompt customer response",
      "Continuous product improvement",
    ],
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    points: [
      "Advanced formulations",
      "New market-aligned products",
      "Improved efficiency and fragrance",
      "Adoption of emerging technologies",
    ],
  },
];

const focusAreas = [
  "Effectiveness",
  "Safety",
  "Consistency",
  "Innovation",
  "Customer Satisfaction",
];

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <section className="border-b bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">About Sapphire Chemicals</h1>
            <p className="text-lg text-muted-foreground">
              Quality-driven manufacturer of high-performance cleaning solutions under the CleanWhiz brand.
              We believe hygiene is a necessity, not a luxury.
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
                  Sapphire Chemicals is a specialized marketing firm for hygiene products, promoting
                  solutions that safeguard health, enhance well-being, and elevate everyday living.
                </p>
                <p>
                  Under our CleanWhiz brand, we deliver high-performance cleaning solutions for
                  diverse applications—from housekeeping and kitchen care to industrial cleaning
                  and laundry. Our products are trusted by hotels, hospitals, commercial establishments,
                  and households across India.
                </p>
                <p>
                  We are committed to making effective, dependable, and modern hygiene solutions
                  accessible to every market we serve, maintaining the highest standards of quality
                  and customer satisfaction.
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
                  To make effective, dependable, and modern hygiene solutions accessible to every
                  market served. We are committed to delivering products that combine effectiveness,
                  safety, consistency, and innovation.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-background">
              <CardContent className="p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                  <Eye className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">Our Belief</h3>
                <p className="text-muted-foreground">
                  Hygiene is a necessity, not a luxury. Every space deserves professional-grade
                  cleanliness, and every customer deserves products that deliver on their promises.
                  Clean that you can see. Power you can trust.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Our Focus Areas</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Every product we develop is guided by these core principles.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {focusAreas.map((area) => (
              <div
                key={area}
                className="flex items-center gap-2 rounded-full border bg-background px-6 py-3 shadow-sm"
              >
                <CheckCircle className="h-5 w-5 text-accent" />
                <span className="font-medium">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-y bg-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Our Values</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              The principles that guide everything we do at Sapphire Chemicals.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {values.map((value) => (
              <Card key={value.title} className="bg-background">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <value.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="mb-4 font-semibold text-lg">{value.title}</h3>
                  <ul className="space-y-2">
                    {value.points.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Shield className="h-4 w-4 shrink-0 text-accent mt-0.5" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Meet Our Team</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              The expertise and vision of our leadership team drives Sapphire Chemicals' commitment
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
    </Layout>
  );
}
