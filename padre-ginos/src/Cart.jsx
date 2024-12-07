import { priceConverter } from "./useCurrency";

export default function Cart({ cart, checkout }) {
  const total = cart.reduce((total, curr) => {
    total += curr.pizza.sizes[curr.size];
    return total;
  }, 0);

  return (
    <div className="cart">
      <h2>Cart</h2>
      <ul>
        {cart.map((item, index) => (
          // using index as key because there can be duplicates in the cart
          <li key={index}>
            <span className="size">{item.size}</span> -
            <span className="type">{item.pizza.name}</span> -
            <span className="price">{item.price}</span> -
          </li>
        ))}
      </ul>
      <p>Total: {priceConverter(total)}</p>
      <button onClick={checkout}>Checkout</button>
    </div>
  );
}
