import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ShareButton } from "@/components/share-button";
import { blogPosts } from "@/content/registry";
import { formatDate } from "@/lib/utils";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) return {};
  return {
    title: post.metadata.title,
    description: post.metadata.description,
    openGraph: {
      title: post.metadata.title,
      description: post.metadata.description,
      images: [post.metadata.image]
    }
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) notFound();
  const { Component, metadata } = post;

  return (
    <article className="container-shell py-16">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-saludable-orange">{metadata.category}</p>
        <h1 className="mt-4 text-4xl font-black leading-tight md:text-6xl">{metadata.title}</h1>
        <p className="mt-5 text-lg leading-8 text-muted-foreground">{metadata.description}</p>
        <p className="mt-5 text-sm font-semibold text-muted-foreground">
          {metadata.author} · {formatDate(metadata.date)} · {metadata.readingTime}
        </p>
      </div>
      <div className="relative mx-auto mt-10 aspect-[16/8] max-w-5xl overflow-hidden rounded-[2rem]">
        <Image src={metadata.image} alt="" fill sizes="100vw" className="object-cover" priority />
      </div>
      <div className="editorial-prose mx-auto mt-12 max-w-3xl">
        <Component />
      </div>
      <div className="mx-auto mt-10 flex max-w-3xl flex-wrap gap-3 border-t pt-6">
        {metadata.tags.map((tag) => (
          <span key={tag} className="rounded-full bg-muted px-3 py-1 text-sm font-semibold">#{tag}</span>
        ))}
        <div className="ml-auto">
          <ShareButton title={metadata.title} text={metadata.description} />
        </div>
      </div>
    </article>
  );
}
