import TabsSyntax from "./TabsSyntax";

export default function Navbar() {
  return (
    <>
      <nav className="flex backdrop-blur-sm fixed max-h-32 w-full justify-between items-center md:px-16 px-10 py-4">
        <TabsSyntax />
      </nav>
    </>
  );
}
