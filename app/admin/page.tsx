"use client";

import { useEffect, useState } from "react";
import { Trash2, Plus, LogOut, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import type { SiteEvent } from "@/lib/events-store";

const EMPTY_EVENT: SiteEvent = { title: "", date: "", place: "", type: "", summary: "" };

export default function AdminPage() {
  const [checkingSession, setCheckingSession] = useState(true);
  const [authed, setAuthed] = useState(false);
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [loggingIn, setLoggingIn] = useState(false);

  const [events, setEvents] = useState<SiteEvent[]>([]);
  const [loadingEvents, setLoadingEvents] = useState(false);
  const [saving, setSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState("");

  useEffect(() => {
    fetch("/api/admin/session")
      .then((res) => res.json())
      .then((data) => setAuthed(Boolean(data.authed)))
      .finally(() => setCheckingSession(false));
  }, []);

  useEffect(() => {
    if (!authed) return;
    setLoadingEvents(true);
    fetch("/api/admin/events")
      .then((res) => res.json())
      .then((data) => setEvents(Array.isArray(data.events) ? data.events : []))
      .finally(() => setLoadingEvents(false));
  }, [authed]);

  async function handleLogin(formEvent: React.FormEvent) {
    formEvent.preventDefault();
    setLoggingIn(true);
    setLoginError("");
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password })
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setLoginError(data.error ?? "No se pudo iniciar sesión");
        return;
      }
      setAuthed(true);
      setPassword("");
    } finally {
      setLoggingIn(false);
    }
  }

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    setAuthed(false);
    setEvents([]);
  }

  function updateEvent(index: number, field: keyof SiteEvent, value: string) {
    setEvents((prev) => prev.map((event, i) => (i === index ? { ...event, [field]: value } : event)));
  }

  function removeEvent(index: number) {
    setEvents((prev) => prev.filter((_, i) => i !== index));
  }

  function addEvent() {
    setEvents((prev) => [...prev, { ...EMPTY_EVENT }]);
  }

  async function handleSave() {
    setSaving(true);
    setSaveMessage("");
    try {
      const res = await fetch("/api/admin/events", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ events })
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setSaveMessage(data.error ?? "No se pudieron guardar los cambios");
        return;
      }
      const data = await res.json();
      setEvents(data.events);
      setSaveMessage("Cambios guardados. Ya están visibles en el sitio.");
    } finally {
      setSaving(false);
    }
  }

  if (checkingSession) {
    return (
      <div className="container-shell flex min-h-[60vh] items-center justify-center py-16">
        <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (!authed) {
    return (
      <div className="container-shell flex min-h-[60vh] items-center justify-center py-16">
        <form onSubmit={handleLogin} className="w-full max-w-sm rounded-2xl border bg-white p-8 shadow-soft">
          <h1 className="text-2xl font-black">Panel de administración</h1>
          <p className="mt-2 text-sm text-muted-foreground">Ingresa la contraseña para editar el contenido del sitio.</p>
          <Input
            type="password"
            placeholder="Contraseña"
            className="mt-6"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoFocus
          />
          {loginError && <p className="mt-3 text-sm font-semibold text-red-600">{loginError}</p>}
          <Button type="submit" className="mt-6 w-full" disabled={loggingIn || !password}>
            {loggingIn ? "Ingresando…" : "Ingresar"}
          </Button>
        </form>
      </div>
    );
  }

  return (
    <div className="container-shell py-16">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-saludable-orange">Panel de administración</p>
          <h1 className="mt-2 text-4xl font-black">Próximos eventos</h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Agrega, edita o elimina los eventos que aparecen en la página de inicio y en el calendario público.
          </p>
        </div>
        <Button variant="outline" onClick={handleLogout}>
          <LogOut className="h-4 w-4" /> Cerrar sesión
        </Button>
      </div>

      {loadingEvents ? (
        <div className="mt-10 flex justify-center">
          <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
        </div>
      ) : (
        <div className="mt-10 grid gap-6">
          {events.map((event, index) => (
            <div key={index} className="rounded-2xl border bg-white p-6 shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <p className="text-sm font-bold uppercase tracking-[0.12em] text-muted-foreground">Evento {index + 1}</p>
                <button
                  type="button"
                  onClick={() => removeEvent(index)}
                  className="rounded-lg p-2 text-red-600 hover:bg-red-50"
                  aria-label="Eliminar evento"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <label className="grid gap-1.5 text-sm font-semibold">
                  Título
                  <Input value={event.title} onChange={(e) => updateEvent(index, "title", e.target.value)} />
                </label>
                <label className="grid gap-1.5 text-sm font-semibold">
                  Tipo
                  <Input
                    value={event.type}
                    placeholder="Foro, Taller, Activación…"
                    onChange={(e) => updateEvent(index, "type", e.target.value)}
                  />
                </label>
                <label className="grid gap-1.5 text-sm font-semibold">
                  Fecha
                  <Input type="date" value={event.date} onChange={(e) => updateEvent(index, "date", e.target.value)} />
                </label>
                <label className="grid gap-1.5 text-sm font-semibold">
                  Lugar
                  <Input value={event.place} onChange={(e) => updateEvent(index, "place", e.target.value)} />
                </label>
              </div>
              <label className="mt-4 grid gap-1.5 text-sm font-semibold">
                Resumen
                <Textarea value={event.summary} rows={3} onChange={(e) => updateEvent(index, "summary", e.target.value)} />
              </label>
            </div>
          ))}

          <Button variant="outline" onClick={addEvent} className="w-fit">
            <Plus className="h-4 w-4" /> Agregar evento
          </Button>

          <div className="flex items-center gap-4">
            <Button onClick={handleSave} disabled={saving}>
              {saving ? "Guardando…" : "Guardar cambios"}
            </Button>
            {saveMessage && <p className="text-sm font-semibold text-muted-foreground">{saveMessage}</p>}
          </div>
        </div>
      )}
    </div>
  );
}
