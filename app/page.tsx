// app/page.tsx
import { Metadata } from "next";
import ClientHome from "./ClientHome";

export const metadata: Metadata = {
  title: "Beranda | Beauty Store",
  description: "Landing page resmi Beauty Store.",
};

export default function Home() {
  return <ClientHome />;
}
