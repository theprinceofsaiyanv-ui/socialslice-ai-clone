import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

router.post("/checkout", async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    mode: "subscription",
    line_items: [{
      price_data: {
        currency: "usd",
        recurring: { interval: "month" },
        product_data: { name: "Pro Plan" },
        unit_amount: 1999,
      },
      quantity: 1,
    }],
    success_url: "http://localhost:3000/dashboard",
    cancel_url: "http://localhost:3000/pricing",
  });
  res.json({ url: session.url });
});
