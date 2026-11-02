import { useEffect, useState } from "react";
import { fetchMe, loginRequest, logoutRequest } from "../data/auth";

export function useAuth() {
  const [user, setUser] = useState(null);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    fetchMe()
      .then(setUser)
      .catch(() => setUser(null))
      .finally(() => setChecking(false));
  }, []);

  async function login(username, password) {
    setUser(await loginRequest(username, password));
  }

  async function logout() {
    await logoutRequest();
    setUser(null);
  }

  return { user, checking, login, logout };
}
