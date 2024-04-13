"use client";
import { Download } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { toast } from "react-hot-toast";

export default function FileItem({ file }) {
  const [password, setPassword] = useState("");

  const checkPassword = (password, filePassword) => {
    if (password === filePassword) {
      toast.success("Password matched, downloading file", {
        position: "top-right",
        autoClose: 3000,
      });
      window.open(file.fileUrl);
    } else {
      toast.error("Incorrect password", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  return (
    file && (
      <div>
        <div className="p-5 rounded-md bg-gray-700 flex flex-col items-center">
          <div className="text-center flex-col gap-3 items-center flex">
            <h2 className="text-[20px] md:text-[30px] bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text font-extrabold text-transparent text-center m-5">
              {file.userName} shared a file with you
            </h2>
            <h2 className="text-[15px] text-gray-400 ">
              Find file details below
            </h2>
            <Image
              src="/download-file.gif"
              width={150}
              height={150}
              className="w-[150px] h-[150px] p-5"
            />
            <h2>
              {file.fileName} ⚡{file.fileType}⚡
              {(file.fileSize / 1024 / 1024).toFixed(2)} MB
            </h2>
          </div>
          {file.password.length > 3 ? (
            <input
              type="password"
              className="p-2 border rounded-md text-[14px] text-gray-600 mt-5 text-center outline-blue-400"
              placeholder="Enter password to access"
              onChange={(e) => setPassword(e.target.value)}
            />
          ) : null}
          <button
            href=""
            disabled={file.password.length > 3 && password.length < 3}
            className="flex gap-2 p-2 bg-primary text-white rounded-full w-full items-center hover:bg-blue-950 text-[14px] mt-5 text-center justify-center disabled:bg-gray-300"
            onClick={() => checkPassword(password, file.password)} // Wrap checkPassword in an arrow function
          >
            <Download className="h-4 w-4" />
            Download
          </button>
          <h2 className="text-gray-400 text-[12px]">*Terms and Conditions*</h2>
        </div>
      </div>
    ) // Close the return statement"
  );
}
