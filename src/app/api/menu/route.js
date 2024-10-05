import connectMongoDB from "@/database/mongodb";
import Product from "@/models/product";
import { NextResponse } from "next/server";

export async function getServerSideProps(context) {
  const products = await Product.find();
  return {
    props: { products: JSON.parse(JSON.stringify(products)) },
  };
}
