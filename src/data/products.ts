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
}

export const series = [
  "Housekeeping Series",
  "Washroom & Industrial Cleaners",
  "Kitchen Series",
  "Laundry Series",
];

export const productTypes = ["Concentrate", "Ready to Use"];

export const products: Product[] = [
  // Housekeeping Series
  {
    id: "cw1",
    code: "CW1",
    name: "Bathroom Cleaner cum Sanitizer",
    series: "Housekeeping Series",
    type: "Concentrate",
    description: "Cleans and disinfects all bathroom surfaces and removes hard water stains",
    usage: {
      "Normal Soiling": "10-20ml per 1L water",
      "Heavy Soiling": "20-30ml per 1L water",
    },
  },
  {
    id: "cw2",
    code: "CW2",
    name: "Floor Cleaner",
    series: "Housekeeping Series",
    type: "Concentrate",
    description: "Effective for polished hard surfaces like marble, granite, and tiles",
    usage: {
      "Normal Soiling": "10-20ml per 1L water",
      "Heavy Soiling": "20-30ml per 1L water",
    },
  },
  {
    id: "cw3",
    code: "CW3",
    name: "Glass Cleaner",
    series: "Housekeeping Series",
    type: "Ready to Use",
    description: "Streak-free cleaning for glass, mirrors, windows, and display cases",
  },
  {
    id: "cw4",
    code: "CW4",
    name: "Furniture Shine Maintainer",
    series: "Housekeeping Series",
    type: "Ready to Use",
    description: "For wooden furniture, tables, chairs, and frames",
  },
  {
    id: "cw5",
    code: "CW5",
    name: "Room Freshener",
    series: "Housekeeping Series",
    type: "Ready to Use",
    description: "De-odorizes rooms with pleasant fragrance",
  },
  {
    id: "cw6",
    code: "CW6",
    name: "Toilet Bowl Cleaner",
    series: "Housekeeping Series",
    type: "Ready to Use",
    description: "Removes lime scale and stubborn stains; acts as sanitizer",
  },
  {
    id: "cw7",
    code: "CW7",
    name: "Floor Cleaner Concentrate",
    series: "Housekeeping Series",
    type: "Concentrate",
    description: "For wet mopping and machine scrubbing",
    usage: {
      "Normal Soiling": "10-20ml per 1L water",
      "Heavy Soiling": "20-30ml per 1L water",
    },
  },
  {
    id: "cw8",
    code: "CW8",
    name: "Multipurpose Paste Cleaner",
    series: "Housekeeping Series",
    type: "Ready to Use",
    description: "Removes rust, oil, and paint stains from surfaces",
  },

  // Washroom & Industrial Cleaners
  {
    id: "cw9",
    code: "CW9",
    name: "Washroom Cleaner",
    series: "Washroom & Industrial Cleaners",
    type: "Concentrate",
    description: "Removes hard water and rust stains",
    usage: {
      "Normal Soiling": "50-70ml per 1L water",
      "Heavy Soiling": "70-100ml per 1L water",
    },
  },
  {
    id: "cwadc",
    code: "CWADC",
    name: "Adhesive Remover",
    series: "Washroom & Industrial Cleaners",
    type: "Ready to Use",
    description: "Removes labels and gummy residue",
  },
  {
    id: "cwhac",
    code: "CWHAC",
    name: "Heavy Duty Degreaser",
    series: "Washroom & Industrial Cleaners",
    type: "Concentrate",
    description: "Removes oil and grease stains; not for marble",
    usage: {
      "Normal Soiling": "10-20ml per 1L water",
      "Heavy Soiling": "20-30ml per 1L water",
      "Very Heavy": "50ml per 1L water",
    },
  },
  {
    id: "cwacs",
    code: "CWACS",
    name: "Alkaline Cleaner cum Sanitizer",
    series: "Washroom & Industrial Cleaners",
    type: "Concentrate",
    description: "Urinal, tile, and ceramic cleaning",
    usage: {
      "Normal Soiling": "50-70ml per 1L water",
      "Heavy Soiling": "70-100ml per 1L water",
    },
  },

  // Kitchen Series
  {
    id: "cwhc",
    code: "CWHC",
    name: "Hygiclean White Phenyl",
    series: "Kitchen Series",
    type: "Concentrate",
    description: "Pine-based phenyl for floors and tiles",
    usage: {
      "Normal Soiling": "10-20ml per 1L water",
      "Heavy Soiling": "20-30ml per 1L water",
    },
  },
  {
    id: "cwk1",
    code: "CWK1",
    name: "Dishwash Det Concentrate",
    series: "Kitchen Series",
    type: "Concentrate",
    description: "Manual dishwashing detergent",
    usage: {
      "Normal Soiling": "10-20ml per 1L water",
      "Heavy Soiling": "20-30ml per 1L water",
    },
  },
  {
    id: "cwk3",
    code: "CWK3",
    name: "Veggie & Fruit Wash",
    series: "Kitchen Series",
    type: "Concentrate",
    description: "Chlorine-based sanitizer",
    usage: {
      "Fruits & Vegetables": "5ml per 1L water",
      "Potable Water": "1ml per 1L water",
    },
  },

  // Laundry Series
  {
    id: "cwl1",
    code: "CWL1",
    name: "Liquid Laundry Detergent Top Load",
    series: "Laundry Series",
    type: "Concentrate",
    description: "For top-loading washing machines",
    usage: {
      "Normal (4-6kg)": "30-40ml",
      "Heavy (6kg+)": "60-70ml",
    },
  },
  {
    id: "cwl2",
    code: "CWL2",
    name: "Liquid Laundry Detergent Front Load",
    series: "Laundry Series",
    type: "Concentrate",
    description: "For front-loading washing machines",
    usage: {
      "Normal (4-6kg)": "30-40ml",
      "Heavy (6kg+)": "60-70ml",
    },
  },
  {
    id: "cwl4",
    code: "CWL4",
    name: "Super Softener",
    series: "Laundry Series",
    type: "Ready to Use",
    description: "After-wash fabric conditioner",
    usage: {
      "Standard": "10-15ml per kg of clothes",
    },
  },
  {
    id: "cwl9",
    code: "CWL9",
    name: "Hypobleach",
    series: "Laundry Series",
    type: "Concentrate",
    description: "Stabilized chlorine bleach",
    usage: {
      "Light Soil": "6ml per kg",
      "Heavy Soil": "15ml per kg",
    },
  },
  {
    id: "cwl2-oxy",
    code: "CWL2_OXY",
    name: "Oxybleach",
    series: "Laundry Series",
    type: "Ready to Use",
    description: "Fabric stain remover safe for colors",
    usage: {
      "Standard": "2-4ml per kg of clothes",
    },
  },
];
