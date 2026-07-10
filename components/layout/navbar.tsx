"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { navItems, resources } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/60 bg-background/78 backdrop-blur-xl">
      <nav className="container-shell flex h-20 items-center justify-between" aria-label="Navegación principal">
        <Link href="/" className="flex items-center gap-3 font-bold">
          <Image
            src="/images/logo.jpg"
            alt="Movimiento Juventud Saludable"
            width={44}
            height={44}
            priority
            className="h-11 w-11 rounded-xl object-cover"
          />
          <span className="leading-tight">
            Juventud
            <span className="block text-saludable-orange">Saludable</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition hover:bg-white/70 hover:text-foreground",
                pathname === item.href && "bg-white text-foreground shadow-sm"
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <Button asChild variant="outline">
            <Link href="/contacto">Contacto</Link>
          </Button>
          <Button asChild>
            <Link href="/unete">Unirme</Link>
          </Button>
        </div>

        <button
          className="grid h-10 w-10 place-items-center rounded-lg border bg-white lg:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="container-shell pb-5 lg:hidden">
          <div className="glass grid gap-2 rounded-2xl p-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-semibold hover:bg-white"
              >
                {item.label}
              </Link>
            ))}
            <div className="grid grid-cols-3 gap-2 border-t pt-3">
              {resources.map((resource) => (
                <Link
                  key={resource.href}
                  href={resource.href}
                  className="rounded-lg bg-white p-3 text-center text-xs font-semibold"
                  onClick={() => setOpen(false)}
                >
                  <resource.icon className="mx-auto mb-1 h-4 w-4 text-saludable-orange" />
                  {resource.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
