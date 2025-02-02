import addShoppingCart from '@/assets/add_shopping_cart.svg';
import React from 'react';
import { Link } from 'react-router';

export default function ProductCard({
  id,
  name,
  description,
  image,
  price,
  onClick,
  metadata,
  inCart,
}) {
  return (
    <div className="flex flex-col items-center justify-between p-4 bg-light-gray rounded-sm shadow-md w-50 h-70 border border-gray-200 relative">
      <Link to={`/product/${id}`}>
        <div className="flex justify-center w-full">
          <img className="w-[70%] rounded-sm self" src={image} alt={name} />
        </div>
        <h1 className="text-md">{name}</h1>
      </Link>
      <div className="w-full flex justify-center mt-auto mb-2">
        <button
          className={`w-full rounded-sm px-2 py-1 flex items-center justify-center ${
            inCart ? 'bg-gray-300 cursor-not-allowed' : 'bg-green-200 hover:bg-green-300'
          }`}
          onClick={onClick}
          disabled={inCart}
          aria-label={inCart ? 'Product in cart' : 'Add to cart'}
        >
          <img src={addShoppingCart} alt="" className="w-4 h-4" aria-hidden="true" />
          <p className="text-xs p-2 color-dark-gray">{price} €</p>
        </button>
      </div>
    </div>
  );
}
