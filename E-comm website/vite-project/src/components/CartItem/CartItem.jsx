// src/components/CartItem/CartItem.jsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeItem, increaseQuantity, decreaseQuantity } from '../../redux/cartSlice';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-between border-b border-gray-200 pb-4">
      <div className="flex items-center">
        <img src={item.thumbnail} alt={item.title} className="w-20 h-20 object-cover rounded-md" />
        <div className="ml-4">
          <h4 className="font-semibold text-lg text-gray-800">{item.title}</h4>
          <p className="text-gray-600">${item.price}</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center border border-gray-300 rounded-md">
          <button onClick={() => dispatch(decreaseQuantity({ id: item.id }))} className="px-3 py-1 text-lg font-bold hover:bg-gray-100">-</button>
          <span className="px-4 py-1">{item.quantity}</span>
          <button onClick={() => dispatch(increaseQuantity({ id: item.id }))} className="px-3 py-1 text-lg font-bold hover:bg-gray-100">+</button>
        </div>
        <button
          onClick={() => dispatch(removeItem({ id: item.id }))}
          className="text-red-500 hover:text-red-700 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CartItem;