import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function ContentCard({
  href,
  title,
  description,
  meta
}: {
  href: string;
  title: string;
  description: string;
  meta: string;
}) {
  return (
    <Link href={href} className="group overflow-hidden rounded-2xl border bg-white p-5 shadow-soft transition hover:-translate-y-1">
      <Badge className="tracking-normal normal-case">{meta}</Badge>
      <h3 className="mt-4 text-xl font-black leading-tight">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-muted-foreground">{description}</p>
      <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-saludable-orange">
        Leer más <ArrowUpRight className="h-4 w-4" />
      </span>
    </Link>
  );
}
