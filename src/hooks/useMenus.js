import { useEffect, useState } from "react";
import { loadMenus } from "../data/menus";

export function useMenus() {
  const [menus, setMenus] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    loadMenus(controller.signal)
      .then(setMenus)
      .catch((err) => {
        if (err.name !== "AbortError") setError(err);
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoading(false);
      });
    return () => controller.abort();
  }, []);
  return { menus, loading, error };
}
