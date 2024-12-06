import { auth } from "@/auth";
import { db } from "@/lib/db";

export async function GET() {
  const session = await auth();
  const user = session?.user;

  if (!user) {
    return Response.json({ error: "Not authenticated" }, { status: 401 });
  }

  const profile = await db.user.findFirst({
    where: { id: user.id },
    select: { image: true },
  });

  return Response.json(profile);
}
