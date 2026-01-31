export interface Founder {
  id: string;
  name: string;
  role: string;
  bio: string;
}

export const founders: Founder[] = [
  {
    id: "founder-1",
    name: "Rajesh Sharma",
    role: "Founder & Managing Director",
    bio: "With over 20 years of experience in the chemical industry, Rajesh founded Sapphire Chemicals with a vision to make quality hygiene products accessible to every market.",
  },
  {
    id: "founder-2",
    name: "Priya Patel",
    role: "Co-Founder & Head of R&D",
    bio: "A formulation chemist with expertise in surfactant chemistry, Priya leads product innovation and ensures every CleanWhiz product meets the highest efficacy standards.",
  },
  {
    id: "founder-3",
    name: "Amit Desai",
    role: "Co-Founder & Operations Director",
    bio: "Amit brings deep expertise in manufacturing operations and quality systems, ensuring consistent production and timely delivery across all product lines.",
  },
];
