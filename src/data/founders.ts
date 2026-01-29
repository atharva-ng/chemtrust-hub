export interface Founder {
  id: string;
  name: string;
  role: string;
  bio: string;
  expertise: string[];
  image: string;
}

export const founders: Founder[] = [
  {
    id: "dr-james-chen",
    name: "Dr. James Chen",
    role: "Chief Executive Officer & Co-Founder",
    bio: "Dr. Chen brings over 25 years of experience in chemical manufacturing and business leadership. He holds a Ph.D. in Chemical Engineering from MIT and has previously led R&D divisions at major chemical corporations. His vision for ChemCo focuses on sustainable manufacturing and customer-centric innovation.",
    expertise: ["Chemical Engineering", "Business Strategy", "Sustainable Manufacturing"],
    image: "/placeholder.svg",
  },
  {
    id: "dr-sarah-mitchell",
    name: "Dr. Sarah Mitchell",
    role: "Chief Scientific Officer & Co-Founder",
    bio: "With a Ph.D. in Organic Chemistry from Stanford University, Dr. Mitchell leads our research and development initiatives. Her 20+ years in pharmaceutical and specialty chemicals have resulted in numerous patents and industry innovations. She is passionate about developing high-purity chemicals for critical applications.",
    expertise: ["Organic Chemistry", "R&D Leadership", "Quality Systems"],
    image: "/placeholder.svg",
  },
  {
    id: "michael-rodriguez",
    name: "Michael Rodriguez",
    role: "Chief Operations Officer & Co-Founder",
    bio: "Michael has spent two decades optimizing chemical manufacturing operations across North America and Europe. His expertise in lean manufacturing and supply chain management has been instrumental in establishing ChemCo's reputation for reliability and on-time delivery.",
    expertise: ["Operations Management", "Supply Chain", "Lean Manufacturing"],
    image: "/placeholder.svg",
  },
];