"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    target: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(target);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const heroImages = [
    "/images/Marketing-site-image-11.jpg",
    "/images/Marketing-site-image-12.jpg",
    "/images/Marketing-site-image-13.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <section className="relative bg-gradient-to-b from-gray-800 to-gray-900 min-h-screen sm:min-h-[calc(100vh-64px)] flex items-center justify-center px-4 sm:px-6 overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        {heroImages.map((image, index) => (
          <Image
            key={index}
            src={image || "/placeholder.svg"}
            alt={`Hero background ${index + 1}`}
            fill
            className={`object-cover transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Main content container */}
      <div className="relative max-w-3xl mx-auto text-center py-12 sm:py-16 md:py-20 z-10">
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
          Your Restaurant,
          <br />
          Masterfully Managed.
        </h2>

        <p className="text-gray-300 text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-2">
          We&apos;re building an all-in-one platform to streamline your
          restaurant and bar operations. Juggling reservations, orders, staff,
          and inventory is a constant challenge - with Ambrosia we bring harmony
          to the chaos, giving you back control and your guests a reason to
          return.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2">
          <a
            href="#waitlist"
            onClick={(e) => handleScroll(e, "waitlist")}
            className="w-full"
          >
            <Button className="bg-white text-gray-900 hover:bg-gray-100 px-6 sm:px-8 py-2 sm:py-6 text-sm sm:text-base font-semibold rounded-lg w-full sm:w-auto">
              Join the waitlist
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
