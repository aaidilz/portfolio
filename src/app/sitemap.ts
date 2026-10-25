import type { MetadataRoute } from "next";
import { getPosts } from "@/utils/utils";
import { baseURL, protectedRoutes, routes as routesConfig } from "@/resources";

export default function sitemap(): MetadataRoute.Sitemap {
  const activeRoutes = Object.keys(routesConfig) as Array<keyof typeof routesConfig>;
  const pages: MetadataRoute.Sitemap = activeRoutes
    .filter((route) => routesConfig[route] && !protectedRoutes[route])
    .map((route) => ({ url: new URL(route, baseURL).toString() }));

  const collections = [
    { route: "/blog", directory: "posts" },
    { route: "/work", directory: "projects" },
  ] as const;

  for (const { route, directory } of collections) {
    if (!routesConfig[route]) continue;
    for (const post of getPosts(["src", "app", route.slice(1), directory])) {
      const path = `${route}/${post.slug}` as const;
      if (protectedRoutes[path]) continue;
      pages.push({ url: new URL(path, baseURL).toString() });
    }
  }

  // Publication dates are not modification dates; omit lastModified until tracked.
  return pages;
}
