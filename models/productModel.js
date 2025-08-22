import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  description: { type: String, default: '' },
  inStock: { type: Boolean, default: true },
  rating: { type: Number, default: 5 }
}, { timestamps: true });

export default mongoose.model("Product", productSchema);
