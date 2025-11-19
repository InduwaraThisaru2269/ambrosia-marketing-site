"use client";

import { UtensilsCrossed, ChefHat, Wine, Zap } from "lucide-react";

export default function CoreFeatures() {
  const features = [
    {
      icon: UtensilsCrossed,
      title: "Seamless reservations and seating",
      description:
        "Customers book online around the clock. No double-bookings, No confusion.",
      image: "/images/Marketing-site-image-06.jpg",
    },
    {
      icon: ChefHat,
      title: "Smart order and kitchen management",
      description:
        "QR code ordering flows straight to the kitchen. Speed and accuracy, every time.",
      image: "/images/Marketing-site-image-07.jpg",
    },
    {
      icon: Wine,
      title: "Integrated bar and liquor management",
      description:
        "Track every bottle and pour. Pricing handles the stay-inside margins.",
      image: "/images/Marketing-site-image-05.jpg",
    },
  ];

  return (
    <section
      className="w-full bg-white sm:py-8 md:py-14 relative"
      id="features"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex justify-center text-slate-600 mb-3">
            <Zap className="w-6 h-6 text-slate-600" />
          </div>
          <p className="text-xs sm:text-sm mb-2 text-slate-600 uppercase tracking-wide">
            Core
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            What we built
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Three tools that matter most
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="relative p-6 sm:p-8 rounded-lg min-h-[300px] sm:min-h-[350px] md:min-h-[400px] flex flex-col justify-end overflow-hidden group"
                style={{
                  backgroundImage: `url(${feature.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* Overlay for readability */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />

                <div className="relative text-white">
                  <Icon className="w-6 sm:w-8 h-6 sm:h-8 mb-4 text-gray-300" />
                  <h3 className="font-serif text-lg sm:text-xl font-bold mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-200 text-xs sm:text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
