export function filterByCategory(menus, categoryId) {
  return menus.filter((menu) => menu.category_id === categoryId);
}

export function getSubcategories(menus) {
  const map = new Map();
  for (const menu of menus) {
    map.set(menu.subcategory_id, {
      id: menu.subcategory_id,
      name: menu.subcategory,
    });
  }
  return [...map.values()];
}

export function filterBySubcategory(menus, subcategoryId) {
  if (subcategoryId === "all") return menus;
  return menus.filter((menu) => menu.subcategory_id === subcategoryId);
}

export function filterByQuery(menus, query) {
  const keyword = query.trim().toLowerCase();
  if (keyword === "") return menus;
  return menus.filter((menu) => menu.name.toLowerCase().includes(keyword));
}
