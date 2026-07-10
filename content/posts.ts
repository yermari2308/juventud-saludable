export type ArticleMetadata = {
  title: string;
  description: string;
  date: string;
  category: string;
  readingTime: string;
  tags: string[];
};

export const blogPostMeta: Array<{ slug: string; metadata: ArticleMetadata }> = [
  {
    slug: "bienestar-comunitario",
    metadata: {
      title: "Bienestar comunitario: la salud joven también se construye en red",
      description: "Una mirada práctica a cómo las comunidades pueden proteger la salud integral de las personas jóvenes.",
      date: "2026-06-20",
      category: "Salud integral",
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
      readingTime: "4 min",
      tags: ["tecnología", "innovación", "participación"]
    }
  },
  {
    slug: "ambiente-y-bienestar",
    metadata: {
      title: "Ambiente y bienestar: una misma conversación",
      description: "Por qué la acción climática local también es una política de salud joven.",
      date: "2026-04-28",
      category: "Ambiente",
      readingTime: "5 min",
      tags: ["ambiente", "salud", "comunidad"]
    }
  }
];
