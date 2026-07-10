import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow ? <Badge>{eyebrow}</Badge> : null}
      <h2 className="mt-4 text-3xl font-black leading-tight tracking-normal text-saludable-ink md:text-5xl">
        {title}
      </h2>
      {description ? <p className="mt-4 text-lg leading-8 text-muted-foreground">{description}</p> : null}
    </div>
  );
}
