"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MenuLinks() {
  const pathname = usePathname();

  return (
    <>
      <li>
        <Link
          href={"/dashboard"}
          className={`hover:text-primary ${
            pathname === "/dashboard" ? "text-primary" : ""
          }`}
        >
          Dashboard
        </Link>
      </li>
    </>
  );
}
