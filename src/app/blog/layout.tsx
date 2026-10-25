import { notFound } from "next/navigation";
import { routes } from "@/resources";

export default function SectionLayout({ children }: { children: React.ReactNode }) {
  if (!routes["/blog"]) notFound();
  return children;
}
