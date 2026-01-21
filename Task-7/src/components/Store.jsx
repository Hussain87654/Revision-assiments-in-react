import React, { useState, useEffect } from 'react';
import { CircularProgress, Alert, Container } from '@mui/material';
import ProductCard from './ProductCard'; //porane wale task se ye component le rahe hain

const Store = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://fakestoreapi.com/products');
        
        if (!response.ok) {
          throw new Error('Failed to fetch products. Please try again later.');
        }

        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []); 

  // 1. Loading State
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-100 gap-4">
        <CircularProgress color="primary" />
        <p className="text-gray-500 animate-pulse">Curating the best deals...</p>
      </div>
    );
  }

  // 2. Error State
  if (error) {
    return (
      <Container className="mt-10">
        <Alert severity="error" variant="filled">
          {error}
        </Alert>
      </Container>
    );
  }

  // 3. Success State
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Fake Store</h1>
          <p className="text-gray-600">Dynamic data fetched from External API</p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
              // is bina par ke product ki rating count 0 hai to out of stock maan lo
              isOutOfStock={product.rating.count === 0}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Store;