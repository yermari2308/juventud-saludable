import {
  Activity,
  BookOpen,
  CalendarDays,
  Cpu,
  GraduationCap,
  HandHeart,
  Leaf,
  Lightbulb,
  Megaphone,
  UsersRound
} from "lucide-react";

export const navItems = [
  { label: "Inicio", href: "/" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Qué hacemos", href: "/que-hacemos" },
  { label: "Blog", href: "/blog" },
  { label: "Opinión Juvenil", href: "/opinion-juvenil" },
  { label: "Eventos", href: "/eventos" },
  { label: "Únete", href: "/unete" }
];

export const impactStats = [
  { value: "7", label: "provincias conectadas" },
  { value: "2.4k", label: "jóvenes alcanzados" },
  { value: "68", label: "activaciones comunitarias" },
  { value: "34", label: "alianzas en formación" }
];

export const focusAreas = [
  {
    title: "Salud integral",
    description: "Activaciones sobre movimiento, alimentación, autocuidado, sueño y prevención.",
    icon: Activity,
    tone: "bg-orange-100 text-saludable-orange"
  },
  {
    title: "Salud mental",
    description: "Círculos de escucha, alfabetización emocional y rutas de apoyo temprano.",
    icon: HandHeart,
    tone: "bg-purple-100 text-saludable-purple"
  },
  {
    title: "Educación",
    description: "Laboratorios de habilidades para la vida, ciudadanía digital y futuro laboral.",
    icon: GraduationCap,
    tone: "bg-yellow-100 text-amber-700"
  },
  {
    title: "Participación",
    description: "Escuelas de incidencia para que las juventudes influyan en decisiones públicas.",
    icon: Megaphone,
    tone: "bg-sky-100 text-sky-700"
  },
  {
    title: "Ambiente",
    description: "Proyectos barriales que conectan bienestar, biodiversidad y acción climática.",
    icon: Leaf,
    tone: "bg-emerald-100 text-saludable-moss"
  },
  {
    title: "Tecnología",
    description: "Herramientas digitales, datos comunitarios y campañas de innovación social.",
    icon: Cpu,
    tone: "bg-indigo-100 text-indigo-700"
  },
  {
    title: "Voluntariado",
    description: "Misiones de servicio con roles claros, acompañamiento y aprendizaje continuo.",
    icon: UsersRound,
    tone: "bg-rose-100 text-rose-700"
  },
  {
    title: "Emprendimiento",
    description: "Mentorías para convertir ideas de bienestar en proyectos sostenibles.",
    icon: Lightbulb,
    tone: "bg-lime-100 text-lime-700"
  }
];

export const events = [
  {
    title: "Foro Nacional Juventud y Bienestar",
    date: "2026-08-22",
    place: "San José, Costa Rica",
    type: "Foro",
    summary: "Mesas de diálogo con jóvenes, instituciones públicas, universidades y organizaciones aliadas."
  },
  {
    title: "Laboratorio de Liderazgo Comunitario",
    date: "2026-09-14",
    place: "Cartago",
    type: "Taller",
    summary: "Entrenamiento práctico para diseñar proyectos locales con métricas de impacto."
  },
  {
    title: "Jornada Activa por la Salud Mental",
    date: "2026-10-05",
    place: "Alajuela",
    type: "Activación",
    summary: "Movimiento, conversación y orientación profesional para comunidades educativas."
  }
];

export const news = [
  {
    title: "Juventud Saludable abre convocatoria para coordinaciones provinciales",
    category: "Comunicado",
    date: "2026-07-01",
    description: "La organización inicia un proceso nacional para fortalecer liderazgos locales."
  },
  {
    title: "Nuevo boletín reúne aprendizajes sobre salud mental joven",
    category: "Boletín",
    date: "2026-06-18",
    description: "La edición presenta datos, voces jóvenes y recomendaciones de acción temprana."
  },
  {
    title: "Pronunciamiento por espacios educativos más saludables",
    category: "Pronunciamiento",
    date: "2026-05-29",
    description: "El movimiento llama a priorizar bienestar, escucha y prevención en centros educativos."
  }
];

export const timeline = [
  ["2024", "Primeros círculos de conversación en comunidades educativas."],
  ["2025", "Consolidación de áreas de salud mental, liderazgo y voluntariado."],
  ["2026", "Expansión nacional con coordinaciones provinciales y alianzas estratégicas."]
];

export const allies = ["Universidades", "Gobiernos locales", "Centros educativos", "Colectivos juveniles", "Sector privado"];

export const gallery = [
  {
    title: "Círculo de escucha",
    category: "Salud mental",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Voluntariado comunitario",
    category: "Voluntariado",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Laboratorio de ideas",
    category: "Innovación",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Actividad al aire libre",
    category: "Vida saludable",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80"
  }
];

export const resources = [
  { label: "Calendario", href: "/eventos", icon: CalendarDays },
  { label: "Artículos", href: "/blog", icon: BookOpen },
  { label: "Participar", href: "/unete", icon: UsersRound }
];
