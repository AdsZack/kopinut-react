const API_URL = import.meta.env.VITE_API_URL;

async function request(path, options = {}) {
  const res = await fetch(`${API_URL}/auth${path}`, {
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    ...options,
  });
  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    const err = new Error(body.message ?? "Terjadi kesalahan");
    err.status = res.status;
    throw err;
  }
  return res.status === 204 ? null : res.json();
}

export const loginRequest = (username, password) =>
  request("/login", {
    method: "POST",
    body: JSON.stringify({ username, password }),
  });
export const logoutRequest = () => request("/logout", { method: "POST" });
export const fetchMe = () => request("/me");
