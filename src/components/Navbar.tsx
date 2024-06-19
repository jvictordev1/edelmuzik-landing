export default function Navbar() {
  return (
    <section className="flex w-full items-center justify-between px-16 py-6">
      <img
        className="size-20"
        src="/images/edelmuzik-logo.png"
        alt="EDELMUZIK logo"
      />
      <div className="flex text-2xl gap-8 font-medium">
        <a href="#">ABOUT</a>
        <a href="#">SONGS</a>
        <a href="#">CONTACT</a>
      </div>
    </section>
  );
}
