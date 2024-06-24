import { Outlet } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="flex backdrop-blur-sm fixed max-h-32 w-full items-center justify-between px-16 py-4">
        <a href="/">
          <img
            className="size-16 hover:size-20 transition-all duration-500"
            src="/images/edelmuzik-logo.png"
            alt="EDELMUZIK logo"
          />
        </a>
        <div className="flex text-xl gap-8 font-bold">
          <a
            className="hover:px-2 hover:text-red-600 transition-all duration-300"
            href="/about"
          >
            ABOUT
          </a>
          <a
            className="hover:px-2 hover:text-red-600 transition-all duration-300"
            href="/songs"
          >
            SONGS
          </a>
          <a
            className="hover:px-2 hover:text-red-600 transition-all duration-300"
            href="/contact"
          >
            CONTACT
          </a>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
