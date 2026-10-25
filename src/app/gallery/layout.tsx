import { notFound } from "next/navigation";
import { routes } from "@/resources";

export default function SectionLayout({ children }: { children: React.ReactNode }) {
  if (!routes["/gallery"]) notFound();
  return children;
}
