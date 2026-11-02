const API_URL = import.meta.env.VITE_API_URL;

export async function submitOrder({ orderType, items }) {
  const res = await fetch(`${API_URL}/orders`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      orderType,
      items: items.map((i) => ({ menuId: i.id, qty: i.qty })),
    }),
    credentials: "include",
  });
  if (!res.ok) throw new Error("Gagal menyimpan pesanan");
  return res.json();
}
