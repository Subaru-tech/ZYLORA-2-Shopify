export interface Product {
  id: string;
  title: string;
  price: number;
  compareAtPrice: number;
  image: string;
  category: string;
  rating: number;
  reviewCount: number;
  badge?: 'bestseller' | 'sale' | 'new';
  description: string;
}

export const products: Product[] = [
  {
    id: "zyl-beauty-001",
    title: "IPL Laser Hair Removal Device",
    price: 49.99,
    compareAtPrice: 79.99,
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=400&fit=crop",
    category: "Beauty & Wellness",
    rating: 4.9,
    reviewCount: 1247,
    badge: "bestseller",
    description: "Salon-quality IPL at home. Painless, permanent results in 4 weeks."
  },
  {
    id: "zyl-fitness-002",
    title: "Portable Mini Massage Gun",
    price: 39.99,
    compareAtPrice: 69.99,
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=400&fit=crop",
    category: "Fitness",
    rating: 4.8,
    reviewCount: 892,
    badge: "sale",
    description: "Deep tissue percussion massage. 6 heads, 20 speeds, ultra-quiet."
  },
  {
    id: "zyl-home-003",
    title: "Smart Night Light",
    price: 24.99,
    compareAtPrice: 39.99,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    category: "Smart Home",
    rating: 4.7,
    reviewCount: 654,
    badge: "new",
    description: "Motion-activated LED with adjustable brightness and colors."
  },
  {
    id: "zyl-travel-004",
    title: "Memory Foam Travel Pillow",
    price: 29.99,
    compareAtPrice: 44.99,
    image: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=400&h=400&fit=crop",
    category: "Travel",
    rating: 4.6,
    reviewCount: 423,
    description: "360° neck support with cooling breathable fabric."
  },
  {
    id: "zyl-fitness-005",
    title: "Posture Corrector Pro",
    price: 34.99,
    compareAtPrice: 54.99,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",
    category: "Fitness",
    rating: 4.5,
    reviewCount: 567,
    badge: "bestseller",
    description: "Invisible under clothing. Adjustable for all body types."
  },
  {
    id: "zyl-tech-006",
    title: "Bluetooth Mini Speaker",
    price: 44.99,
    compareAtPrice: 69.99,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
    category: "Tech Gadgets",
    rating: 4.8,
    reviewCount: 789,
    badge: "sale",
    description: "360° surround sound. 24hr battery. IPX7 waterproof."
  },
  {
    id: "zyl-home-007",
    title: "Digital Kitchen Scale",
    price: 19.99,
    compareAtPrice: 34.99,
    image: "https://images.unsplash.com/photo-1495461199391-8c39ab674295?w=400&h=400&fit=crop",
    category: "Smart Home",
    rating: 4.7,
    reviewCount: 345,
    description: "Precision measurement to 0.1g. Sleek stainless steel design."
  },
  {
    id: "zyl-travel-008",
    title: "Rechargeable Bike Light Set",
    price: 27.99,
    compareAtPrice: 42.99,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    category: "Travel",
    rating: 4.6,
    reviewCount: 234,
    badge: "new",
    description: "Ultra-bright 1000 lumens. 6 light modes. USB rechargeable."
  },
  {
    id: "zyl-beauty-009",
    title: "Jade Roller & Gua Sha Set",
    price: 22.99,
    compareAtPrice: 38.99,
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop",
    category: "Beauty & Wellness",
    rating: 4.8,
    reviewCount: 567,
    description: "100% natural jade. Reduces puffiness and promotes circulation."
  },
  {
    id: "zyl-pet-010",
    title: "Pet Hair Remover Roller",
    price: 16.99,
    compareAtPrice: 29.99,
    image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=400&h=400&fit=crop",
    category: "Pet Care",
    rating: 4.9,
    reviewCount: 892,
    badge: "bestseller",
    description: "Reusable lint roller. Works on furniture, clothing, and car seats."
  },
  {
    id: "zyl-tech-011",
    title: "Wireless Charging Pad",
    price: 24.99,
    compareAtPrice: 39.99,
    image: "https://images.unsplash.com/photo-1586816879360-004f5b0c51e3?w=400&h=400&fit=crop",
    category: "Tech Gadgets",
    rating: 4.7,
    reviewCount: 432,
    badge: "sale",
    description: "15W fast charging. Compatible with all Qi devices."
  },
  {
    id: "zyl-fitness-012",
    title: "Resistance Bands Set",
    price: 21.99,
    compareAtPrice: 36.99,
    image: "https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=400&h=400&fit=crop",
    category: "Fitness",
    rating: 4.6,
    reviewCount: 678,
    description: "5 resistance levels. Door anchor and handles included."
  },
];

export const collections = [
  {
    id: "beauty-wellness",
    title: "Beauty & Wellness",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=450&fit=crop",
    gradient: "from-pink-500/80 to-rose-600/80",
    productCount: 24
  },
  {
    id: "smart-home",
    title: "Smart Home",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=450&fit=crop",
    gradient: "from-primary/80 to-blue-600/80",
    productCount: 18
  },
  {
    id: "fitness",
    title: "Fitness",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=450&fit=crop",
    gradient: "from-emerald-500/80 to-green-600/80",
    productCount: 32
  },
  {
    id: "travel",
    title: "Travel",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&h=450&fit=crop",
    gradient: "from-orange-500/80 to-amber-600/80",
    productCount: 15
  },
  {
    id: "tech-gadgets",
    title: "Tech Gadgets",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&h=450&fit=crop",
    gradient: "from-violet-500/80 to-purple-600/80",
    productCount: 28
  },
  {
    id: "pet-care",
    title: "Pet Care",
    image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=600&h=450&fit=crop",
    gradient: "from-yellow-500/80 to-amber-500/80",
    productCount: 12
  },
];

export const reviews = [
  {
    id: 1,
    name: "Emily R.",
    country: "🇬🇧",
    rating: 5,
    text: "IPL device changed my life! Visible results in just 3 weeks. Best purchase ever!",
    verified: true,
    product: "IPL Laser Hair Removal Device"
  },
  {
    id: 2,
    name: "Jake T.",
    country: "🇺🇸",
    rating: 5,
    text: "Massage gun is an absolute game-changer for my post-workout recovery. Worth every penny!",
    verified: true,
    product: "Portable Mini Massage Gun"
  },
  {
    id: 3,
    name: "Priya K.",
    country: "🇮🇳",
    rating: 5,
    text: "Perfect night light for my toddler's room. The motion sensor feature is brilliant!",
    verified: true,
    product: "Smart Night Light"
  },
  {
    id: 4,
    name: "Sarah M.",
    country: "🇺🇸",
    rating: 5,
    text: "Absolutely love my purchase! Quality exceeded expectations. Will buy again!",
    verified: true,
    product: "Jade Roller & Gua Sha Set"
  },
  {
    id: 5,
    name: "Marcus L.",
    country: "🇩🇪",
    rating: 5,
    text: "The travel pillow saved my 14-hour flight. Memory foam is incredibly comfortable.",
    verified: true,
    product: "Memory Foam Travel Pillow"
  },
  {
    id: 6,
    name: "Lisa Chen",
    country: "🇦🇺",
    rating: 5,
    text: "Best pet hair remover I've ever used. Works like magic on my couch!",
    verified: true,
    product: "Pet Hair Remover Roller"
  },
];
