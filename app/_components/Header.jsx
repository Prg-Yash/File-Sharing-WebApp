// import React from "react";
"use client";
import { Menu } from "lucide-react";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../@/components/ui/sheet";
import SideNav from "../(dashboard)/_components/SideNav";

export default function Header() {
  // const openMenu = () => {
  //   console.log("open menu");
  //   return (
  //     <Sheet>
  //       <SheetTrigger>
  //         <Menu className="text-gray-400 cursor-pointer" />
  //       </SheetTrigger>
  //       <SheetContent side="right" className="w-[400px] sm:w-[540px] ">
  //         <SheetHeader>
  //           {/* <SheetTitle className="text-white flex justify-center ">
  //             <Image src="/logo.svg" alt="logo" width={200} height={50} />
  //           </SheetTitle> */}
  //           <SideNav />
  //         </SheetHeader>
  //       </SheetContent>
  //     </Sheet>
  //   );
  // };
  return (
    <div>
      <div>
        <header className=" bg-gray-800 ">
          <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
            <Image
              src="/logo.svg"
              alt="logo"
              width={150}
              height={50}
              className="my-2"
            />

            <div className="flex flex-1 items-center justify-end md:justify-between">
              <nav aria-label="Global" className="hidden md:block">
                <ul className="flex items-center gap-6 text-sm">
                  <li>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                      href="/"
                    >
                      Home
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                      href="/upload"
                    >
                      Upload
                    </a>
                  </li>
                </ul>
              </nav>

              <div className="flex items-center gap-4">
                <div className="sm:flex sm:gap-4">
                  <a
                    className="block rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white transition hover hover:bg-blue-800"
                    href="/upload"
                  >
                    Get Started
                  </a>
                </div>
                {/* <div className="md:hidden"> */}
                {/* <Menu className="cursor-pointer text-gray-500 dark:text-white" /> */}
                {/* {openMenu()} */}
                {/* </div> */}
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}
