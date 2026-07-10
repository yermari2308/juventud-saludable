"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const schema = z.object({
  name: z.string().min(3, "Escribe tu nombre."),
  email: z.string().email("Usa un correo válido."),
  subject: z.string().min(4, "Agrega un asunto."),
  message: z.string().min(12, "El mensaje debe ser más específico.")
});

type ContactValues = z.infer<typeof schema>;

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ContactValues>({ resolver: zodResolver(schema) });

  function onSubmit() {
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 rounded-2xl border bg-white p-6 shadow-soft">
      {sent ? <p className="rounded-lg bg-orange-50 p-3 text-sm font-semibold text-saludable-orange">Mensaje preparado para integración con backend.</p> : null}
      <Field label="Nombre" error={errors.name?.message}>
        <Input {...register("name")} />
      </Field>
      <Field label="Correo" error={errors.email?.message}>
        <Input {...register("email")} type="email" />
      </Field>
      <Field label="Asunto" error={errors.subject?.message}>
        <Input {...register("subject")} />
      </Field>
      <Field label="Mensaje" error={errors.message?.message}>
        <Textarea {...register("message")} />
      </Field>
      <Button type="submit">
        <Send className="h-4 w-4" />
        Enviar
      </Button>
    </form>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="grid gap-2 text-sm font-semibold">
      {label}
      {children}
      {error ? <span className="text-xs text-destructive">{error}</span> : null}
    </label>
  );
}
