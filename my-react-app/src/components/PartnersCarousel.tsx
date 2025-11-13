// src/components/PartnersCarousel.tsx

// --- 1. IMPORT ALL LOGOS ---
// The path is relative to src/components/PartnersCarousel.tsx.
// Assuming the structure:
// - src/tvs.png is incorrect, must be in assets, so I've assumed it's in src/assets/tvs.png.
// - ./assets/filename.png means ../assets/filename.png relative to the component.

import tvsLogo from "../assets/tvs.png";
import toyotaTsushoLogo from "../assets/toyota-tsusho.png";
import timkenLogo from "../assets/timken.png";
import royalEnfieldLogo from "../assets/royal-enfield.png";
import lmwLogo from "../assets/lmw.png";
import lenovoLogo from "../assets/lenovo.png";
import janaticsLogo from "../assets/janatics.png";
import hyundaiMobisLogo from "../assets/hyundai-mobis.png";
import daimlerLogo from "../assets/daimler.png";
import cumminsLogo from "../assets/cummins.png";
import ashokLeylandLogo from "../assets/ashok-leyland.png";
import apolloTyresLogo from "../assets/apollo-tyres.png";
import amalgamationsLogo from "../assets/amalgamations.png";
import turboEnergyLogo from "../assets/turbo-energy.png";


const PartnersCarousel = () => {
  // --- 2. USE IMPORTED VARIABLES IN THE ARRAY ---
  const partners = [
    // The logo value is now the imported image module
    { id: 1, name: "TVS", logo: tvsLogo },
    { id: 2, name: "Toyota Tsusho", logo: toyotaTsushoLogo },
    { id: 3, name: "Timken", logo: timkenLogo },
    { id: 4, name: "Royal Enfield", logo: royalEnfieldLogo },
    { id: 5, name: "LMW", logo: lmwLogo },
    { id: 6, name: "Lenovo", logo: lenovoLogo },
    { id: 7, name: "Janatics", logo: janaticsLogo },
    { id: 8, name: "Hyundai Mobis", logo: hyundaiMobisLogo },
    { id: 9, name: "Daimler", logo: daimlerLogo },
    { id: 10, name: "Cummins", logo: cumminsLogo },
    { id: 11, name: "Ashok Leyland", logo: ashokLeylandLogo },
    { id: 12, name: "Apollo Tyres", logo: apolloTyresLogo },
    { id: 13, name: "Amalgamations", logo: amalgamationsLogo },
    { id: 14, name: "Turbo Energy", logo: turboEnergyLogo },
  ];

  return (
    <section className="bg-background py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're proud to partner with forward-thinking organizations worldwide to drive growth and transformation
          </p>
        </div>

        {/* Infinite Marquee Container */}
        <div className="relative">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10"></div>

          {/* Marquee wrapper */}
          <div className="marquee-container">
            <div className="marquee-content">
              {/* First set of partners */}
              {partners.map((partner) => (
                <div
                  key={`first-${partner.id}`}
                  className="flex-shrink-0 flex items-center justify-center bg-background rounded-xl p-6 hover:transition-all duration-300 hover:scale-105 min-w-[180px] mx-6"
                >
                  <div className="w-32 h-16 flex items-center justify-center hover:transition-all duration-100">
                    {/* *** REPLACED WITH IMAGE TAG *** */}
                    <img
                      src={partner.logo}
                      alt={`${partner.name} Logo`}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {partners.map((partner) => (
                <div
                  key={`second-${partner.id}`}
                  className="flex-shrink-0 flex items-center justify-center bg-background rounded-xl p-6 shadow-sm hover:scale-105 min-w-[180px] mx-6"
                >
                  <div className="w-32 h-16 flex items-center justify-center hover:transition-all duration-300">
                    {/* *** REPLACED WITH IMAGE TAG *** */}
                    <img
                      src={partner.logo}
                      alt={`${partner.name} Logo`}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Partner count */}
        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            Trusted by <span className="font-bold text-primary">{partners.length}+</span> global organizations
          </p>
        </div>
      </div>

      <style>{`
        .marquee-container {
          display: flex;
          overflow: hidden;
          user-select: none;
          gap: 0;
        }

        .marquee-content {
          display: flex;
          animation: scroll 40s linear infinite;
          gap: 0;
        }

        .marquee-content:hover {
          animation-play-state: resume;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        /* Hide scrollbar */
        .marquee-container::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default PartnersCarousel;