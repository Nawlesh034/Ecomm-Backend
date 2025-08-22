import mongoose from 'mongoose';
import Product from '../models/productModel.js';
import dotenv from 'dotenv';

dotenv.config();

// Simple sample products
const sampleProducts = [
  {
    name: "Stylish Fashion Bag",
    category: "FASHION BAG",
    price: 99,
    image: "https://images.pexels.com/photos/634754/pexels-photo-634754.jpeg",
    description: "Beautiful and stylish fashion bag for everyday use",
    rating: 5
  },
  {
    name: "Designer Handbag",
    category: "FASHION BAG", 
    price: 149,
    image: "https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg",
    description: "Premium designer handbag with elegant design",
    rating: 5
  },
  {
    name: "Classic Leather Bag",
    category: "FASHION BAG",
    price: 199,
    image: "https://images.pexels.com/photos/845434/pexels-photo-845434.jpeg",
    description: "Classic leather bag with timeless appeal",
    rating: 4
  },
  {
    name: "Modern Tote Bag",
    category: "FASHION BAG",
    price: 79,
    image: "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg",
    description: "Modern and practical tote bag for daily use",
    rating: 5
  },
  {
    name: "Elegant Evening Bag",
    category: "FASHION BAG",
    price: 129,
    image: "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg",
    description: "Perfect evening bag for special occasions",
    rating: 5
  },
  {
    name: "Casual Crossbody",
    category: "FASHION BAG",
    price: 89,
    image: "https://images.pexels.com/photos/1020370/pexels-photo-1020370.jpeg",
    description: "Comfortable crossbody bag for casual outings",
    rating: 4
  }
];

// Connect to database and seed data
const seedProducts = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');
    
    // Clear existing products
    await Product.deleteMany({});
    console.log('Cleared existing products');
    
    // Insert sample products
    await Product.insertMany(sampleProducts);
    console.log('Sample products added successfully');
    
    process.exit(0);
  } catch (error) {
    console.error('Error seeding data:', error);
    process.exit(1);
  }
};

seedProducts();
