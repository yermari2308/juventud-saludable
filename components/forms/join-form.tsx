"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const schema = z.object({
  name: z.string().min(3, "Escribe tu nombre completo."),
  email: z.string().email("Usa un correo válido."),
  province: z.string().min(1, "Selecciona tu provincia."),
  age: z.coerce.number().min(12, "Edad mínima: 12.").max(35, "Edad máxima: 35."),
  interests: z.string().min(5, "Cuéntanos al menos un interés."),
  profession: z.string().min(2, "Indica tu ocupación o área de estudio."),
  message: z.string().min(10, "Comparte un mensaje un poco más completo.")
});

type FormValues = z.infer<typeof schema>;

export function JoinForm() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  function onSubmit() {
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="glass grid gap-5 rounded-2xl p-6">
      {sent ? (
        <div className="rounded-xl bg-emerald-50 p-4 text-emerald-800">
          <CheckCircle2 className="mb-2 h-5 w-5" />
          Recibimos tu interés. Este formulario está listo para conectarse a un CRM o panel administrativo.
        </div>
      ) : null}
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Nombre" error={errors.name?.message}>
          <Input {...register("name")} autoComplete="name" />
        </Field>
        <Field label="Correo" error={errors.email?.message}>
          <Input {...register("email")} type="email" autoComplete="email" />
        </Field>
        <Field label="Provincia" error={errors.province?.message}>
          <Input {...register("province")} placeholder="San José, Alajuela..." />
        </Field>
        <Field label="Edad" error={errors.age?.message}>
          <Input {...register("age")} type="number" min={12} max={35} />
        </Field>
        <Field label="Intereses" error={errors.interests?.message}>
          <Input {...register("interests")} placeholder="Salud mental, ambiente, tecnología..." />
        </Field>
        <Field label="Profesión u ocupación" error={errors.profession?.message}>
          <Input {...register("profession")} />
        </Field>
      </div>
      <Field label="Mensaje" error={errors.message?.message}>
        <Textarea {...register("message")} />
      </Field>
      <Button type="submit" size="lg">Enviar solicitud</Button>
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
