"use client";

import { DollarSign, Zap, Infinity, Eye, TrendingUp } from "lucide-react";
import Image from "next/image";

const ValueSection = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Increase revenue",
      description:
        "Upfront payments cut no-shows. Walk-in captures growth. Your bottom line rises.",
    },
    {
      icon: Eye,
      title: "Enhance experience",
      description:
        "Faster service. Easy ordering. Personal attention. Guests notice and return.",
    },
    {
      icon: Infinity,
      title: "Boost efficiency",
      description:
        "Workflows automate from kitchen to bar. Errors drop. Time opens up.",
    },
    {
      icon: Zap,
      title: "Gain control",
      description:
        "Real-time visibility into every corner of your operation. No surprises.",
    },
  ];

  return (
    <section
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white"
      id="benefits"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex justify-center mb-3">
            <TrendingUp className="w-6 sm:w-7 h-6 sm:h-7 text-gray-700" />
          </div>
          <p className="text-xs sm:text-sm font-medium text-gray-600 mb-2">
            Value
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-3 sm:mb-4 text-balance">
            Why this matters to you
          </h2>
          <p className="text-gray-600 text-base sm:text-lg px-2">
            These aren&apos;t promises. They&apos;re outcomes. Real money. Real
            time. Real control.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-6 lg:gap-8 px-4 sm:px-0">
          {/* Left Benefits Column */}
          <div className="w-full md:w-auto md:max-w-xs space-y-6 sm:space-y-8">
            {benefits.slice(0, 2).map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="flex gap-3 sm:gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <Icon className="w-5 sm:w-6 h-5 sm:h-6 text-gray-700" />
                  </div>
                  <div>
                    <h3 className="font-serif text-base sm:text-lg mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Center Image */}
          <div className="flex-shrink-0 w-full sm:w-56 md:w-72 lg:w-80">
            <div className="w-full aspect-square bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="/images/marketing-site-image-01.jpg"
                alt="Restaurant worker"
                className="w-full h-full object-cover"
                width={480}
                height={480}
              />
            </div>
          </div>

          {/* Right Benefits Column */}
          <div className="w-full md:w-auto md:max-w-xs space-y-6 sm:space-y-8">
            {benefits.slice(2, 4).map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index + 2} className="flex gap-3 sm:gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <Icon className="w-5 sm:w-6 h-5 sm:h-6 text-gray-700" />
                  </div>
                  <div>
                    <h3 className="font-serif text-base sm:text-lg mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueSection;
