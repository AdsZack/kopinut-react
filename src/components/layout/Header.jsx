import ProfileMenu from "../ui/ProfileMenu";
import SearchBar from "../ui/SearchBar";
import SidebarOpenToggle from "../ui/SidebarOpenToggle";

import profileImage from "/assets/profile.jpeg";
import searchIcon from "/assets/icons/search.svg";
import lineIcon from "/assets/icons/line.svg";

function Header({
  categoryLabel,
  query,
  onQueryChange,
  isSidebarOpen,
  onOpenSidebar,
}) {
  return (
    <header className="flex items-center justify-between gap-4 px-4">
      <div className="flex min-w-0 flex-1 items-center gap-5">
        {!isSidebarOpen && (
          <SidebarOpenToggle srcIcon={lineIcon} onClick={onOpenSidebar} />
        )}
        <h1 className="w-28 shrink-0 text-2xl font-bold">{categoryLabel}</h1>
        <SearchBar
          srcIcon={searchIcon}
          value={query}
          onChange={onQueryChange}
        />
      </div>
      <ProfileMenu profileImg={profileImage} profileName="Cashier" />
    </header>
  );
}

export default Header;
