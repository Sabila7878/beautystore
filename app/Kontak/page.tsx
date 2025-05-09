// app/page.tsx
import { Metadata } from "next";
import ClientKontak from "./ClientKontak";

export const metadata: Metadata = {
  title: "Kontak | Beauty Store",
  description: "Landing page resmi Beauty Store.",
};

export default function Home() {
  return <ClientKontak />;
}
