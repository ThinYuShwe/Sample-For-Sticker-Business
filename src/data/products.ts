import p1 from "@/data/images/p-1.webp";
import p2 from "@/data/images/p-2.webp";
import p3 from "@/data/images/p-3.webp";
import p4 from "@/data/images/p-4.webp";
import p5 from "@/data/images/p-5.webp";
import p6 from "@/data/images/p-6.webp";
import type { Product } from "@/types";

export const products: Product[] = [
  {
    id: "uuid1",
    name: "Nordic Chair",
    description: "A comfortable chair with a modern design.",
    images: [p1, p2, p3],
    categoryId: "uuid1",
    price: 100,
    discount: 0,
    rating: 4,
    inventory: 100,
    status: "active",
  },
  {
    id: "uuid2",
    name: "Modern Sofa",
    description: "A stylish sofa with soft cushions for everyday comfort.",
    images: [p4, p5, p6],
    categoryId: "uuid2",
    price: 450,
    discount: 10,
    rating: 5,
    inventory: 25,
    status: "active",
  },
  {
    id: "uuid3",
    name: "Wooden Coffee Table",
    description: "A minimalist wooden coffee table for your living room.",
    images: [p1, p2, p3],
    categoryId: "uuid3",
    price: 180,
    discount: 5,
    rating: 4,
    inventory: 40,
    status: "active",
  },
  {
    id: "uuid4",
    name: "Luxury Armchair",
    description: "An elegant armchair with a soft fabric finish.",
    images: [p4, p5, p6],
    categoryId: "uuid1",
    price: 320,
    discount: 15,
    rating: 5,
    inventory: 12,
    status: "active",
  },
  {
    id: "uuid5",
    name: "Modern Bookshelf",
    description: "A spacious bookshelf with a clean and contemporary look.",
    images: [p1, p2, p3],
    categoryId: "uuid4",
    price: 250,
    discount: 0,
    rating: 4,
    inventory: 30,
    status: "active",
  },
  {
    id: "uuid6",
    name: "Minimalist Dining Table",
    description: "A beautiful dining table designed for family gatherings.",
    images: [p4, p5, p6],
    categoryId: "uuid5",
    price: 550,
    discount: 20,
    rating: 5,
    inventory: 8,
    status: "active",
  },
];
