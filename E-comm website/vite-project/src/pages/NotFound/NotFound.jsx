// src/pages/NotFound/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="text-center py-20">
      <h1 className="text-9xl font-extrabold text-gray-800">404</h1>
      <p className="text-2xl font-semibold text-gray-600 mt-4">Oops! Page Not Found</p>
      <p className="text-gray-500 mt-2">The page you are looking for does not exist or has been moved.</p>
      <Link 
        to="/" 
        className="mt-8 inline-block bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
      >
        Go Back to Home
      </Link>
    </div>
  );
};

export default NotFound;