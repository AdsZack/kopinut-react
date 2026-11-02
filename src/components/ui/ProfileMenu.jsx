import { useEffect, useRef, useState } from "react";

function ProfileMenu({ profileImg, profileName, onLogout }) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    function handlePointerDown(event) {
      if (!containerRef.current.contains(event.target)) setIsOpen(false);
    }
    function handleKeyDown(event) {
      if (event.key === "Escape") setIsOpen(false);
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div ref={containerRef} className="relative shrink-0">
      <div className="flex items-center gap-3">
        <img
          src={profileImg}
          alt=""
          className="size-9 rounded-full border border-cream object-cover"
        />
        <h2 className="text-sm font-medium">{profileName}</h2>
        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          aria-label="Profile menu"
          aria-haspopup="true"
          aria-expanded={isOpen}
          aria-controls="profile-menu"
          className="grid size-8 place-items-center rounded-md hover:bg-cream-100 focus-visible:outline-2 focus-visible:outline-caramel"
        >
          <img src="/assets/icons/dropdown.svg" alt="" className="size-6" />
        </button>
      </div>

      {isOpen && (
        <div
          id="profile-menu"
          className="absolute top-full right-0 z-20 mt-2 w-40 rounded-lg border border-cream bg-white p-1 shadow-lg"
        >
          <button
            type="button"
            onClick={onLogout}
            className="w-full rounded-md px-3 py-2 text-left text-sm hover:bg-cream-100 focus-visible:outline-2 focus-visible:outline-caramel"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
export default ProfileMenu;
