export type ArticleMetadata = {
  title: string;
  description: string;
  date: string;
  category: string;
  image: string;
  author: string;
  province?: string;
  readingTime: string;
  tags: string[];
  bio?: string;
};

export const blogPostMeta: Array<{ slug: string; metadata: ArticleMetadata }> = [
  {
    slug: "bienestar-comunitario",
    metadata: {
      title: "Bienestar comunitario: la salud joven también se construye en red",
      description: "Una mirada práctica a cómo las comunidades pueden proteger la salud integral de las personas jóvenes.",
      date: "2026-06-20",
      category: "Salud integral",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80",
      author: "Equipo Juventud Saludable",
      readingTime: "5 min",
      tags: ["bienestar", "comunidad", "salud mental"]
    }
  },
  {
    slug: "liderazgo-provincial",
    metadata: {
      title: "Liderazgo provincial: cómo pasar de la intención a la acción pública",
      description: "Herramientas para que coordinaciones jóvenes diseñen iniciativas con legitimidad, datos e impacto.",
      date: "2026-06-04",
      category: "Liderazgo",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
      author: "María Fernanda Solís",
      readingTime: "7 min",
      tags: ["liderazgo", "incidencia", "provincias"]
    }
  }
];

export const opinionPostMeta: Array<{ slug: string; metadata: ArticleMetadata }> = [
  {
    slug: "tecnologia-con-proposito",
    metadata: {
      title: "Tecnología con propósito para comunidades más sanas",
      description: "Una voz joven sobre datos, herramientas digitales y participación responsable.",
      date: "2026-05-16",
      category: "Tecnología",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
      author: "Daniela Araya",
      province: "Heredia",
      readingTime: "4 min",
      tags: ["tecnología", "innovación", "participación"],
      bio: "Estudiante de ingeniería y voluntaria en proyectos de alfabetización digital."
    }
  },
  {
    slug: "ambiente-y-bienestar",
    metadata: {
      title: "Ambiente y bienestar: una misma conversación",
      description: "Por qué la acción climática local también es una política de salud joven.",
      date: "2026-04-28",
      category: "Ambiente",
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
      author: "Sebastián Mora",
      province: "Puntarenas",
      readingTime: "5 min",
      tags: ["ambiente", "salud", "comunidad"],
      bio: "Activista comunitario enfocado en educación ambiental y liderazgo costero."
    }
  }
];
