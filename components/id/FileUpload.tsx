"use client";
import { UploadDropzone } from "@/utils/uploadthing";
import { useState } from "react";
import { updateUserProfileImage } from "@/actions/profile";

export default function FileUpload() {
  const [isUploading, setIsUploading] = useState(false);

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <UploadDropzone
        className=" mt-10 ut-button:bg-[#40C057] ut-allowed-content:text-white ut-upload-icon:text-white ut-label:text-[#40C057] ut-button:ut-readying:bg-[#2f9e48]"
        endpoint="imageUploader"
        onClientUploadComplete={async (res) => {
          if (res && res.length > 0) {
            const imageUrl = res[0].url;

            try {
              setIsUploading(true);
              await updateUserProfileImage(imageUrl);
              alert("ID Image Uploaded successfully!");
            } catch (error) {
              console.error("Failed To Upload ID Image", error);
              alert("Failed to update profile image");
            } finally {
              setIsUploading(false);
            }
          }
        }}
        onUploadError={(error: Error) => {
          alert(`ERROR! ${error.message}`);
        }}
      />
      {isUploading && (
        <div className="mt-4 text-gray-600">Uploading ID Image...</div>
      )}
    </main>
  );
}
