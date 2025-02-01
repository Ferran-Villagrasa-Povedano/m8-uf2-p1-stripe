import { useEffect, useState } from 'react';
import { getCart, removeFromCart, checkoutCart } from '@/api';
import { FaTrashAlt } from 'react-icons/fa';

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cartData = await getCart();
        setCart(cartData);
        console.log(cartData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleRemoveFromCart = async productId => {
    try {
      await removeFromCart(productId);
      const updatedCart = await getCart();
      setCart(updatedCart);
    } catch (error) {
      console.log(error);
    }
  };

  const handleQuantityChange = (productId, quantity) => {
    const updatedCart = cart.map(item =>
      item.productId === productId ? { ...item, quantity: parseInt(quantity) } : item
    );
    console.log('updatreCarro', updatedCart);

    setCart(updatedCart);
  };

  const handleCheckout = async () => {
    try {
      console.log('carro: ', cart);
      const { url } = await checkoutCart();
      window.location.href = url;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-6">
      <h1>Carrito: </h1>
      <br />
      <div className="flex flex-col gap-4">
        {cart.map(item => (
          <div className="flex flex-row border-2 rounded border-gray-200 p-2 justify-between items-center" key={item.productId}>
            <div className="flex flex-row gap-2">
              <div className="flex flex-row gap-2">
                <div>
                  <img src={item.image} alt={item.name} className="w-25 h-25 self-center" />
                </div>
                <div>
                  <p>{item.name}</p>
                  <div className="flex gap-2 items-center">
                    <p className="align-middle">Cantidad: </p>
                    <select
                      className="border-2 border-gray-300 p-2 rounded"
                      value={item.quantity}
                      onChange={e => handleQuantityChange(item.productId, e.target.value)}
                    >
                      {[...Array(10).keys()].map(i => (
                        <option key={i} value={i + 1}>
                          {i + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                  <p>{item.price * item.quantity} €</p>
                </div>
              </div>
            </div>
            <button
              onClick={() => handleRemoveFromCart(item.productId)}
              className="bg-red-400  text-white w-15 h-15 mr-5 rounded-md hover:bg-red-600 flex items-center justify-center"
            >
              <FaTrashAlt />
            </button>
          </div>
        ))}
      </div>
      <br />
      <div className="flex justify-between items-center">
        <h1 className="">Total:</h1>
        <p className="mr-10 font-bold">{cart.reduce((acc, item) => acc + item.price * item.quantity, 0)} €</p>
      </div>
      <br />
      <div>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          onClick={handleCheckout}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
