import Link from "next/link";

export default function Footer() {
  const currYear = new Date().getFullYear();
  return (
    <footer>
      <div className="px-4 sm:px-6 xl:px-0 max-w-screen-xl mx-auto flex items-center justify-center">
        <p>
          &copy; {currYear}{" "}
          <Link
            href={"https://simonkana.cz"}
            target="_blank"
            className="hover:underline"
          >
            simonkana.cz
          </Link>
        </p>
      </div>
    </footer>
  );
}
