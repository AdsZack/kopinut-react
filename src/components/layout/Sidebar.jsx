import CategoryButton from "../ui/CategoryButton";

function Sidebar() {
  return (
    <aside
      id="sidebar"
      aria-label="Categories"
      className="relative z-0 flex min-w-0 flex-col items-center overflow-hidden p-3 bg-bark"
    >
      <button
        id="sidebar-close"
        type="button"
        className="mt-2.5 grid size-8 shrink-0 place-items-center rounded-md hover:bg-cream/10 focus-visible:outline-2 focus-visible:outline-cream"
        aria-label="Close categories"
        aria-expanded="true"
        aria-controls="sidebar"
      >
        <img
          src="src/assets/icons/chevron-left-dot.svg"
          className="size-6"
          alt=""
        />
      </button>
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
