import { addToCart, checkoutCart, getCart, getProducts, removeFromCart } from '@/api';
import { useEffect, useState } from 'react';

const Test = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch products and cart on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsData = await getProducts();
        setProducts(productsData);

        const cartData = await getCart();
        setCart(cartData);

        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Handle adding a product to the cart
  const handleAddToCart = async productId => {
    try {
      await addToCart(productId);
      const updatedCart = await getCart();
      setCart(updatedCart);
    } catch (error) {
      setError(error.message);
    }
  };

  // Handle removing a product from the cart
  const handleRemoveFromCart = async productId => {
    try {
      await removeFromCart(productId);
      const updatedCart = await getCart();
      setCart(updatedCart);
    } catch (error) {
      setError(error.message);
    }
  };

  // Handle checkout
  const handleCheckout = async () => {
    try {
      const { sessionId } = await checkoutCart();
      console.log(sessionId);
      // Redirect to Stripe Checkout
      window.location.href = `https://checkout.stripe.com/pay/${sessionId}`;
    } catch (error) {
      setError(error.message);
    }
  };

  if (loading) {
    return <div className="p-4 text-center">Loading...</div>;
  }

  if (error) {
    return <div className="p-4 text-center text-red-500">Error: {error}</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Testing Route</h1>

      <h2 className="text-xl font-semibold mb-4">Products in Cart</h2>
      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">Description</th>
                <th className="px-4 py-2 text-left">Price</th>
                <th className="px-4 py-2 text-left">Quantity</th>
                <th className="px-4 py-2 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map(item => (
                <tr key={item.productId} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border-t">{item.name}</td>
                  <td className="px-4 py-2 border-t">{item.description}</td>
                  <td className="px-4 py-2 border-t">${item.price}</td>
                  <td className="px-4 py-2 border-t">{item.quantity}</td>
                  <td className="px-4 py-2 border-t">
                    <button
                      onClick={() => handleRemoveFromCart(item.productId)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <h2 className="text-xl font-semibold mt-8 mb-4">All Products</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Description</th>
              <th className="px-4 py-2 text-left">Price</th>
              <th className="px-4 py-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border-t">{product.name}</td>
                <td className="px-4 py-2 border-t">{product.description}</td>
                <td className="px-4 py-2 border-t">${product.price}</td>
                <td className="px-4 py-2 border-t">
                  <button
                    onClick={() => handleAddToCart(product.id)}
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                  >
                    Add to Cart
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {cart.length > 0 && (
        <div className="mt-6">
          <button
            onClick={handleCheckout}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Test;
