"use client";
import { useEffect, useState } from "react";
import { db } from "../../firebase/config";
import { doc, getDoc } from "firebase/firestore";
import FileItem from "./_components/FileItem";
export default function page({ params }) {
  const [file, setFile] = useState(null);
  useEffect(() => {
    console.log(params.fileId);
    params?.fileId && getInfo(params.fileId);
  }, []);
  const getInfo = async () => {
    const docRef = doc(db, "uploadedFile", params?.fileId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setFile(docSnap.data());
    } else {
      console.log("No such document!");
    }
  };
  return (
    <div className="bg-gray-900 w-full flex justify-center h-screen items-center flex-col gap-4">
      <FileItem file={file} />
    </div>
  );
}
