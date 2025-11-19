"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    target: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(target);
    element?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-serif font-bold text-gray-900">
              Ambrosia
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              onClick={(e) => handleScroll(e, "features")}
              className="text-gray-700 hover:text-gray-900 font-medium text-sm"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              onClick={(e) => handleScroll(e, "how-it-works")}
              className="text-gray-700 hover:text-gray-900 font-medium text-sm"
            >
              How it works
            </a>
            <a
              href="#benefits"
              onClick={(e) => handleScroll(e, "benefits")}
              className="text-gray-700 hover:text-gray-900 font-medium text-sm"
            >
              Benefits
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a href="#waitlist" onClick={(e) => handleScroll(e, "waitlist")}>
              <Button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md font-medium">
                Waitlist
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-4">
            <a
              href="#features"
              onClick={(e) => handleScroll(e, "features")}
              className="text-gray-700 hover:text-gray-900 font-medium"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              onClick={(e) => handleScroll(e, "how-it-works")}
              className="text-gray-700 hover:text-gray-900 font-medium"
            >
              How it works
            </a>
            <a
              href="#benefits"
              onClick={(e) => handleScroll(e, "benefits")}
              className="text-gray-700 hover:text-gray-900 font-medium"
            >
              Benefits
            </a>
            <a
              href="#more"
              className="text-gray-700 hover:text-gray-900 font-medium"
            >
              More
            </a>
            <a
              href="#waitlist"
              onClick={(e) => handleScroll(e, "waitlist")}
              className="w-full"
            >
              <Button className="w-full bg-red-500 hover:bg-red-600 text-white">
                Waitlist
              </Button>
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
