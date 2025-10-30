// src/components/PartnersCarousel.tsx
import { useRef, useEffect, useState } from "react";

const PartnersCarousel = () => {
  const partners = [
    { id: 1, name: "TVS", logo: "/partners/tvs.png" },
    { id: 2, name: "Toyota Tsusho", logo: "/partners/toyota-tsusho.png" },
    { id: 3, name: "Timken", logo: "/partners/timken.png" },
    { id: 4, name: "Royal Enfield", logo: "/partners/royal-enfield.png" },
    { id: 5, name: "LMW", logo: "/partners/lmw.png" },
    { id: 6, name: "Lenovo", logo: "/partners/lenovo.png" },
    { id: 7, name: "Janatics", logo: "/partners/janatics.png" },
    { id: 8, name: "Hyundai Mobis", logo: "/partners/hyundai-mobis.png" },
    { id: 9, name: "Daimler", logo: "/partners/daimler.png" },
    { id: 10, name: "Cummins", logo: "/partners/cummins.png" },
    { id: 11, name: "Ashok Leyland", logo: "/partners/ashok-leyland.png" },
    { id: 12, name: "Apollo Tyres", logo: "/partners/apollo-tyres.png" },
    { id: 13, name: "Amalgamations", logo: "/partners/amalgamations.png" },
    { id: 14, name: "Turbo Energy", logo: "/partners/turbo-energy.png" },
  ];

  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-scroll functionality
  useEffect(() => {
    if (isPaused || !scrollRef.current) return;

    const scrollContainer = scrollRef.current;
    const scrollWidth = scrollContainer.scrollWidth;
    const clientWidth = scrollContainer.clientWidth;
    let scrollPosition = 0;

    const autoScroll = setInterval(() => {
      if (scrollPosition >= scrollWidth - clientWidth) {
        scrollPosition = 0;
      } else {
        scrollPosition += 1;
      }
      scrollContainer.scrollTo({ left: scrollPosition, behavior: "auto" });
    }, 30);

    return () => clearInterval(autoScroll);
  }, [isPaused]);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      className="bg-white py-16 border-y"
      onMouseEnter={() => setIsPaused(false)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-2 lg:px-2">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#0B3D68] mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-[#0B3D68] max-w-2xl mx-auto">
            We're proud to partner with forward-thinking organizations worldwide
            to drive growth and transformation
          </p>
        </div>

        <div className="relative">
          {/* Scroll buttons - only show on hover */}
          <div className="absolute inset-y-0 left-0 flex items-center z-10">
            <button
              onClick={() => scroll("left")}
              className="bg-white/80 hover:bg-white text-gray-600 hover:text-blue-600 border border-gray-300 rounded-full p-3 shadow-lg transition-all duration-200 opacity-0 group-hover:opacity-100 ml-4"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center z-10">
            <button
              onClick={() => scroll("right")}
              className="bg-white/80 hover:bg-white text-gray-600 hover:text-blue-600 border border-gray-300 rounded-full p-3 shadow-lg transition-all duration-200 opacity-0 group-hover:opacity-100 mr-4"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Partners grid with auto-scroll */}
          <div
            ref={scrollRef}
            className="flex space-x-12 overflow-x-auto scrollbar-hide scroll-smooth px-8 group"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {/* Duplicate partners for seamless loop */}
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={`${partner.id}-${index}`}
                className="flex-shrink-0 flex items-center justify-center bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:scale-105 min-w-[180px]"
              >
                <div className="w-32 h-16 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
                  {/* Placeholder for logo - replace with actual images */}
                  <div className="text-center">
                    <div className="text-xs text-gray-400 font-medium mb-1">
                      {partner.name}
                    </div>
                    <div className="text-[10px] text-gray-300">Logo</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partner count */}
        <div className="text-center mt-8">
          <p className="text-sm text-white">
            Trusted by {partners.length}+ global organizations
          </p>
        </div>
      </div>
    </section>
  );
};

export default PartnersCarousel;
