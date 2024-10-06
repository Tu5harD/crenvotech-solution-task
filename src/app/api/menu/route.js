import connectMongoDB from "@/database/mongodb";
import Product from "@/models/product";
import { NextResponse } from "next/server";

export async function GET() {
  await connectMongoDB();
  const products = await Product.find().limit(20);
  return NextResponse.json({ products });
}
