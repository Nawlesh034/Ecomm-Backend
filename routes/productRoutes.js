import express from "express";
import * as productController from "../Controller/productController.js";

const router = express.Router();

// All routes are public for easy testing and development
router.get("/", productController.getProducts);
router.get("/:id", productController.getProduct);
router.post("/", productController.createProduct);
router.put("/:id", productController.updateProduct);
router.delete("/:id", productController.deleteProduct);

export default router;
