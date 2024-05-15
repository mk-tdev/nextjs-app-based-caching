"use client";

import Link from "next/link";
import Image from "next/image";

import iconImg from "@/assets/icon.png";
import { usePathname } from "next/navigation";

function AppHeader() {
  const path = usePathname();

  return (
    <header className="flex flex-row shadow-lg bg-gray-800 text-white p-4 gap-3 items-center">
      <div>
        <Link href={"/"}>
          <Image src={iconImg} alt="about food" height={50} priority />
        </Link>
      </div>

      <div className="flex flex-row gap-3">
        <div>
          <Link
            href={"/messages"}
            className={
              path === "/messages" ? "bg-slate-50 text-gray-600  p-2" : "p-2"
            }
          >
            Messages
          </Link>
        </div>
        <div>
          <Link
            href={"/messages/new-message"}
            className={
              path === "/messages/new-message"
                ? "bg-slate-50 text-gray-600 p-2"
                : "p-2"
            }
          >
            New Message
          </Link>
        </div>
      </div>
    </header>
  );
}

export default AppHeader;
