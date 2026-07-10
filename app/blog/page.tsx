import type { Metadata } from "next";
import { ContentCard } from "@/components/content-card";
import { SectionHeading } from "@/components/section-heading";
import { Input } from "@/components/ui/input";
import { blogPosts } from "@/content/registry";

export const metadata: Metadata = {
  title: "Blog",
  description: "Artículos, guías y análisis sobre bienestar, liderazgo y participación juvenil."
};

export default function BlogPage() {
  return (
    <div className="container-shell py-16">
      <div className="grid gap-8 lg:grid-cols-[1fr_22rem] lg:items-end">
        <SectionHeading eyebrow="Blog" title="Conocimiento para actuar mejor." description="Artículos en MDX con categorías, etiquetas y tiempo de lectura." />
        <Input aria-label="Buscar artículos" placeholder="Buscar por tema o categoría" />
      </div>
      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <ContentCard
            key={post.slug}
            href={`/blog/${post.slug}`}
            title={post.metadata.title}
            description={post.metadata.description}
            meta={`${post.metadata.category} · ${post.metadata.readingTime}`}
          />
        ))}
      </div>
    </div>
  );
}
