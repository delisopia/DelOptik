// app/page.tsx
import { Metadata } from "next";
import ClientHome from "./ClientHome";

export const metadata: Metadata = {
  title: "Beranda | DelOptik",
  description: "Landing page resmi DelOptik.",
};

export default function Home() {
  return <ClientHome />;
}
