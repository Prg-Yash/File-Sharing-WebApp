"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function FileInfo({ file }) {
  const [fileType, setFileType] = useState();
  useEffect(() => {
    file && setFileType(file?.fileType.split("/")[0]);
    console.log(fileType);
  }, [file]);
  return (
    file && (
      <div className="text-center border flex  justify-center m-4 flex-col items-center p-2 rounded-lg border-blue-200">
        <Image
          src={fileType === "image" ? file?.fileUrl : "/file.svg"}
          alt="file"
          width={200}
          height={200}
          className="h-[200px] rounded-md object-contain"
        />
        <div className="">
          <h2 className="text-center text-1xl font-semibold text-gray-400">
            {file?.fileName}
          </h2>
          <h2 className="text-center text-gray-400">
            {file?.fileType} / {(file?.fileSize / 1024 / 1024).toFixed(2)} MB
          </h2>
        </div>
      </div>
    )
  );
}
