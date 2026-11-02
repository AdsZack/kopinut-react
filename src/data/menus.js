const API_URL = import.meta.env.VITE_API_URL;

export async function loadMenus(signal) {
  const res = await fetch(`${API_URL}/menus`, {
    signal,
    credentials: "include",
  });
  if (!res.ok) throw new Error("Failed load menu");
  return res.json();
}
