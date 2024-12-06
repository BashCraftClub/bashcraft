"use server";
import { auth } from "@/auth";
import { db } from "@/lib/db";

export async function updateUserProfileImage(imageUrl: string) {
  const session = await auth();

  if (!session || !session.user) {
    throw new Error("User not authenticated");
  }

  await db.user.update({
    where: { id: session.user.id },
    data: {
      image: imageUrl,
    },
  });

  return { success: true };
}
