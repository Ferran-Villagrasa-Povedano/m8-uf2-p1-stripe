import { addToCart, getProducts } from '@/api';
import ProductCard from '@/components/productCard';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';

export function meta() {
  return [{ title: 'Home' }, { name: 'description', content: 'Home' }];
}

export default function FilterHome() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchParams] = useSearchParams();
  const filter = searchParams.get('filter');
  console.log('filter', toString(filter));

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
  }, []);

  useEffect(() => {
    if (filter) {
      const filtered = products.filter(product => product.metadata.category === filter);
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [filter, products]);

  // Handle adding a product to the cart
  const handleAddToCart = async product => {
    try {
      setProducts(
        products.map(item => (item.id === product.id ? { ...item, inCart: true } : item))
      );
      await addToCart(product.id, 1);
      console.log('nuevoitem', product.id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div>
        <h1>Home</h1>
        <br></br>

        <div className="flex flex-wrap justify-center mt-8 gap-4">
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
              onClick={() => handleAddToCart(product)}
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
