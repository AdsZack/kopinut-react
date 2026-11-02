import MenuSection from "../menu/MenuSection";
import Header from "./Header";

function Main({
  menus,
  loading,
  error,
  categoryLabel,
  subcategories,
  activeSubcategory,
  onSelectSubcategory,
  query,
  onQueryChange,
  isSidebarOpen,
  onOpenSidebar,
  cart,
  user,
  onLogout,
}) {
  return (
    <>
      <Header
        categoryLabel={categoryLabel}
        query={query}
        onQueryChange={onQueryChange}
        isSidebarOpen={isSidebarOpen}
        onOpenSidebar={onOpenSidebar}
        user={user}
        onLogout={onLogout}
      />
      <MenuSection
        menus={menus}
        loading={loading}
        error={error}
        subcategories={subcategories}
        activeSubcategory={activeSubcategory}
        onSelectSubcategory={onSelectSubcategory}
        cart={cart}
      />
    </>
  );
}
export default Main;
