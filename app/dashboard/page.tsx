import { auth } from "@/auth";

export default async function Dashboard() {
  const session = await auth();

  if (!session) return <div>Not authenticated</div>;

  return (
    <div>
      <p>
        You are signed in as{" "}
        <span className="text-primary">{session?.user?.email}</span>
      </p>
    </div>
  );
}
