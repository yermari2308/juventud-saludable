import type { Metadata } from "next";
import { ContentCard } from "@/components/content-card";
import { SectionHeading } from "@/components/section-heading";
import { opinionPosts } from "@/content/registry";

export const metadata: Metadata = {
  title: "Opinión Juvenil",
  description: "Artículos publicados por miembros jóvenes de distintas provincias de Costa Rica."
};

export default function OpinionPage() {
  return (
    <div className="container-shell py-16">
      <SectionHeading
        eyebrow="Opinión Juvenil"
        title="Una tribuna para voces jóvenes con criterio, territorio y propuesta."
        description="La estructura está preparada para crecer hacia un panel administrativo, moderación editorial y perfiles de autor."
      />
      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {opinionPosts.map((post) => (
          <ContentCard
            key={post.slug}
            href={`/opinion-juvenil/${post.slug}`}
            title={post.metadata.title}
            description={`${post.metadata.description} · ${post.metadata.province}`}
            image={post.metadata.image}
            meta={`${post.metadata.category} · ${post.metadata.readingTime}`}
          />
        ))}
      </div>
    </div>
  );
}
