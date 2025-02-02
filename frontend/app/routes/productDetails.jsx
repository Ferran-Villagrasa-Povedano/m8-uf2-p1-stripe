import { addToCart, getProduct } from '@/api';
import addShoppingCart from '@/assets/add_shopping_cart.svg';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

export default function ProductDetails() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productData = await getProduct(productId);
        console.log('product', productData);
        setProduct(productData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [productId]);

  const handleAddToCart = async () => {
    try {
      setProduct({ ...product, inCart: true });
      await addToCart(product.id, 1);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-row place-content-between h-screen bg-gray-100 p-6 mt-10">
      <img src={product.image} alt={product.name} className="w-auto h-3/4 " />
      <div className="flex flex-col w-1/2 ml-10 mt-10">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">{product.name}</h1>
        <p>{product.description}</p>
        <p className="text-lg text-gray-600 mb-6">{product.id}</p>

        <button
          className={`w-full rounded-sm px-2 py-1 flex items-center justify-center mt-10 ${
            product.inCart ? 'bg-gray-300 cursor-not-allowed' : 'bg-green-200 hover:bg-green-300'
          }`}
          onClick={handleAddToCart}
          disabled={product.inCart}
          aria-label={product.inCart ? 'Product in cart' : 'Add to cart'}
        >
          <img src={addShoppingCart} alt="" className="w-4 h-4" aria-hidden="true" />
          <p className="text-xs p-2 color-dark-gray">{product.price} €</p>
        </button>
      </div>
    </div>
  );
}
