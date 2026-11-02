import { useState } from "react";
import Main from "./components/layout/Main";
import Sidebar from "./components/layout/Sidebar";
import { categories } from "./data/categories";
import { useMenus } from "./hooks/useMenus";
import {
  filterByCategory,
  filterByQuery,
  filterBySubcategory,
  getSubcategories,
} from "./utils/menuFilters";

function App() {
  const { menus, loading, error } = useMenus();

  const [activeCategory, setActiveCategory] = useState(1);
  const [activeSubcategory, setActiveSubcategory] = useState("all");
  const [query, setQuery] = useState("");

  function handleSelectCategory(id) {
    setActiveCategory(id);
    setActiveSubcategory("all");
  }

  const categoryMenus = filterByCategory(menus, activeCategory);
  const subcategories = getSubcategories(categoryMenus);
  const subcategoryMenus = filterBySubcategory(
    categoryMenus,
    activeSubcategory,
  );
  const visibleMenus = filterByQuery(subcategoryMenus, query);

  const activeCategoryData = categories.find((c) => c.id === activeCategory);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  return (
    <div
      className={`grid h-screen overflow-hidden transition-[grid-template-columns] bg-bark duration-200 ${
        isSidebarOpen
          ? "grid-cols-[50px_minmax(0,1fr)]"
          : "grid-cols-[0px_minmax(0,1fr)]"
      }`}
    >
      <Sidebar
        categories={categories}
        activeCategory={activeCategory}
        onSelectCategory={handleSelectCategory}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
      <div className="grid min-h-0 grid-rows-[64px_minmax(0,1fr)] rounded-l-4xl bg-cream-50 pt-2">
        <Main
          menus={visibleMenus}
          loading={loading}
          error={error}
          categoryLabel={activeCategoryData?.label}
          subcategories={subcategories}
          activeSubcategory={activeSubcategory}
          onSelectSubcategory={setActiveSubcategory}
          query={query}
          onQueryChange={setQuery}
          isSidebarOpen={isSidebarOpen}
          onOpenSidebar={() => setIsSidebarOpen(true)}
        />
      </div>
    </div>
  );
}

export default App;
