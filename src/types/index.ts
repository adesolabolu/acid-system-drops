export type PaymentPlan = 'Outright Payment' | '3-Month Plan' | '6-Month Plan';

export interface Product {
  id: string;
  name: string;
  client: string; // Ideal property type e.g. "2–3 Bed Flat"
  year: string;
  category: '1–2 Bed Flat' | 'Duplex & AC' | 'Remote Work' | 'Heavy Duty';
  price: number; // Price in NGN (₦)
  timelineWeeks: number; // Backup hours at typical load
  isSoldOut: boolean;
  edition: string;
  impactHeadline: string; // Concise "Powers: ..." line
  description: string;
  challenge: string;
  solution: string;
  materials: string[]; // Box contents / hardware included
  specs: { label: string; value: string }[];
  tag: string;
  colorway: string;
  imageUrl: string;
  visualType: 'hero' | 'flat3kva' | 'duplex5kva' | 'estate10kva' | 'portable1kva';
}

export interface CartItem {
  product: Product;
  quantity: number;
  size: PaymentPlan;
}
