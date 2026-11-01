function SidebarCloseToggle({ srcIcon }) {
  return (
    <button
      id="sidebar-close"
      type="button"
      className="mt-2.5 grid size-8 shrink-0 place-items-center rounded-md hover:bg-cream/10 focus-visible:outline-2 focus-visible:outline-cream"
      aria-label="Close categories"
      aria-expanded="true"
      aria-controls="sidebar"
    >
      <img src={srcIcon} class="size-6" alt="" />
    </button>
  );
}
export default SidebarCloseToggle;
