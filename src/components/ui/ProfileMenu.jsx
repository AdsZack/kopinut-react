function ProfileMenu({ profileImg, profileName }) {
  return (
    <div className="relative shrink-0">
      <div className="flex gap-3 items-center">
        <img
          src={profileImg}
          alt="profile"
          className="size-9 rounded-full border border-cream object-cover"
        />
        <h2 id="profile-name" className="text-sm font-medium">
          {profileName}
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
  );
}
export default ProfileMenu;
