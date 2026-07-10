"use client";

import { Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ShareButton({ title, text }: { title: string; text: string }) {
  async function share() {
    const url = window.location.href;

    if (navigator.share) {
      await navigator.share({ title, text, url });
      return;
    }

    await navigator.clipboard.writeText(url);
    window.alert("Enlace copiado.");
  }

  return (
    <Button type="button" variant="outline" onClick={share}>
      <Share2 className="h-4 w-4" />
      Compartir
    </Button>
  );
}
