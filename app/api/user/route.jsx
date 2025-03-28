import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const client = new PrismaClient();

export function GET(req) {
  return Response.json({
    name: "John Doe",
    age: 30,
  });
}

export async function POST(res) {
  const body = await res.json();
  const { username, password } = body;
  console.log("Username:", client);
  try {
    await client.user.create({
      data: {
        email: username,
        password: password,
      },
    });
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json({
      message: "Error creating user",
      error: error.message,
    });
  }
  console.log(body);
  return NextResponse.json({
    message: "User created successfully",
    data: body,
  });
}
