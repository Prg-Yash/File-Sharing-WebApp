"use client";
import { useState } from "react";
import toast from "react-hot-toast";
import FilePreview from "./FilePreview";
import ProgressBar from "./ProgressBar";

export default function UploadForm({ uploadBtnFile, progress }) {
  const [file, setFile] = useState(null);

  const onFileSelect = (files) => {
    if (files[0].size > 10000000) {
      toast.error("File size is too large");
      return;
    }
    setFile(files[0]); // Update file state here
  };

  return (
    <div className="text-center">
      <div className="flex items-center justify-center w-full">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-800 hover:bg-bray-800 bg-gray-800 hover:bg-gray-800 border-bg-gradient-to-r hover:border-gray-500 hover:bg-gray-00"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              className="w-12 h-12 mb-4 text-blue-500 text-blue-700"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="mb-2  text-lg md:text-2xl  text-gray-500 text-gray-400">
              <span className="font-semibold text-blue-700">
                Click to upload
              </span>{" "}
              or drag and drop
            </p>
            <p className="text-xs text-gray-500 text-gray-400">
              SVG, PNG, JPG or GIF (MAX SIZE:10MB)
            </p>
          </div>
          <input
            id="dropzone-file"
            type="file"
            className="hidden"
            onChange={(e) => {
              onFileSelect(e.target.files);
            }}
          />
        </label>
      </div>
      {file ? (
        <FilePreview file={file} removeFile={() => setFile(null)} />
      ) : null}

      {progress > 0 ? (
        <ProgressBar progress={progress} />
      ) : (
        <button
          disabled={!file}
          className="p-2 bg-primary text-white w-[30%] rounded-full mt-5 disabled:bg-gray-400"
          onClick={() => uploadBtnFile(file)}
        >
          Upload
        </button>
      )}
    </div>
  );
}
