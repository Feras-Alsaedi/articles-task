"use client";
import Link from "next/link";
import React from "react";
import Button from "./Button";
import { usePathname, useRouter } from "next/navigation";
import ButtonTheme from "./ButtonTheme";

const Navbar = () => {
  const pathname = usePathname();
  const isLoginRoute = pathname.startsWith("/login");
  const { push } = useRouter();

  return (
    <nav
      className={` w-full z-50 h-[10vh] shadow-md bg-white dark:bg-gray-800 py-2 flex justify-between items-center px-2 `}
    >
      <Link href={"/"} className="flex justify-center gap-2 items-center ">
        <div className="flex gap-0 items-center">
          <div className="flex flex-row gap-2">
            <h2 className="font-bold text-[#05A2E9]">Task</h2>
            <p className="font-semibold text-[#01649D]">Articles Website</p>
          </div>
        </div>
      </Link>

      <div className="flex items-center gap-2">
        <ButtonTheme />
        {!isLoginRoute && (
          <Button
            onClick={() => {
              push("/add-post");
            }}
            text="Add Article"
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
