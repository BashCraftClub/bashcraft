"use client";
import { useState, useEffect } from "react";
import useCurrentUser from "./use-current-user";

export default function useCurrentProfile() {
  const user = useCurrentUser();
  const [profileImage, setProfileImage] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProfile() {
      if (user?.id) {
        try {
          const response = await fetch("/api/profile");
          const data = await response.json();
          setProfileImage(data?.image || null);
        } catch (error) {
          console.error("Failed to fetch profile", error);
        }
      }
    }
    fetchProfile();
  }, [user?.id]);

  return profileImage;
}
