import { index, route } from '@react-router/dev/routes';

export default [
  index('routes/home.jsx'),
  route('checkout', 'routes/checkout.jsx'),
  route('success', 'routes/success.jsx'),
  route('cancel', 'routes/cancel.jsx'),
  route('product/:productId', 'routes/product-details.jsx'),
  route('test', 'routes/test.jsx'),
  route('contact', 'routes/contact.jsx'),
  route('cart', 'routes/cart.jsx'),
  route('about', 'routes/about.jsx'),
  route('filterHome', 'routes/filterHome.jsx'),
];
