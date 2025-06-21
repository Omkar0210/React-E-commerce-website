// src/pages/Cart/Cart.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import { selectCartItems, selectCartTotalPrice } from '../../redux/cartSlice';
import CartItem from '../../components/CartItem/CartItem';

const Cart = () => {
  const cartItems = useSelector(selectCartItems);
  const totalPrice = useSelector(selectCartTotalPrice);

  if (cartItems.length === 0) {
    return (
      <div className="text-center py-20">
        <h2 className="text-3xl font-semibold text-gray-700">Your cart is empty.</h2>
        <p className="text-gray-500 mt-2">Looks like you haven't added anything to your cart yet.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Your Shopping Cart</h2>
      <div className="bg-white rounded-lg shadow-md">
        <div className="p-6 space-y-4">
          {cartItems.map(item => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
        <div className="bg-gray-100 p-6 rounded-b-lg flex justify-end items-center">
          <span className="text-xl font-semibold text-gray-700 mr-4">
            Total: ${totalPrice.toFixed(2)}
          </span>
          <button className="bg-green-600 text-white py-2 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;