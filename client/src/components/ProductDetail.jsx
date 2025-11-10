import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function ProductDetail({ addToCart }) {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const products = {
    1: {
      id: 1,
      name: 'Wireless Headphones',
      description: 'Premium noise-canceling headphones with 30-hour battery life and superior sound quality.',
      price: 149.99,
      image: '🎧',
      category: 'Electronics',
      features: ['Noise Cancellation', '30hr Battery', 'Bluetooth 5.0', 'Fast Charging']
    },
    2: {
      id: 2,
      name: 'Smart Watch',
      description: 'Advanced fitness tracking with heart rate monitoring and smartphone notifications.',
      price: 199.99,
      image: '⌚',
      category: 'Electronics',
      features: ['Heart Rate Monitor', 'GPS', 'Water Resistant', 'Sleep Tracking']
    },
    3: {
      id: 3,
      name: 'Laptop Backpack',
      description: 'Durable water-resistant backpack with dedicated laptop compartment and USB charging port.',
      price: 59.99,
      image: '🎒',
      category: 'Accessories',
      features: ['Water Resistant', 'Laptop Compartment', 'USB Port', 'Multiple Pockets']
    },
    4: {
      id: 4,
      name: 'Coffee Maker',
      description: 'Programmable 12-cup coffee maker with built-in grinder and thermal carafe.',
      price: 79.99,
      image: '☕',
      category: 'Home',
      features: ['Programmable', 'Built-in Grinder', 'Thermal Carafe', '12-Cup Capacity']
    }
  };

  const product = products[id];

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <button 
        onClick={() => navigate('/')}
        style={{ marginBottom: '20px', padding: '8px 16px', background: '#6c757d', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
      >
        ← Back to Products
      </button>
      
      <div style={{ display: 'flex', gap: '40px', alignItems: 'flex-start' }}>
        <div style={{ fontSize: '120px', flex: '0 0 auto' }}>
          {product.image}
        </div>
        
        <div style={{ flex: '1' }}>
          <h1 style={{ color: '#2c5aa0', marginBottom: '10px' }}>{product.name}</h1>
          <p style={{ color: '#666', fontSize: '18px', marginBottom: '20px' }}>{product.description}</p>
          
          <div style={{ marginBottom: '20px' }}>
            <h3 style={{ color: '#333', marginBottom: '10px' }}>Features:</h3>
            <ul style={{ paddingLeft: '20px' }}>
              {product.features.map((feature, index) => (
                <li key={index} style={{ marginBottom: '5px' }}>{feature}</li>
              ))}
            </ul>
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '28px', fontWeight: 'bold', color: '#2c5aa0' }}>
              
            </span>
            <button 
              onClick={() => {
                addToCart(product);
                alert('Added to cart: ' + product.name);
              }}
              style={{
                padding: '12px 30px',
                background: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontWeight: 'bold',
                fontSize: '16px'
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
