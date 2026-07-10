import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ShareButton } from "@/components/share-button";
import { opinionPosts } from "@/content/registry";
import { formatDate } from "@/lib/utils";

export function generateStaticParams() {
  return opinionPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = opinionPosts.find((item) => item.slug === slug);
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

export default async function OpinionPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = opinionPosts.find((item) => item.slug === slug);
  if (!post) notFound();
  const { Component, metadata } = post;

  return (
    <article className="container-shell py-16">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-saludable-orange">{metadata.category}</p>
        <h1 className="mt-4 text-4xl font-black leading-tight md:text-6xl">{metadata.title}</h1>
        <p className="mt-5 text-lg leading-8 text-muted-foreground">{metadata.description}</p>
        <div className="mt-6 rounded-2xl border bg-white p-5">
          <p className="font-black">{metadata.author}</p>
          <p className="text-sm text-muted-foreground">
            {metadata.province} · {formatDate(metadata.date)} · {metadata.readingTime}
          </p>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">{metadata.bio}</p>
        </div>
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
