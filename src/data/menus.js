const API_URL = "http://localhost:3000/api";

export let menus = [];

export async function loadMenus() {
  const res = await fetch(`${API_URL}/products`);
  if (!res.ok) throw new Error("Failed load menu");
  menus = await res.json();
}
