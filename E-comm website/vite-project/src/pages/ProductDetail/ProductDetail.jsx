// src/pages/ProductDetail/ProductDetail.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/cartSlice';
import Spinner from '../../components/Spinner/Spinner';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        if (!response.ok) throw new Error('Product not found.');
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProductDetail();
  }, [id]);

  if (loading) return <Spinner />;
  if (error) return <div className="text-center text-red-600 p-8 text-xl">{error}</div>;
  if (!product) return <div className="text-center text-gray-600 p-8 text-xl">Product not found.</div>;

  return (
    <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <img 
            src={product.thumbnail} 
            alt={product.title} 
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
        <div className="md:w-1/2 flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-extrabold text-gray-900 mb-2">{product.title}</h1>
            <p className="text-gray-500 mb-4">{product.brand}</p>
            <p className="text-gray-700 leading-relaxed mb-6">{product.description}</p>
            <div className="flex items-center mb-6">
              <span className="text-yellow-500 font-bold text-lg">⭐ {product.rating}</span>
              <span className="text-gray-400 mx-2">|</span>
              <span className="text-gray-600">{product.stock} in stock</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-4xl font-bold text-blue-600">${product.price}</p>
            <button
              onClick={() => dispatch(addItem(product))}
              className="bg-green-600 text-white py-3 px-8 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;