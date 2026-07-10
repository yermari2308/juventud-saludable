# Juventud Saludable

Sitio institucional premium para el movimiento costarricense Juventud Saludable, construido con Next.js 15, TypeScript, Tailwind CSS, Framer Motion, componentes estilo shadcn/ui, React Hook Form, Zod y MDX.

## Stack

- Next.js 15 App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide Icons
- React Hook Form + Zod
- MDX para artículos
- SEO con metadata, Open Graph, Twitter Cards, sitemap, robots y JSON-LD

## Instalación

```bash
npm install
npm run dev
```

Abre `http://localhost:3000`.

## Producción

```bash
npm run build
npm run start
```

## Despliegue en Vercel

1. Sube este repositorio a GitHub.
2. Importa el proyecto desde Vercel.
3. Usa la configuración automática para Next.js.
4. Agrega la variable `NEXT_PUBLIC_SITE_URL` con la URL pública del proyecto, por ejemplo `https://juventud-saludable.vercel.app`.
5. Despliega.

Después del despliegue tendrás una URL pública tipo `https://juventud-saludable.vercel.app` que sí puedes compartir por WhatsApp, Instagram, LinkedIn o correo.

## Dominio en Hostinger

Hostinger puede usarse como registrador del dominio. En Vercel, agrega el dominio final y configura los DNS que Vercel indique. Luego cambia `NEXT_PUBLIC_SITE_URL` al dominio final. No hace falta modificar el código.

## Compartir el sitio

El sitio incluye Open Graph dinámico en `/opengraph-image`, metadata social, Twitter Cards y botones de compartir en artículos. La URL `http://127.0.0.1:3000` solo sirve en esta computadora; la URL compartible será la que entregue Vercel.

## Contenido editorial

Los artículos viven en:

- `content/blog/*.mdx`
- `content/opinion/*.mdx`

Cada archivo exporta `metadata` con título, descripción, fecha, categoría, imagen, autor, tiempo de lectura y etiquetas. Para publicar un nuevo artículo, crea un archivo MDX y regístralo en `content/registry.ts`.

## Formularios

Los formularios de `Únete` y `Contacto` ya tienen validación del lado del cliente. Están preparados para conectar una acción server, CRM, API route o panel administrativo futuro.
