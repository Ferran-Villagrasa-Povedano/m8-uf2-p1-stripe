import axios from 'axios';

const axiosClient = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getProducts = async () => {
  try {
    const response = await axiosClient.get('/products');
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export const getProduct = async id => {
  try {
    const response = await axiosClient.get('/products/' + id);
    return response.data;
  } catch (error) {
    console.error('Error fetching product:', error);
    throw error;
  }
};

export const getCart = async () => {
  try {
    const response = await axiosClient.get('/cart');
    return response.data;
  } catch (error) {
    console.error('Error fetching cart:', error);
    throw error;
  }
};

export const addToCart = async (productId, quantity) => {
  try {
    const response = await axiosClient.post('/cart', { productId, quantity: parseInt(quantity) });
    return response.data;
  } catch (error) {
    console.error('Error adding to cart:', error);
    throw error;
  }
};

export const updateProductCart = async (productId, quantity) => {
  try {
    const response = await axiosClient.post('/cart/update', {
      productId,
      quantity: parseInt(quantity),
    });
    return response.data;
  } catch (error) {
    console.error('Error adding to cart:', error);
    throw error;
  }
};

export const removeFromCart = async productId => {
  try {
    const response = await axiosClient.delete(`/cart/${productId}`);
    return response.data;
  } catch (error) {
    console.error('Error removing from cart:', error);
    throw error;
  }
};

export const clearCart = async () => {
  try {
    const response = await axiosClient.delete('/cart');
    return response.data;
  } catch (error) {
    console.error('Error clearing cart:', error);
    throw error;
  }
};

export const checkoutCart = async () => {
  try {
    const response = await axiosClient.get('/cart/checkout');
    return response.data;
  } catch (error) {
    console.error('Error during checkout:', error);
    throw error;
  }
};
