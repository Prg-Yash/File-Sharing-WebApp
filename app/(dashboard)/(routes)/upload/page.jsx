// Add these imports at the top of your file
"use client";
import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation"; // Changed from "next/navigation"
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app, db } from "../../../firebase/config";
import toast from "react-hot-toast";
import { setDoc, doc } from "firebase/firestore";
import { generateRandomString } from "../../../utils/GenerateRandomString";
import UploadForm from "./_components/UploadForm";

export default function page() {
  const { user } = useUser();
  const [progress, setProgress] = useState(0);
  const [fileDocId, setFileDocId] = useState(null);
  const router = useRouter();
  const storage = getStorage(app);
  const [loadingId, setLoadingId] = useState(null);

  const uploadFile = async (file) => {
    const storageRef = ref(storage, "files-upload/" + file.name);
    const uploadTask = uploadBytesResumable(storageRef, file, file.type);

    uploadTask.on("state_changed", (snapshot) => {
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      setProgress(progress);
      console.log("Upload is " + progress + "% done");

      if (progress === 100) {
        toast.success("File Uploaded successfully");
        setTimeout(() => {
          getDownloadURL(uploadTask.snapshot.ref)
            .then((downloadURL) => {
              setLoadingId(
                toast.loading("Redirecting to file preview", {
                  position: "bottom-right",
                })
              );
              console.log("File available at", downloadURL);
              saveInfo(file, downloadURL);
            })
            .catch((error) => {
              console.error("Error getting download URL:", error);
              // Handle error
            });
        }, 1000);
      }
    });
  };

  const saveInfo = async (file, fileUrl) => {
    const docId = generateRandomString().toString();
    await setDoc(doc(db, "uploadedFile", docId), {
      fileName: file?.name,
      fileSize: file?.size,
      fileType: file?.type,
      fileUrl: fileUrl,
      userEmail: user?.primaryEmailAddress.emailAddress,
      userName: user?.fullName,
      password: "",
      id: docId,
      shortUrl: "https://sharedom.vercel.app" + "/f/" + docId,
    });
    setFileDocId(docId);
    console.log(docId);

    router.push("/file-preview/" + docId);
    toast.dismiss(loadingId);
  };

  return (
    <div className=" bg-gray-900 h-screen p-5 px-8 md:px-28">
      <h2
        className=" text-[20px] 
        md:text-[40px] bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text font-extrabold text-transparent  text-center m-5"
      >
        Start Uploading and share it
      </h2>
      <UploadForm
        uploadBtnFile={(file) => uploadFile(file)}
        progress={progress}
      />
    </div>
  );
}
