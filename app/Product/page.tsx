// app/page.tsx
import { Metadata } from "next";
import ClientProduct from "./ClientProduct";

export const metadata: Metadata = {
  title: "Product | Beauty Store",
  description: "Landing page resmi Beauty Store.",
};

export default function Home() {
  return <ClientProduct />;
}
