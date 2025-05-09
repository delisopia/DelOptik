// app/page.tsx
import { Metadata } from "next";
import ClientProduct from "./ClientProduct";

export const metadata: Metadata = {
  title: "Product | DelOptik",
  description: "Landing page resmi DelOptik.",
};

export default function Home() {
  return <ClientProduct />;
}
