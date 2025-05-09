// app/page.tsx
import { Metadata } from "next";
import ClientKontak from "./ClientKontak";

export const metadata: Metadata = {
  title: "Kontak | DelOptik",
  description: "Landing page resmi DelOptik.",
};

export default function Home() {
  return <ClientKontak />;
}
