import Image from "next/image";

export default function ProblemSection() {
  return (
    <section className="w-full sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="p-6 sm:p-8 md:p-12">
          {/* Icon and Label */}
          <div className="flex flex-col items-center mb-6 sm:mb-8">
            <div className="text-3xl sm:text-4xl mb-2 text-slate-600">🍴</div>
            <p className="text-xs sm:text-sm font-medium text-slate-600 tracking-wide">
              Problem
            </p>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center mb-4 sm:mb-6 text-slate-900 text-balance">
            Lost Between Reservations, Kitchen Tickets, and Stock Checks?
          </h2>

          <p className="text-center text-slate-600 text-sm sm:text-base max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed px-2">
            Missed reservations. Slow orders. Inventory nightmares. It seems
            you&apos;re facing a daunting task through the noise and puts you back in
            command.
          </p>

          {/* Image */}
          <div className="w-full">
            <Image
              src="/images/marketing-site-image-03.jpg"
              alt="Restaurant kitchen with chefs working"
              className="w-full h-auto object-cover rounded-lg"
              width={1200}
              height={800}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
