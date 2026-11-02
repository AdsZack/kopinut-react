import { useReducer, useState } from "react";
import { submitOrder } from "../data/orders";

const TAX_RATE = 0.1;

function cartReducer(items, action) {
  switch (action.type) {
    case "add": {
      const exist = items.find((i) => i.id === action.menu.id);
      if (exist) {
        return items.map((i) =>
          i.id === action.menu.id ? { ...i, qty: i.qty + 1 } : i,
        );
      }
      return [...items, { ...action.menu, qty: 1 }];
    }
    case "decrease":
      return items.map((i) =>
        i.id === action.id ? { ...i, qty: i.qty - 1 } : i,
      );
    case "remove":
      return items.filter((i) => i.id === action.id);
    case "clear":
      return [];
    default:
      return items;
  }
}

export function useCart() {
  const [items, dispatch] = useReducer(cartReducer, []);
  const [orderType, setOrderType] = useState("dine_in");

  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [lastOrder, setLastOrder] = useState(null);

  const subtotal = items.reduce((sum, i) => sum + i.price * i.qty, 0);
  const tax = Math.round(subtotal * TAX_RATE);

  async function checkout() {
    setSubmitting(true);
    setSubmitError(null);
    try {
      const order = await submitOrder({ orderType, items });
      setLastOrder(order);
      dispatch({ type: "clear" });
    } catch (err) {
      setSubmitError(err.message);
    } finally {
      setSubmitting(false);
    }
  }

  return {
    items,
    orderType,
    subtotal,
    tax,
    total: subtotal + tax,
    isEmpty: items.length === 0,
    submitting,
    submitError,
    lastOrder,
    setOrderType,
    addItem: (menu) => dispatch({ type: "add", menu }),
    decreaseItem: (id) => dispatch({ type: "decrease", id }),
    removeItem: (id) => dispatch({ type: "remove", id }),
    clear: () => dispatch({ type: "clear" }),
    checkout,
  };
}
