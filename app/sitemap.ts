import type { MetadataRoute } from "next";
import { blogPostMeta, opinionPostMeta } from "@/content/posts";
import { getSiteUrl } from "@/lib/url";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl();
  const routes = ["", "/nosotros", "/que-hacemos", "/blog", "/opinion-juvenil", "/noticias", "/eventos", "/galeria", "/unete", "/contacto"];
  const staticRoutes = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date()
  }));
  const blogRoutes = blogPostMeta.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.metadata.date)
  }));
  const opinionRoutes = opinionPostMeta.map((post) => ({
    url: `${baseUrl}/opinion-juvenil/${post.slug}`,
    lastModified: new Date(post.metadata.date)
  }));

  return [...staticRoutes, ...blogRoutes, ...opinionRoutes];
}
