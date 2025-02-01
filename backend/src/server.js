import dotenv from 'dotenv';
import express from 'express';
import Stripe from 'stripe';
dotenv.config();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const app = express();
app.use(express.json());

let cart = [];


app.get("/api/products", async (req, res) => {
  try {
    const products = await stripe.products.list();

    const productsWithPrices = await Promise.all(products.data.map(async (product) => {
      const price = await stripe.prices.retrieve(product.default_price);
      return {
        id: product.id,
        name: product.name,
        description: product.description,
        image: product.images[0],
        price: price ? price.unit_amount / 100 : null,
      };
    }));

    res.json(productsWithPrices);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/cart', async (req, res) => {
  res.json(cart);
});

app.post('/api/cart', async (req, res) => {
  const { productId, quantity = 1 } = req.body;

  if (!productId) {
    return res.status(400).json({ error: 'Product ID is required' });
  }

  if (quantity < 1) {
    return res.status(400).json({ error: 'Quantity must be at least 1' });
  }

  try {
    const productInCart = cart.find((item) => item.productId === productId);

    if (productInCart) {
      return res.status(400).json({ error: 'Product is already in the cart' });
    }

    const product = await stripe.products.retrieve(productId);
    const price = await stripe.prices.retrieve(product.default_price);

    const cartItem = {
      productId: product.id,
      priceId: price.id,
      name: product.name,
      description: product.description,
      image: product.images[0],
      price: price ? price.unit_amount / 100 : null,
      priceId: price.id,
      quantity,
    };

    cart.push(cartItem);

    res.status(201).json(cartItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete('/api/cart/:productId', async (req, res) => {
  const { productId } = req.params;

  if (!productId) {
    return res.status(400).json({ error: 'Product ID is required' });
  }

  const productIndex = cart.findIndex((item) => item.productId === productId);

  if (productIndex === -1) {
    return res.status(404).json({ error: 'Product not found in the cart' });
  }

  const removedProduct = cart.splice(productIndex, 1);

  res.status(200).json(removedProduct[0]);
});

app.get('/api/cart/checkout', async (req, res) => {
  if (cart.length === 0) {
    return res.status(400).json({ error: 'Cart is empty' });
  }

  try {
    const lineItems = cart.map((item) => ({
      price: item.priceId,
      quantity: item.quantity,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `http://localhost:5173/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `http://localhost:5173/cancel?session_id={CHECKOUT_SESSION_ID}`,
    });

    cart = [];

    res.status(200).json({ sessionId: session.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
