// import connectMongoDB from "@/database/mongodb";
// import Product from "@/models/product";
// import { NextResponse } from "next/server";

// export async function GET() {
//   await connectMongoDB();
//   const products = await Product.find().limit(20);
//   return NextResponse.json({ products });
// }

import { connectMongoDB } from "@/database/mongodb";
import Product from "@/models/product";
import { NextResponse } from "next/server";

// Cache for storing the products
let productsCache = {
  data: null,
  lastFetched: null,
};

// Cache duration in milliseconds (e.g., 5 minutes)
const CACHE_DURATION = 5 * 60 * 1000;

export async function GET() {
  try {
    // Check if we have valid cached data
    if (
      productsCache.data &&
      productsCache.lastFetched &&
      Date.now() - productsCache.lastFetched < CACHE_DURATION
    ) {
      return NextResponse.json({ products: productsCache.data });
    }

    // If no valid cache, connect to MongoDB
    await connectMongoDB();

    // Set a timeout for the database query
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => reject(new Error("Database query timeout")), 5000);
    });

    // Fetch products with timeout
    const products = await Promise.race([
      Product.find().limit(20).lean(),
      timeoutPromise,
    ]);

    // Update cache
    productsCache = {
      data: products,
      lastFetched: Date.now(),
    };

    return NextResponse.json({ products });
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}

// Reset cache when the module is hot reloaded
if (process.env.NODE_ENV === "development") {
  productsCache = { data: null, lastFetched: null };
}
