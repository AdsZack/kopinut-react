function Header() {
  return (
    <header className="flex gap-4 justify-between px-4 items-center">
      <div className="flex min-w-0 flex-1 items-center gap-5">
        <button
          id="sidebar-open"
          type="button"
          className="grid size-8 shrink-0 place-items-center rounded-md hover:bg-cream-100 focus-visible:outline-2 focus-visible:outline-caramel"
          aria-label="Open categories"
          aria-controls="sidebar"
          aria-expanded="false"
        >
          <img src="src/assets/icons/line.svg" className="size-6" alt="" />
        </button>
        <h1 id="category-title" className="w-28 shrink-0 text-2xl font-bold">
          Coffee
        </h1>
        <div className="flex h-10 w-full max-w-md items-center gap-2 rounded-lg border border-cream bg-white px-3 transition focus-within:border-caramel focus-within:ring-2 focus-within:ring-caramel/20">
          <img
            src="src/assets/icons/search.svg"
            alt="search"
            className="size-5 shrink-0"
          />
          <input
            type="search"
            id="search-input"
            className="min-w-0 flex-1 bg-transparent text-sm placeholder:text-bark/50 focus:outline-none"
            placeholder="Search for coffee, meal, etc"
          />
        </div>
      </div>
      <div className="relative shrink-0">
        <div className="flex gap-3 items-center">
          <img
            src="src/assets/images/profile.jpeg"
            alt="profile"
            className="size-9 rounded-full border border-cream object-cover"
          />
          <h2 id="profile-name" className="text-sm font-medium">
            Cashier
          </h2>
          <button
            id="profile-toggle"
            type="button"
            aria-haspopup="true"
            aria-expanded="false"
            aria-controls="profile-menu"
            className="grid size-8 place-items-center rounded-md hover:bg-cream-100 focus-visible:outline-2 focus-visible:outline-caramel"
          >
            <img
              src="src/assets/icons/dropdown.svg"
              alt="dropdown"
              className="size-6"
            />
          </button>
        </div>
        <div
          id="profile-menu"
          className="absolute top-full right-0 z-20 mt-2 hidden w-40 rounded-lg border border-cream bg-white p-1 shadow-lg"
        >
          <button
            id="auth-action"
            type="button"
            className="w-full rounded-md px-3 py-2 text-left text-sm hover:bg-cream-100 focus-visible:outline-2 focus-visible:outline-caramel"
          ></button>
        </div>
      </div>
    </header>
  );
}

export default Header;
