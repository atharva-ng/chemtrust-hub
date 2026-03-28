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
import {
  aboutHero,
  companyStory,
  missionAndBelief,
  focusAreasSection,
  focusAreas,
  aboutValuesSection,
  aboutValues,
  teamSection,
} from "@/data/about";

const iconMap = { Award, Users, Lightbulb };

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <section className="border-b bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">{aboutHero.title}</h1>
            <p className="text-lg text-muted-foreground">
              {aboutHero.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="mb-4 text-3xl font-bold">{companyStory.title}</h2>
              <div className="space-y-4 text-muted-foreground">
                {companyStory.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
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
                <h3 className="mb-3 text-xl font-semibold">{missionAndBelief.mission.title}</h3>
                <p className="text-muted-foreground">
                  {missionAndBelief.mission.description}
                </p>
              </CardContent>
            </Card>
            <Card className="bg-background">
              <CardContent className="p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                  <Eye className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">{missionAndBelief.belief.title}</h3>
                <p className="text-muted-foreground">
                  {missionAndBelief.belief.description}
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
            <h2 className="mb-4 text-3xl font-bold">{focusAreasSection.title}</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              {focusAreasSection.description}
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
            <h2 className="mb-4 text-3xl font-bold">{aboutValuesSection.title}</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              {aboutValuesSection.description}
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {aboutValues.map((value) => {
              const Icon = iconMap[value.iconName];
              return (
                <Card key={value.title} className="bg-background">
                  <CardContent className="p-6">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
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
              );
            })}
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">{teamSection.title}</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              {teamSection.description}
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
