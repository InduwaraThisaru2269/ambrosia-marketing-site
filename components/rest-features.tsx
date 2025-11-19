import { Plus } from "lucide-react";
import Image from "next/image";

const features = [
  {
    label: "Staff",
    title: "Simplified staff management",
    description:
      "Assign roles, manage schedules, track your team, and communicate in real time.",
    image: "/images/marketing-site-image-08.png",
  },
  {
    label: "Inventory",
    title: "Intelligent inventory and purchasing",
    description:
      "Low stock alerts. Purchase orders. Delivery tracking. Waste snapshots.",
    image: "/images/marketing-site-image-09.png",
  },
  {
    label: "Insights",
    title: "Powerful business insights",
    description:
      "Forecasting drives big charts quickly. Product analytics help save for decisions.",
    image: "/images/marketing-site-image-10.png",
  },
];

export default function RestFeatures() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="flex justify-center mb-3">
            <Plus className="w-6 h-6 text-gray-600" />
          </div>
          <p className="text-xs sm:text-sm font-medium text-gray-600 mb-2">
            More
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-2">
            The rest
          </h2>
          <p className="text-gray-700 text-base sm:text-lg">
            Three more tools to round out your operation
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {features.map((feature) => (
            <div
              key={feature.label}
              className="bg-gradient-to-br from-amber-100 via-yellow-200 to-amber-200 p-6 sm:p-8 rounded-lg hover:from-amber-200 hover:via-yellow-300 hover:to-amber-300 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              {/* Image Placeholder */}
              <div className="mb-6 h-24 sm:h-32 bg-gradient-to-br from-yellow-300 to-yellow-400 rounded-lg flex items-center justify-center relative overflow-hidden">
                <Image
                  src={feature.image || "/placeholder.svg"}
                  alt={feature.label}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <p className="text-xs sm:text-sm text-amber-800 mb-2">
                {feature.label}
              </p>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-700">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
