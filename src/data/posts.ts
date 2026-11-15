import type { Post } from "@/types";
import po1 from "@/data/images/post-1.jpg";
import po2 from "@/data/images/post-2.jpg";
import po3 from "@/data/images/post-3.jpg";
import po4 from "@/data/images/post-4.jpg";
import po5 from "@/data/images/post-5.jpg";
import po6 from "@/data/images/post-6.jpg";

// const posts creates a variable named posts.
// Post[] tells typescript that this variable must contain an array of Post objects.
// = [...] gives the variable its actual data.

export const posts: Post[] = [
  {
    id: "uuid1",
    author: "John Doe",
    title: "First Time Home Owner Ideas",
    content:
      "The choice of furniture depends on personal preferences, the style of the living space, and the budget.",
    image: po1,
    body: "<p>The choice of furniture depends on personal preferences, the style of the living space, and the budget.</p>",
    updated_at: "Dec 25, 2024",
    tags: ["Wooden, Seating", "Single"],
  },
  {
    id: "uuid2",
    author: "James",
    title: "First Time Home Owner Ideas",
    content:
      "The choice of furniture depends on personal preferences, the style of the living space, and the budget.",
    image: po2,
    body: "<p>The choice of furniture depends on personal preferences, the style of the living space, and the budget.</p>",
    updated_at: "Dec 25, 2024",
    tags: ["Wooden, Seating", "Single"],
  },
  {
    id: "uuid3",
    author: "Jolly",
    title: "First Time Home Owner Ideas",
    content:
      "The choice of furniture depends on personal preferences, the style of the living space, and the budget.",
    image: po3,
    body: "<p>The choice of furniture depends on personal preferences, the style of the living space, and the budget.</p>",
    updated_at: "Dec 25, 2024",
    tags: ["Wooden, Seating", "Single"],
  },
  {
    id: "uuid4",
    author: "Bill",
    title: "First Time Home Owner Ideas",
    content:
      "The choice of furniture depends on personal preferences, the style of the living space, and the budget.",
    image: po4,
    body: "<p>The choice of furniture depends on personal preferences, the style of the living space, and the budget.</p>",
    updated_at: "Dec 25, 2024",
    tags: ["Wooden, Seating", "Single"],
  },
  {
    id: "uuid5",
    author: "John Doe",
    title: "First Time Home Owner Ideas",
    content:
      "The choice of furniture depends on personal preferences, the style of the living space, and the budget.",
    image: po5,
    body: "<p>The choice of furniture depends on personal preferences, the style of the living space, and the budget.</p>",
    updated_at: "Dec 25, 2024",
    tags: ["Wooden, Seating", "Single"],
  },
  {
    id: "uuid6",
    author: "John Doe",
    title: "First Time Home Owner Ideas",
    content:
      "The choice of furniture depends on personal preferences, the style of the living space, and the budget.",
    image: po6,
    body: "<p>The choice of furniture depends on personal preferences, the style of the living space, and the budget.</p>",
    updated_at: "Dec 25, 2024",
    tags: ["Wooden, Seating", "Single"],
  },
];
