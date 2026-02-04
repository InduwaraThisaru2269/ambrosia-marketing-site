"use client";

import Logo from "@/public/images/AmbrosiaLogoClearBG.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-yellow-200 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center flex flex-col items-center gap-3">
        <Image src={Logo} alt="Ambrosia Logo" width={150} height={40} />
        <p className="text-xs sm:text-sm text-gray-700">
          © 2025 Ambrosia Team. Made with{" "}
          <span className="text-red-500">❤️</span> in Sri Lanka.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
