function SidebarOpenToggle({ srcIcon }) {
  return (
    <button
      id="sidebar-open"
      type="button"
      className="grid size-8 shrink-0 place-items-center rounded-md hover:bg-cream-100 focus-visible:outline-2 focus-visible:outline-caramel"
      aria-label="Open categories"
      aria-controls="sidebar"
      aria-expanded="false"
    >
      <img src={srcIcon} className="size-6" />
    </button>
  );
}
export default SidebarOpenToggle;
