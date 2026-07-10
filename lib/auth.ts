import { createHmac, timingSafeEqual } from "crypto";

export const SESSION_COOKIE = "admin_session";

function getSecret() {
  const password = process.env.ADMIN_PASSWORD;
  if (!password) {
    throw new Error("ADMIN_PASSWORD no está configurada en las variables de entorno");
  }
  return password;
}

function safeEqual(a: string, b: string) {
  const bufferA = Buffer.from(a);
  const bufferB = Buffer.from(b);
  if (bufferA.length !== bufferB.length) return false;
  return timingSafeEqual(bufferA, bufferB);
}

export function createSessionToken() {
  return createHmac("sha256", getSecret()).update("admin-session").digest("hex");
}

export function isValidPassword(password: string) {
  return safeEqual(password, getSecret());
}

export function isValidSessionToken(token: string | undefined | null) {
  if (!token) return false;
  return safeEqual(token, createSessionToken());
}
