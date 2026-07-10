import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { isValidSessionToken, SESSION_COOKIE } from "@/lib/auth";

export async function GET() {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE)?.value;
  return NextResponse.json({ authed: isValidSessionToken(token) });
}
