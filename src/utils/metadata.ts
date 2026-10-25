import type { Metadata } from "next";
import { Meta } from "@once-ui-system/core";
import { person, protectedRoutes, routes } from "@/resources";

export function generatePageMetadata(options: Parameters<typeof Meta.generate>[0]): Metadata {
  const path = options.path || "/";
  const section = `/${path.split("/")[1]}`;
  const isPrivate = protectedRoutes[path as keyof typeof protectedRoutes]
    || routes[section as keyof typeof routes] === false;

  return {
    ...Meta.generate(options),
    alternates: { canonical: new URL(path, options.baseURL).toString() },
    authors: [{ name: person.name, url: new URL("/about", options.baseURL).toString() }],
    robots: {
      index: !isPrivate,
      follow: true,
      googleBot: {
        index: !isPrivate,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}
