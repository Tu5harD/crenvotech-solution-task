import mongoose, { Schema } from "mongoose";

const productSchema = new Schema(
  {
    id: { type: String, required: true },
    img: { type: String, required: true },
    name: { type: String, required: true },
    dsc: { type: String, required: true },
    price: { type: Number, required: true },
    rate: { type: Number, required: true },
    country: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
