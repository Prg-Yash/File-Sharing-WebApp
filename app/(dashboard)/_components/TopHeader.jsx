"use client";
import { UserButton } from "@clerk/nextjs";
import { AlignLeft } from "lucide-react";
import Image from "next/image";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../../@/components/ui/sheet";
import SideNav from "../../(dashboard)/_components/SideNav";
import Link from "next/link";

export default function TopHeader() {
  return (
    <div className="flex p-5 items-center justify-between md:justify-end bg-gray-800">
      <Sheet className="flex items-center">
        <SheetTrigger>
          <AlignLeft className="text-white md:hidden " />
        </SheetTrigger>
        <SheetContent className="flex flex-row-reverse ">
          {/* {console.log("clicked")} */}
          <SheetHeader>
            {/* <SheetTitle>Are you absolutely sure?</SheetTitle> */}
            <SheetDescription className="w-[300px] ">
              <SideNav />
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
      <Link href="/">
        <Image
          src="/logo.svg"
          alt="logo"
          width={150}
          height={100}
          className="md:hidden"
        />
      </Link>
      <UserButton />
    </div>
  );
}
