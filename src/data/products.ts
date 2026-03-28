export interface ProductUsage {
  [key: string]: string;
}

export interface Product {
  id: string;
  code: string;
  name: string;
  series: string;
  type: "Concentrate" | "Ready to Use";
  description: string;
  usage?: ProductUsage;
  image?: string;
}

export const series = [
  "Housekeeping Series",
  "Kitchen Series",
  "Laundry Series",
];

export const productTypes = ["Concentrate", "Ready to Use"];

export const products: Product[] = [
  // ── Housekeeping Series ──────────────────────────────────────────────
  {
    id: "cw1",
    code: "CW1",
    name: "Bathroom Cleaner cum Sanitizer",
    series: "Housekeeping Series",
    type: "Concentrate",
    description:
      "Effective for cleaning disinfection for all surface, fittings, bathtub, sink walls, tiles and remove hard water stains",
    usage: {
      "Normal Soiling": "10-20ml in 1ltr water",
      "Heavy Soiling": "20-30ml in 1ltr water",
    },
  },
  {
    id: "cw2",
    code: "CW2",
    name: "Floor Cleaner - Hygienic Hard Surface Cleaner Concentrate",
    series: "Housekeeping Series",
    type: "Concentrate",
    description:
      "Effective for all hard surface such polished surface like marble, granite, tiles etc.",
    usage: {
      "Normal Soiling": "10-20ml in 1ltr water",
      "Heavy Soiling": "20-30ml in 1ltr water",
    },
  },
  {
    id: "cw3",
    code: "CW3",
    name: "Glass Cleaner and multisurface cleaner",
    series: "Housekeeping Series",
    type: "Ready to Use",
    description:
      "Effective for all types glass and mirrors regular cleaning of windows, glass display cases; streak free",
  },
  {
    id: "cw4",
    code: "CW4",
    name: "Furniture Shine Maintainer",
    series: "Housekeeping Series",
    type: "Ready to Use",
    description:
      "All wooden surface such as table, wooden chairs, wooden photo frames and other furniture",
  },
  {
    id: "cw5",
    code: "CW5",
    name: "Room Freshener - Water based Air Freshener",
    series: "Housekeeping Series",
    type: "Ready to Use",
    description:
      "Bad odour neutralizer with pleasant fragrance for guest rooms, halls, offices, etc.",
  },
  {
    id: "cw6",
    code: "CW6",
    name: "Toilet Bowl Cleaner",
    series: "Housekeeping Series",
    type: "Ready to Use",
    description:
      "Effective in lime Scale Deposit and stubborn stains from toilet bowl; acts as sanitizer",
  },
  {
    id: "cw7",
    code: "CW7",
    name: "Floor Cleaner Concentrate",
    series: "Housekeeping Series",
    type: "Concentrate",
    description: "Used for both wet mopping as well as scrubbing with machine",
    usage: {
      "Normal Soiling": "10-20ml in 1ltr water",
      "Heavy Soiling": "20-30ml in 1ltr water",
    },
  },
  {
    id: "cw8",
    code: "CW8",
    name: "Multipurpose Paste Cleaner",
    series: "Housekeeping Series",
    type: "Ready to Use",
    description:
      "Effectively removes rust stains, oily stains, paint stains from any surface",
  },
  {
    id: "cw9",
    code: "CW9",
    name: "Washroom Cleaner - Water and rust stain remover",
    series: "Housekeeping Series",
    type: "Concentrate",
    description:
      "Cleaning and disinfecting all surface fitting, bathtubs, sink wall tiles; removes hard water/rust",
    image: "cleanwhiz_images/img_washroom_cleaner.jpeg",
    usage: {
      "Normal Soiling": "50-70ml in 1ltr water",
      "Heavy Soiling": "70-100ml in 1ltr water",
    },
  },
  {
    id: "cwadc",
    code: "CWADC",
    name: "Adhesive Remover - Gummy sticker and Adhesive remover",
    series: "Housekeeping Series",
    type: "Ready to Use",
    description:
      "Removes labels, gummy stains from any surface without any marks",
  },
  {
    id: "cwhac",
    code: "CWHAC",
    name: "Heavy Duty Degreaser (Industrial use)",
    series: "Housekeeping Series",
    type: "Concentrate",
    description:
      "Removes hard soiling, oil and grease stains. Not to be used on marble and shine floors.",
    image: "cleanwhiz_images/img_floor_degreasing.jpeg",
    usage: {
      "Normal Soiling": "10-20ml per 1ltr water",
      "Heavy Soiling": "20-30ml per 1ltr water",
      "Very Heavy Soiling": "50ml per 1ltr water",
    },
  },
  {
    id: "cwls1",
    code: "CWLS1",
    name: "Liquid Soap - Gentle Handwash",
    series: "Housekeeping Series",
    type: "Ready to Use",
    description: "Gentle & Deeply moisturizing liquid soap",
  },
  {
    id: "cwls2",
    code: "CWLS2",
    name: "Liquid Soap Clear - Gentle Handwash",
    series: "Housekeeping Series",
    type: "Ready to Use",
    description: "Clear Hand Wash Liquid with Refreshing Fragrance",
  },
  {
    id: "cwbfs",
    code: "CWBFS",
    name: "Foam Soap - Rich foam soap for handwash",
    series: "Housekeeping Series",
    type: "Ready to Use",
    description:
      "Rich foamy lather for a sensorial hand washing experience",
  },
  {
    id: "cwihc",
    code: "CWIHC",
    name: "Industrial Hand Cleaner",
    series: "Housekeeping Series",
    type: "Ready to Use",
    description:
      "Powerful formula to tackle grease, oil, paint, and other tough contaminants",
  },
  {
    id: "cwacs",
    code: "CWACS",
    name: "Alkaline Cleaner cum Sanitizer",
    series: "Housekeeping Series",
    type: "Concentrate",
    description:
      "Effective cleaning and de-odorizing of Urinal pots, Tiles and ceramics",
    usage: {
      "Normal Soiling": "50-70ml per 1ltr water",
      "Heavy Soiling": "70-100ml per 1ltr water",
    },
  },
  {
    id: "cwhc",
    code: "CWHC",
    name: "Hygiclean - Pine based white phenyl",
    series: "Housekeeping Series",
    type: "Concentrate",
    description:
      "Suitable for floors, kitchen/bathroom tiles and fixtures",
    usage: {
      "Normal Soiling": "10-20ml per 1ltr water",
      "Heavy Soiling": "20-30ml per 1ltr water",
    },
  },
  {
    id: "cwnfc",
    code: "CWNFC",
    name: "Natural Floor Cleaner - Citronella oil based",
    series: "Housekeeping Series",
    type: "Concentrate",
    description:
      "Natural herbs that repel flying insects; used on floors and tiles",
    usage: {
      "Normal Soiling": "10-20ml per 1ltr water",
      "Heavy Soiling": "20-30ml per 1ltr water",
    },
  },
  {
    id: "cwcs",
    code: "CWCS",
    name: "Carpet Shampoo",
    series: "Housekeeping Series",
    type: "Concentrate",
    description: "Carpet & Upholstery Shampoo Concentrate",
    usage: {
      Standard: "50-100ml in 1ltr of water",
    },
  },
  {
    id: "cwcd",
    code: "CWCD",
    name: "Carpet Detergent",
    series: "Housekeeping Series",
    type: "Concentrate",
    description: "Carpet & Upholstery cleaner & stain remover",
    usage: {
      Standard: "50-100ml in 1ltr of water",
    },
  },

  // ── Kitchen Series ───────────────────────────────────────────────────
  {
    id: "cwss",
    code: "CWSS",
    name: "Steel Shiner - Stainless Steel Polish",
    series: "Kitchen Series",
    type: "Ready to Use",
    description:
      "Polishing agent for all kinds of stainless steel surfaces (restaurants, plants, etc.)",
    image: "cleanwhiz_images/img_steel_cleaner.jpeg",
  },
  {
    id: "cwk1",
    code: "CWK1",
    name: "Dishwash Det Concentrate - Manual Dishwash",
    series: "Kitchen Series",
    type: "Concentrate",
    description:
      "Effective cleaning of oil, grease, fat on plates, crockery, utensils, etc.",
    usage: {
      "Normal Soiling": "10-20ml per 1ltr water",
      "Heavy Soiling": "20-30ml per 1ltr water",
    },
  },
  {
    id: "cwk2",
    code: "CWK2",
    name: "Multi Det - Multipurpose Liquid Detergent",
    series: "Kitchen Series",
    type: "Concentrate",
    description:
      "Effective cleaning for kitchen floors, walls, racks, and equipment",
    usage: {
      "Normal Soiling": "10-20ml per 1ltr water",
      "Heavy Soiling": "20-30ml per 1ltr water",
    },
  },
  {
    id: "cwk3",
    code: "CWK3",
    name: "Vegie & Fruit Wash - Chlorine based sanitizer",
    series: "Kitchen Series",
    type: "Concentrate",
    description:
      "For vegetable & fruit wash & chlorination of potable water",
    usage: {
      "Fruits & Vegetables": "5ml per 1ltr water",
      "Potable Water": "1ml per 1ltr water",
    },
  },
  {
    id: "cwk4",
    code: "CWK4",
    name: "Machine Dishwash Det. - Industrial machine detergent",
    series: "Kitchen Series",
    type: "Concentrate",
    description:
      "Non foaming commercial grade liquid detergent for dishwasher machines",
    usage: {
      Standard: "3ml-6ml per 1ltr at 60-65°C",
    },
  },
  {
    id: "cwk5",
    code: "CWK5",
    name: "Machine Dishwash Rinse - Industrial machine rinse aid",
    series: "Kitchen Series",
    type: "Concentrate",
    description: "Concentrated Alkali neutralizer and drying agent",
    usage: {
      Standard: "1ml-3ml per 1ltr at 60-65°C",
    },
  },
  {
    id: "cwk6",
    code: "CWK6",
    name: "Stainless Steel Polish / Oven and grill cleaner",
    series: "Kitchen Series",
    type: "Concentrate",
    description:
      "Removes heavy carbonaceous and baked deposits from grills, ovens, fryers",
    usage: {
      Standard: "100-150ml per 1ltr water",
    },
  },
  {
    id: "cwk8",
    code: "CWK8",
    name: "Descaler Liquid - Descaler concentrate",
    series: "Kitchen Series",
    type: "Concentrate",
    description:
      "Removes calcium and magnesium scales from hard surfaces, metals, and glasses",
    usage: {
      Standard: "100ml-200ml per 1ltr water",
    },
  },
  {
    id: "cwk9",
    code: "CWK9",
    name: "Chlorodet - Chlorine based cleaner cum sparkler",
    series: "Kitchen Series",
    type: "Concentrate",
    description:
      "Formulated for removal of stubborn stains from cups and crockery in soaking process",
    image: "cleanwhiz_images/img_chlorodet_1.jpeg",
    usage: {
      Standard: "30-50ml per 1ltr water",
    },
  },
  {
    id: "cwk10",
    code: "CWK10",
    name: "Kitchen Cleaner - Kitchen surface Cleaner",
    series: "Kitchen Series",
    type: "Ready to Use",
    description:
      "Tackles grease and grime on gas stoves, countertops, and chimneys",
  },

  // ── Laundry Series ───────────────────────────────────────────────────
  {
    id: "cwl1",
    code: "CWL1",
    name: "Liquid Laundry Detergent Top Load",
    series: "Laundry Series",
    type: "Concentrate",
    description:
      "Color-Safe & Gentle on Fabrics; protects vibrant colors and softens",
    image: "cleanwhiz_images/img_detergent_topload_liquid.jpeg",
    usage: {
      "Normal (4-6kg)": "30-40ml",
      "Heavy (6kg+ or heavily soiled)": "60-70ml",
    },
  },
  {
    id: "cwl2",
    code: "CWL2",
    name: "Liquid Laundry Detergent Front Load",
    series: "Laundry Series",
    type: "Concentrate",
    description:
      "Color-Safe & Gentle on Fabrics; protects vibrant colors and softens",
    image: "cleanwhiz_images/img_detergent_frontload_liquid.jpeg",
    usage: {
      "Normal (4-6kg)": "30-40ml",
      "Heavy (6kg+ or heavily soiled)": "60-70ml",
    },
  },
  {
    id: "cwl3",
    code: "CWL3",
    name: "Laundry Super Uni Detergent (Industrial/Institutional)",
    series: "Laundry Series",
    type: "Concentrate",
    description: "Low foaming, high concentrated laundry detergent",
    image: "cleanwhiz_images/img_detergent_super_uni.jpeg",
    usage: {
      Standard: "20-30ml for 5-6kg of dry clothes",
    },
  },
  {
    id: "cwl4",
    code: "CWL4",
    name: "Super Softener - Fabric Softener",
    series: "Laundry Series",
    type: "Ready to Use",
    description:
      "After wash fabric conditioner with long lasting fragrance & shine",
    image: "cleanwhiz_images/img_fabric_softner.jpeg",
    usage: {
      Standard: "10-15ml per kg of clothes",
    },
  },
  {
    id: "cwl5",
    code: "CWL5",
    name: "Ultra Emulsifier - Concentrated Surfactant booster",
    series: "Laundry Series",
    type: "Concentrate",
    description:
      "Formulated for fabrics exposed to mineral oils and grease stains",
    image: "cleanwhiz_images/img_ultra_emulsifier.jpeg",
    usage: {
      "Normal Soiling": "3-5ml per kg",
      "Heavy Soiling": "6-8ml per kg",
    },
  },
  {
    id: "cwl6",
    code: "CWL6",
    name: "Liquid Alkaline Booster",
    series: "Laundry Series",
    type: "Concentrate",
    description:
      "Enhance wash performance by increasing pH of wash solution",
    usage: {
      "Normal Soiling": "1-2ml per kg",
      "Heavy Soiling": "3-4ml per kg",
    },
  },
  {
    id: "cwl7",
    code: "CWL7",
    name: "Liquid Rinse - Laundry Liquid Alkali neutralizer",
    series: "Laundry Series",
    type: "Concentrate",
    description:
      "Neutralizes residual alkali and prevents yellowing or fabric damage",
    image: "cleanwhiz_images/img_liquid_rinse.jpeg",
    usage: {
      Standard: "1-4ml per kg of clothes",
    },
  },
  {
    id: "cwl8",
    code: "CWL8",
    name: "Rust Remover - Fabric rust stain remover",
    series: "Laundry Series",
    type: "Ready to Use",
    description:
      "Destains iron staining formed by rust depositing on fabrics",
    image: "cleanwhiz_images/img_rust_remover.jpeg",
  },
  {
    id: "cwl9",
    code: "CWL9",
    name: "Hypobleach - Conc. Stabilised chlorine bleach",
    series: "Laundry Series",
    type: "Concentrate",
    description: "Excellent destainer for all types of white fabric",
    image: "cleanwhiz_images/img_hypo_bleach_1.jpeg",
    usage: {
      "Light Soil": "6ml per kg dry white clothes",
      "Heavy Soil": "15ml per kg dry white clothes",
    },
  },
  {
    id: "cwl2-oxy",
    code: "CWL2-Oxy",
    name: "Oxybleach - Fabric stain remover",
    series: "Laundry Series",
    type: "Ready to Use",
    description: "Excellent stain remover, safe for colored clothes",
    image: "cleanwhiz_images/img_oxy_bleach.jpeg",
    usage: {
      Standard: "2-4ml per kg of dry clothes",
    },
  },
];
