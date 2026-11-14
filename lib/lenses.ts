// Reading lenses: the same work, told the way a given reader would want to hear it.
// A lens never changes the facts. It reorders the featured case studies and
// surfaces one extra line per card (see `lenses` on each project).

export type LensId = "recruiter" | "product-leader" | "designer" | "engineer" | "founder";

export interface Lens {
  id: LensId;
  label: string; // Shown under the glasses
  reader: string; // Used in sentences: "Reading as a designer"
  frame: "browline" | "square" | "round" | "rect" | "aviator";
  order: string[]; // Featured case study ids, most relevant first
}

export const lenses: Lens[] = [
  {
    id: "recruiter",
    label: "Recruiter",
    reader: "a recruiter",
    frame: "browline",
    order: ["salient-enterprise-ai", "globality-insights", "productbot-dashboard", "meed-receipt-scanning"],
  },
  {
    id: "product-leader",
    label: "Product leader",
    reader: "a product leader",
    frame: "square",
    order: ["salient-enterprise-ai", "meed-receipt-scanning", "productbot-dashboard", "globality-insights"],
  },
  {
    id: "designer",
    label: "Designer",
    reader: "a designer",
    frame: "round",
    order: ["meed-receipt-scanning", "globality-insights", "salient-enterprise-ai", "productbot-dashboard"],
  },
  {
    id: "engineer",
    label: "Engineer",
    reader: "an engineer",
    frame: "rect",
    order: ["salient-enterprise-ai", "productbot-dashboard", "globality-insights", "meed-receipt-scanning"],
  },
  {
    id: "founder",
    label: "Founder",
    reader: "a founder",
    frame: "aviator",
    order: ["salient-enterprise-ai", "productbot-dashboard", "meed-receipt-scanning", "globality-insights"],
  },
];

export function getLens(id: LensId | null): Lens | null {
  return lenses.find((lens) => lens.id === id) ?? null;
}
