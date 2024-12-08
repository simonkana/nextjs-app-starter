import { signIn } from "@/auth";

export default function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("", { redirectTo: "/dashboard" });
      }}
    >
      <button type="submit" className="hover:text-primary">
        Sign In
      </button>
    </form>
  );
}
