import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductDetail from './components/ProductDetail';

function HomePage() {
  const [cart, setCart] = useState({ items: [], total: 0 });
  const [featuredProducts] = useState([
    {
      id: 1,
      name: 'Wireless Headphones',
      description: 'Premium noise-canceling headphones',
      price: 149.99,
      image: '🎧',
      category: 'Electronics',
      features: ['Noise Cancellation', '30hr Battery', 'Bluetooth 5.0', 'Fast Charging']
    },
    {
      id: 2,
      name: 'Smart Watch',
      description: 'Fitness tracking & notifications',
      price: 199.99,
      image: '⌚',
      category: 'Electronics',
      features: ['Heart Rate Monitor', 'GPS', 'Water Resistant', 'Sleep Tracking']
    },
    {
      id: 3,
      name: 'Laptop Backpack',
      description: 'Water-resistant with laptop compartment',
      price: 59.99,
      image: '🎒',
      category: 'Accessories',
      features: ['Water Resistant', 'Laptop Compartment', 'USB Port', 'Multiple Pockets']
    },
    {
      id: 4,
      name: 'Coffee Maker',
      description: 'Programmable 12-cup coffee maker',
      price: 79.99,
      image: '☕',
      category: 'Home',
      features: ['Programmable', 'Built-in Grinder', 'Thermal Carafe', '12-Cup Capacity']
    }
  ]);

  const addToCart = (product) => {
    const existingItem = cart.items.find(item => item.id === product.id);
    let newItems;
    
    if (existingItem) {
      newItems = cart.items.map(item =>
        item.id === product.id 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      newItems = [...cart.items, { ...product, quantity: 1 }];
    }
    
    const newTotal = newItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    setCart({ items: newItems, total: newTotal });
  };

  const removeFromCart = (productId) => {
    const newItems = cart.items.filter(item => item.id !== productId);
    const newTotal = newItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    setCart({ items: newItems, total: newTotal });
  };

  return (
    <div style={{ 
      fontFamily: 'Arial, sans-serif', 
      maxWidth: '1200px', 
      margin: '0 auto', 
      padding: '20px' 
    }}>
      <header style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '2px solid #f0f0f0',
        paddingBottom: '20px',
        marginBottom: '30px'
      }}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <h1 style={{ color: '#2c5aa0', margin: 0 }}>🛒 ShopEasy</h1>
        </Link>
        <div style={{
          background: '#f8f9fa',
          padding: '15px',
          borderRadius: '10px',
          minWidth: '200px'
        }}>
          <h3 style={{ margin: '0 0 10px 0' }}>Cart ({cart.items.length})</h3>
          <p style={{ margin: '0 0 10px 0', fontWeight: 'bold' }}>
            Total: 
          </p>
          {cart.items.length > 0 && (
            <button 
              onClick={() => alert('Checkout functionality would go here!')}
              style={{
                padding: '8px 16px',
                background: '#28a745',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
              }}
            >
              Checkout
            </button>
          )}
        </div>
      </header>

      <section>
        <h2 style={{ color: '#333', marginBottom: '20px' }}>Featured Products</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '25px',
          marginBottom: '40px'
        }}>
          {featuredProducts.map(product => (
            <div key={product.id} style={{
              border: '1px solid #e0e0e0',
              borderRadius: '12px',
              padding: '20px',
              background: 'white',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              transition: 'transform 0.2s',
              cursor: 'pointer'
            }} 
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            onClick={() => window.location.href = '/product/' + product.id}
            >
              <div style={{
                fontSize: '48px',
                textAlign: 'center',
                marginBottom: '15px'
              }}>
                {product.image}
              </div>
              <h3 style={{ 
                margin: '0 0 10px 0',
                color: '#2c5aa0'
              }}>
                {product.name}
              </h3>
              <p style={{ 
                color: '#666',
                margin: '0 0 15px 0',
                fontSize: '14px'
              }}>
                {product.description}
              </p>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <span style={{
                  fontSize: '18px',
                  fontWeight: 'bold',
                  color: '#2c5aa0'
                }}>
                  
                </span>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    addToCart(product);
                    alert('Added to cart: ' + product.name);
                  }}
                  style={{
                    padding: '10px 20px',
                    background: '#007bff',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontWeight: 'bold'
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {cart.items.length > 0 && (
        <section>
          <h2 style={{ color: '#333', marginBottom: '20px' }}>Your Cart Items</h2>
          <div style={{
            background: '#f8f9fa',
            padding: '20px',
            borderRadius: '10px'
          }}>
            {cart.items.map(item => (
              <div key={item.id} style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '10px 0',
                borderBottom: '1px solid #dee2e6'
              }}>
                <div>
                  <span style={{ fontSize: '24px', marginRight: '10px' }}>{item.image}</span>
                  <span style={{ fontWeight: 'bold' }}>{item.name}</span>
                  <span style={{ marginLeft: '10px', color: '#666' }}>
                    (Qty: {item.quantity})
                  </span>
                </div>
                <div>
                  <span style={{ marginRight: '15px', fontWeight: 'bold' }}>
                    
                  </span>
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    style={{
                      padding: '5px 10px',
                      background: '#dc3545',
                      color: 'white',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: 'pointer'
                    }}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

function App() {
  const [cart, setCart] = useState({ items: [], total: 0 });

  const addToCart = (product) => {
    const existingItem = cart.items.find(item => item.id === product.id);
    let newItems;
    
    if (existingItem) {
      newItems = cart.items.map(item =>
        item.id === product.id 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      newItems = [...cart.items, { ...product, quantity: 1 }];
    }
    
    const newTotal = newItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    setCart({ items: newItems, total: newTotal });
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductDetail addToCart={addToCart} />} />
      </Routes>
    </Router>
  );
}

export default App;
