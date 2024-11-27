"use server";
import { auth } from "@/auth"; // Your authentication utility
import { db } from "@/lib/db"; // Your database connection

export async function updateUserProfileImage(imageUrl: string) {
  // Get the current authenticated user
  const session = await auth();

  if (!session || !session.user) {
    throw new Error("User not authenticated");
  }

  // Update user's profile image in the database
  await db.user.update({
    where: { id: session.user.id },
    data: {
      image: imageUrl,
    },
  });

  return { success: true };
}
