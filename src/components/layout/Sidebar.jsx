import CategoryButton from "../ui/CategoryButton";
import SidebarCloseToggle from "../ui/SidebarCloseToggle";

import chevronIcon from "/assets/icons/chevron-left-dot.svg";

function Sidebar() {
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
        <CategoryButton label="Dessert" />
        <CategoryButton label="Meal" />
        <CategoryButton label="Snack" />
        <CategoryButton label="Tea" />
        <CategoryButton label="Juice" />
        <CategoryButton label="Coffee" />
      </div>
    </aside>
  );
}

export default Sidebar;
