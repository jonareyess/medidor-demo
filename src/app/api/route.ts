import { NextResponse } from "next/server";

export async function GET() {
  // Simula la lectura de amperaje
  const amperaje = Math.random() * 10 + 5;
  return NextResponse.json({ amperaje });
}
