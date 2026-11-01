import ProfileMenu from "../ui/ProfileMenu";
import SearchBar from "../ui/SearchBar";
import SidebarOpenToggle from "../ui/SidebarOpenToggle";

import profileImage from "/src/assets/images/profile.jpeg";
import searchIcon from "/src/assets/icons/search.svg";
import lineIcon from "/src/assets/icons/line.svg";

function Header() {
  return (
    <header className="flex gap-4 justify-between px-4 items-center">
      <div className="flex min-w-0 flex-1 items-center gap-5">
        <SidebarOpenToggle srcIcon={lineIcon} />
        <h1 id="category-title" className="w-28 shrink-0 text-2xl font-bold">
          Coffee
        </h1>
        <SearchBar srcIcon={searchIcon} />
      </div>
      <ProfileMenu profileImg={profileImage} profileName="Cashier" />
    </header>
  );
}

export default Header;
