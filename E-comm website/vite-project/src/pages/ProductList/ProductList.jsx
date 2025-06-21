// src/pages/ProductList/ProductList.jsx
import React, { useState } from 'react';
import useProducts from '../../hooks/useProducts';
import ProductItem from '../../components/ProductItem/ProductItem';
import Spinner from '../../components/Spinner/Spinner';

const ProductList = () => {
  const { products, loading, error } = useProducts();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <Spinner />;
  if (error) return <div className="text-center text-red-600 p-8 text-xl">Error: {error}</div>;

  return (
    <div>
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Our Products</h1>
      <div className="mb-8 max-w-lg mx-auto">
        <input
          type="text"
          placeholder="Search for products..."
          className="w-full px-4 py-3 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredProducts.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;