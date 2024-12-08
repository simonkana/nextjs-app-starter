import Link from "next/link";
import NavLinks from "./nav-links";

export default function Navbar() {
  return (
    <header className="bg-gray-100 dark:bg-neutral-800/50">
      <nav className="py-4 px-4 sm:px-6 xl:px-0 max-w-screen-xl mx-auto flex justify-between">
        <Link href={"/"} className="text-lg font-semibold">
          |_APPSTARTER|
        </Link>
        <NavLinks />
      </nav>
    </header>
  );
}
