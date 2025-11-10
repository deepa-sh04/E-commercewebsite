import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Product from './models/Product.js';

dotenv.config();

async function addSampleProducts() {
  await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/ecommerce');
  
  const products = [
    {
      name: 'Wireless Headphones',
      description: 'High-quality wireless headphones with noise cancellation',
      price: 99.99,
      image: 'https://via.placeholder.com/150',
      category: 'Electronics'
    },
    {
      name: 'Smart Watch',
      description: 'Feature-rich smartwatch with health monitoring',
      price: 199.99,
      image: 'https://via.placeholder.com/150',
      category: 'Electronics'
    },
    {
      name: 'Laptop Backpack',
      description: 'Durable backpack for laptops and accessories',
      price: 49.99,
      image: 'https://via.placeholder.com/150',
      category: 'Accessories'
    }
  ];

  await Product.deleteMany({});
  await Product.insertMany(products);
  console.log('Sample products added!');
  process.exit();
}

addSampleProducts();
