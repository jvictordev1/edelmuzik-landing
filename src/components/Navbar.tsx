export default function Navbar() {
  return (
    <nav className="flex backdrop-blur-none fixed max-h-40 w-full items-center justify-between px-16 py-6">
      <a href="/">
        <img
          className="size-20"
          src="/images/edelmuzik-logo.png"
          alt="EDELMUZIK logo"
        />
      </a>
      <div className="flex text-2xl gap-8 font-bold">
        <a href="/about">ABOUT</a>
        <a href="/songs">SONGS</a>
        <a href="/contact">CONTACT</a>
      </div>
    </nav>
  );
}
