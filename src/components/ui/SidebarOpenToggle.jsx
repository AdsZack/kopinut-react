function SidebarOpenToggle({ srcIcon, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Open categories"
      aria-expanded="false"
      aria-controls="sidebar"
      className="grid size-8 shrink-0 place-items-center rounded-md hover:bg-cream-100 focus-visible:outline-2 focus-visible:outline-caramel"
    >
      <img src={srcIcon} alt="" className="size-6" />
    </button>
  );
}
export default SidebarOpenToggle;
