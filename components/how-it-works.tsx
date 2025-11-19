import { Smartphone, QrCode, BarChart3 } from "lucide-react";

const steps = [
  {
    icon: Smartphone,
    title: "Reserve and seat",
    description:
      "Guest books online or walks in. You assign a table and waiter with a tap. Everything flows from there.",
  },
  {
    icon: QrCode,
    title: "Order and enjoy",
    description:
      "Guest scans QR to order. Kitchen and waiter are notified instantly. Food flows smoothly.",
  },
  {
    icon: BarChart3,
    title: "Pay and analyze",
    description:
      "Waiter closes tab with flexible payment options. You gain insights to drive future seats.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6"
      style={{
        backgroundImage:
          "url(/images/marketing-site-image-04.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative max-w-4xl mx-auto bg-white/90 backdrop-blur-md rounded-lg p-6 sm:p-8 md:p-12 lg:p-16">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-2 sm:mb-4">
            How it works in three moves
          </h2>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg">
            Your guests book or walk in. You assign a table and waiter with a
            tap. Everything flows from there.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-3 sm:mb-4">
                  <Icon className="w-6 sm:w-8 h-6 sm:h-8 text-black" />
                </div>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-black mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-700 text-xs sm:text-sm">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
