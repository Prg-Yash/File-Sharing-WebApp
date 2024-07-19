// import React from "react";
"use client";
import toast from "react-hot-toast";

import FileInfo from "../../../_components/FileInfo";
import FileShareForm from "../../../_components/FileShareForm";
import { db } from "../../../../firebase/config";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { ArrowLeftSquare } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import bcrypt from "bcryptjs";

function page({ params }) {
  const [file, setFile] = useState(null);
  useEffect(() => {
    console.log(params.fileId);
    params?.fileId && getInfo(params.fileId);
  }, []);
  const getInfo = async (fileId) => {
    const docRef = doc(db, "uploadedFile", fileId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setFile(docSnap.data());
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  };
  const onPasswordSave = async (password) => {
    //hash password
    const hash = await bcrypt.hash(password, 10);

    await setDoc(doc(db, "uploadedFile", file.id), {
      ...file,
      password: hash,
    });
    toast.success("Password saved successfully", {
      position: "top-right",
      autoClose: 3000,
    });
  };
  return (
    <div className="py-10 px-20 bg-gray-900 h-screen">
      <Link href="/upload" className="flex gap-3 text-gray-400">
        <ArrowLeftSquare />
        Go to Upload
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-5">
        <FileInfo file={file} />
        <FileShareForm
          file={file}
          onPasswordSave={(password) => onPasswordSave(password)}
        />
      </div>
    </div>
  );
}

export default page;
