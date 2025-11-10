import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({ items: [], total: 0 });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/products');
      setProducts(response.data);
    } catch (error) {
      console.log('No products yet - add some via the API');
    }
  };

  const addToCart = (product) => {
    const newItem = {
      ...product,
      quantity: 1
    };
    const newItems = [...cart.items, newItem];
    const newTotal = newItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    setCart({ items: newItems, total: newTotal });
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>E-Commerce Store</h1>
      
      <div style={{position: 'fixed', right: '20px', top: '20px', background: 'white', padding: '15px', border: '1px solid #ddd'}}>
        <h3>Cart ({cart.items.length} items)</h3>
        <p>Total: </p>
      </div>
      
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px', marginTop: '20px'}}>
        {products.map(product => (
          <div key={product._id} style={{border: '1px solid #ddd', padding: '15px', borderRadius: '8px'}}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Price: </p>
            <button onClick={() => addToCart(product)} style={{padding: '8px 16px', background: '#007bff', color: 'white', border: 'none', borderRadius: '4px'}}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      
      {products.length === 0 && (
        <p>No products found. Add products via the backend API.</p>
      )}
    </div>
  );
}

export default App;
