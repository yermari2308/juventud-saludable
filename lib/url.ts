export function getSiteUrl() {
  const rawUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.VERCEL_PROJECT_PRODUCTION_URL ||
    process.env.VERCEL_URL ||
    "http://localhost:3000";

  const url = rawUrl.startsWith("http") ? rawUrl : `https://${rawUrl}`;
  return url.replace(/\/$/, "");
}
