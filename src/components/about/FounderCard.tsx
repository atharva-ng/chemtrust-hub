import { Founder } from "@/data/founders";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User } from "lucide-react";

interface FounderCardProps {
  founder: Founder;
}

export function FounderCard({ founder }: FounderCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
        <User className="h-24 w-24 text-primary/30" />
      </div>
      <CardContent className="p-6">
        <h3 className="font-semibold text-lg">{founder.name}</h3>
        <p className="text-sm text-primary mb-3">{founder.role}</p>
        <p className="text-sm text-muted-foreground mb-4">{founder.bio}</p>
        <div className="flex flex-wrap gap-2">
          {founder.expertise.map((skill) => (
            <Badge key={skill} variant="secondary" className="text-xs">
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}