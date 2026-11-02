import { useReducer, useState } from "react";

const TAX_RATE = 0.11;

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
  const [orderType, setOrderType] = useState("dine-in");

  const subtotal = items.reduce((sum, i) => sum + i.price * i.qty, 0);
  const tax = Math.round(subtotal * TAX_RATE);

  return {
    items,
    orderType,
    subtotal,
    tax,
    total: subtotal + tax,
    isEmpty: items.length === 0,
    setOrderType,
    addItem: (menu) => dispatch({ type: "add", menu }),
    decreaseItem: (id) => dispatch({ type: "decrease", id }),
    removeItem: (id) => dispatch({ type: "remove", id }),
    clear: () => dispatch({ type: "clear" }),
  };
}
