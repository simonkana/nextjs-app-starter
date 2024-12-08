import SignOut from "./auth/sign-out";
import SignIn from "./auth/sign-in";
import { auth } from "@/auth";
import MenuLinks from "./menu-links";

export default async function NavLinks() {
  const session = await auth();

  return (
    <ul className="flex gap-6">
      {!session && (
        <li>
          <SignIn />
        </li>
      )}

      {session && (
        <>
          <MenuLinks />
          <li>
            <SignOut />
          </li>
        </>
      )}
    </ul>
  );
}
