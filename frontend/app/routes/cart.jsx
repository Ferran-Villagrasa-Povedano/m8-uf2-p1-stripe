import { useEffect, useState } from 'react';
import { getCart, removeFromCart } from '@/api';

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cartData = await getCart();
        setCart(cartData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="p-6 border-2 border-gray-200">
      <h1>Carrito: </h1>
      <br />
      <div className="flex flex-col gap-2">
        {cart.map(item => (
          <div className=" border-2 border-gray-200 p-2" key={item.productId}>
            <p>{item.name}</p>
            <p>${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
