const { conneeectDB } = require("@/dbConfig/dbConfig");
import Category from "@/models/categories";
import { NextResponse } from "next/server";
conneeectDB();

export async function POST(request) {
  const { name } = await request.json();

  const newcate = new Category({ name });

  const newca = await newcate.save();

  return NextResponse.json({ status: "success", data: newca });
}
