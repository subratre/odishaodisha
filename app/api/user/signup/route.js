import User from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { conneeectDB } from "@/dbConfig/dbConfig";
conneeectDB();

export async function POST(request) {
  let { name, email, username, isAdmin, password } = await request.json();

  try {
    if (!name) {
      return NextResponse.json({ status: "fail", message: "name is required" });
    }
    password = await bcrypt.hash(password, 10);
    const newuser = new User({
      name,
      email,
      username,
      isAdmin: false,
      password,
    });
    const savedUser = await newuser.save();
    return NextResponse.json({
      status: "success",
      data: {
        user: savedUser,
      },
    });
  } catch (error) {
    return NextResponse.json({ status: "fail", error: error.message });
  }
}
