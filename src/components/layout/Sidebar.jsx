import CategoryButton from "../ui/CategoryButton";
import SidebarCloseToggle from "../ui/SidebarCloseToggle";

import chevronIcon from "/assets/icons/chevron-left-dot.svg";

function Sidebar({ categories, activeCategory, onSelectCategory }) {
  return (
    <aside
      id="sidebar"
      aria-label="Categories"
      className="relative z-0 flex min-w-0 flex-col items-center overflow-hidden p-3 bg-bark"
    >
      <SidebarCloseToggle srcIcon={chevronIcon} />
      <div
        id="category-list"
        className="flex min-h-0 w-full flex-1 flex-col items-center gap-8 justify-center"
      >
        {categories.map((category) => (
          <CategoryButton
            key={category.id}
            label={category.label}
            active={category.id === activeCategory}
            onClick={() => onSelectCategory(category.id)}
          />
        ))}
      </div>
    </aside>
  );
}

export default Sidebar;
