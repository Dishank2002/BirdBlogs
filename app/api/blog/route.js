// app/api/blog/route.js
import { connect } from "@/lib/db";
import { NextResponse } from "next/server";
import Blog from "@/models/Blog";

export async function POST(req) {
  await connect();

  const accessToken = req.headers.get("authorization");
  const token = accessToken && accessToken.split(" ")[1];

  if (!accessToken || !token) {
    return new Response(
      JSON.stringify({ error: "unauthorized (wrong or expired token)" }),
      { status: 403 }
    );
  }

  try {
    const body = await req.json();
    const newblog = await Blog.create(body);

    return NextResponse.json(newblog, { status: 201 });
  } catch (error) {
    console.error("POST error (create blog):", error);
    return NextResponse.json({ message: "POST error (create blog)" }, { status: 500 });
  }
}

export async function GET() {
  await connect();

  try {
    const blogs = await Blog.find({})
      .populate({
        path: "authorId",
        select: "-password",
      })
      .sort({ createdAt: -1 });

    return NextResponse.json(blogs);
  } catch (error) {
    console.error("GET error:", error);
    return NextResponse.json(
      { message: "GET error" },
      { status: 500 }
    );
  }
}
