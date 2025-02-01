import ProductCard from '../components/productCard';
import { useEffect, useState, useMemo } from 'react';
import { getProducts, addToCart } from '@/api';
import { checkoutCart, clearCart, getCart, removeFromCart } from '@/api';

import NavBar from '../components/navBar';

export function meta() {
  return [{ title: 'Home' }, { name: 'description', content: 'Home' }];
}

export default function Home() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState(null);
  const [error, setError] = useState(null);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsData = await getProducts();
        setProducts(productsData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  });

  const filteredProducts = useMemo(() => {
    if (category) {
      return products.filter(product => product.metadata.category === category);
    }
    return products;
  }, [products, category]);

  // Handle adding a product to the cart
  const handleAddToCart = async productId => {
    try {
      await addToCart(productId);
      const updatedCart = await getCart();
      setCart(updatedCart);
      console.log('nuevoitem', productId);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <div>
        <h1>Home</h1>
        <br></br>

        <div className="flex flex-wrap justify-center gap-4">
          {filteredProducts.map(product => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              description={product.description}
              image={product.image}
              price={product.price}
              metadata={product.metadata}
              inCart={product.inCart}
              onClick={() => handleAddToCart(product.id)}
            />
          ))}
        </div>
      </div>
      {/* <div className="overflow-x-auto flex flex-wrap snap-x snap-mandatory no-scrollbar">
        {filteredProducts.map(product => (
          <div className="snap-start snap-normal p-3">
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              description={product.description}
              image={product.image}
              price={product.price}
              metadata={product.metadata}
              inCart={product.inCart}
            />
          </div>
        ))}
      </div> */}
    </div>
  );
}
