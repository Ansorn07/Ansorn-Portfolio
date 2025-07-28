"use client";

import Image from "next/image";
import { SELF_DATA } from "@/constant/self";
import { nasalization } from "@/app/fonts";

export const Navbar = ({
  className,
  btnText,
  btnFnc,
}: {
  className: string;
  btnText: string;
  btnFnc: () => void;
}) => {
  return (
    <nav
      className={`${className} fixed z-50 w-full h-20 px-4 flex items-center justify-between 
        bg-black/20 backdrop-blur-sm text-white border-b border-white/10`}
    >
      {/* Left: Logo + Name */}
      <div className="flex items-center gap-3">
        <Image
          src="/public/images/logo.svg"
          alt="logo"
          width={40}
          height={40}
          loading="lazy"
          quality={100}
          style={{
            objectFit: "cover",
          }}
        />
        <h2
          className={`${nasalization.className} text-3xl text-white tracking-wide`}
        >
          {SELF_DATA.name}
        </h2>
      </div>

      {/* Right: Button */}
      <div className="flex items-center md:ml-auto">
        <button
          onClick={btnFnc}
          className="w-32 px-4 py-2 border-2 rounded-md border-gray-400 text-white
            hover:bg-white hover:text-black transition duration-200"
        >
          {btnText}
        </button>
      </div>
    </nav>
  );
};
