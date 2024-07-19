// import React, { useState } from "react";
"use client";
import { toast } from "react-hot-toast";
import { Tooltip } from "@mui/material";
import { Copy } from "lucide-react";
import { useState } from "react";
import GlobalApi from "./../../utils/GloabalApi";
import { useUser } from "@clerk/nextjs";
export default function FileShareForm({ file, onPasswordSave }) {
  const { user } = useUser();
  const [isPasswordEnabled, setIsPasswordEnabled] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const sendEmail = () => {
    const data = {
      emailToSend: email,
      userName: user?.fullName,
      fileName: file?.fileName,
      fileType: file.fileType,
      fileSize: (file.fileSize / 1024 / 1024).toFixed(2),
      fileShortUrl: file.shortUrl,
    };
    GlobalApi.SendEmail(data).then((res) => {
      console.log(data);
      console.log("reached");
      //If there is data in the response show toast
      if (res.data.data) {
        toast.success("Email sent successfully", {
          position: "top-right",
          autoClose: 2000,
        });
      } else {
        toast.error("Email not sent", {
          position: "top-right",
          autoClose: 2000,
        });
      }
      // console.log(res.data.data);
    });
  };
  const onCopyClick = () => {
    navigator.clipboard.writeText(file.shortUrl);
    toast.success("Copied to clipboard", {
      position: "top-right",
      autoClose: 3000,
    });
    console.log(user.id);
  };
  return (
    file && (
      <div className="flex flex-col gap-2">
        <div>
          <label htmlFor="" className="text-[15px] text-gray-500">
            Short Url
          </label>
          <div className="flex gap-5 p-2 border rounded-md items-center">
            <input
              type="text"
              className=" text-gray-500 hover:text-gray-400 outline-none bg-transparent flex gap-5 p-2 w-full cursor-pointer"
              value={file.shortUrl}
              disabled
            />
            <Tooltip title="Copy URL" placement="top-start">
              <Copy
                className="text-gray-500 hover:text-gray-700 "
                onClick={() => onCopyClick()}
              />
            </Tooltip>
          </div>
        </div>
        <div className="gap-3 flex mt-5">
          <input
            type="checkbox"
            onChange={(e) => {
              setIsPasswordEnabled(e.target.checked);
            }}
          />
          <label htmlFor="" className="text-[15px] text-gray-500">
            Enable Password?
          </label>
        </div>
        {isPasswordEnabled ? (
          <div className="flex gap-3 items-center">
            <div className="border rounded-md w-full p-2 mt-3">
              <input
                type="password"
                className="disabled:text-gray-900 bg-transparent outline-none text-gray-500 w-full"
                placeholder="Enter 6 digit password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <button
              className="mt-3 bg-primary p-2 text-gray-white rounded-md disabled:bg-gray-300 text-gray-black hover:bg-blue-900 "
              disabled={password?.length < 6}
              onClick={() => {
                console.log(password);
                onPasswordSave(password);
              }}
            >
              Save
            </button>
          </div>
        ) : null}
        <div className="border rounded mt-5 p-2">
          <label htmlFor="" className="text-[15px] text-gray-500">
            Send File to Email
          </label>
          <div className="border rounded-md w-full p-2 mt-3">
            <input
              type="email"
              className="disabled:text-gray-900 bg-transparent outline-none text-gray-500 w-full"
              placeholder="example@email.com"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <button
            className="bg-primary p-3 rounded-lg mt-3 w-full"
            onClick={() => sendEmail()}
          >
            Send Email
          </button>
        </div>
      </div>
    )
  );
}
