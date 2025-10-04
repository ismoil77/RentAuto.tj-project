import React from "react";

export default function MarqueeRentals({ speed = 24 }) {
  const companies = [
    { name: "RentAuto", color: "#0c7ff2", image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&h=400&fit=crop" },
    { name: "FastWheels", color: "#ff6b6b", image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=400&fit=crop" },
    { name: "CityDrive", color: "#2dd4bf", image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=400&fit=crop" },
    { name: "PremiumCars", color: "#7c3aed", image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&h=400&fit=crop" },

    { name: "AutoHub", color: "#06b6d4", image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=400&fit=crop" },
    { name: "Roadster", color: "#ef4444", image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&h=400&fit=crop" },
  ]

  const loopItems = [...companies, ...companies];

  return (
    <section className="w-full overflow-hidden bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-800 rounded-xl p-3 shadow-lg">
      <div className="relative flex items-center">
        <div
          className="flex items-center whitespace-nowrap"
          style={{ animationDuration: `${speed}s` }}
        >
          {loopItems.map((c, i) => (
            <div
              key={`${c.name}-${i}`}
              className="mx-3 group cursor-pointer transition-transform hover:scale-105 hover:shadow-md"
            >
              {/* Карточка с фото */}
              <div className="relative w-[200px] h-[100px] rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm">
                <img
                  src={c.image}
                  alt={c.name}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
                {/* Градиентная плашка с названием */}
                <div
                  className="absolute bottom-0 left-0 right-0 px-3 py-2 bg-gradient-to-t from-black/70 to-transparent text-white text-xs font-medium"
                  style={{ backgroundColor: `rgba(0, 0, 0, 0.7)` }}
                >
                  {c.name}
                </div>
              </div>

              {/* Подсказка при наведении */}
              <div className="mt-1 text-xs text-gray-600 dark:text-gray-400 text-center group-hover:text-[#0c7ff2] transition-colors">
                {c.name}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Анимация маркера */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        section > div > div {
          animation: marquee linear infinite;
        }
      `}</style>
    </section>
  );
}