"use client";
import { File, Shield, Upload } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function SideNav() {
  const [activeIndex, setActiveIndex] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const menu = [
    {
      id: 1,
      name: "Upload",
      icon: Upload,
      path: "/upload",
    },
    {
      id: 2,
      name: "Files",
      icon: File,
      path: "/files",
    },
  ];
  useEffect(() => {
    if (!pathname) return;

    setActiveIndex(pathname.includes("/upload") ? 0 : 1);
  }, [pathname]);

  const handleMenuItemClick = (index, path) => {
    setActiveIndex(index);
    router.push(path);
  };

  return (
    <div className=" shadow-sm   bg-gray-800 h-screen">
      <div className="p-5 pl-12">
        <a href="/">
          <Image src="/logo.png" alt="logo" width={150} height={100} />
        </a>
      </div>
      <div className=" flex flex-col float-left w-full ">
        {menu.map((item, index) => (
          <button
            key={item.id}
            className={`flex gap-2 p-4 my-0.5 mt-1 px-6 w-full text-gray-400 
              ${
                activeIndex === index
                  ? "bg-blue-300 text-primary rounded-lg"
                  : "hover:bg-gray-700 hover:rounded-lg"
              }
            `}
            onClick={() => handleMenuItemClick(index, item.path)}
          >
            <item.icon />
            <h2>{item.name}</h2>
          </button>
        ))}
      </div>
    </div>
  );
}
