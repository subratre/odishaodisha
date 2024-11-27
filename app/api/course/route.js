import { conneeectDB } from "@/dbConfig/dbConfig";
import { NextResponse } from "next/server";
conneeectDB();

export async function GET() {
  return NextResponse.json({ status: "success" });
}
