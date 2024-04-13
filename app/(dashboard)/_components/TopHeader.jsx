import { UserButton } from "@clerk/nextjs";
import { AlignLeft } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function TopHeader() {
  return (
    <div
      className="flex p-5  items-center justify-between
  md:justify-end bg-gray-800"
    >
      <AlignLeft className="md:hidden" />
      <Image
        src="/logo.svg"
        alt="logo"
        width={150}
        height={100}
        className="md:hidden"
      />
      <UserButton />
    </div>
  );
}
