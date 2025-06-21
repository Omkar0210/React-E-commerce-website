// src/hooks/useProducts.js
import { useState, useEffect } from 'react';

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch('https://dummyjson.com/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products. Please try again later.');
        }
        const data = await response.json();
        setProducts(data.products);
      } catch (err) {
        // Handle network errors or other exceptions
        setError(err.message);
      } finally {
        // This will run whether the fetch succeeded or failed
        setLoading(false);
      }
    };

    fetchProducts();
  }, []); // The empty dependency array means this effect runs only once when the component mounts

  // Return the state and data so any component can use this hook
  return { products, loading, error };
};

export default useProducts;