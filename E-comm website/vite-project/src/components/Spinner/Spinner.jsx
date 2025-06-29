// src/components/Spinner/Spinner.jsx
import React from 'react';

const Spinner = () => (
  <div className="flex justify-center items-center p-16">
    <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

export default Spinner;