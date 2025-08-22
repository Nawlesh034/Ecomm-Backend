import express from "express";
import cors from "cors";
import productRoutes from "./routes/productRoutes.js";
import authRoutes from "./routes/authRoutes.js";

const app = express();

app.use(cors({
    origin:"https://ecomm-opal-psi.vercel.app"
}));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes);

export default app;
