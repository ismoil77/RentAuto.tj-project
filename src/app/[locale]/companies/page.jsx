'use client'

import React from 'react'

const companies = [
  {
    id: 1,
    name: 'RentAcar Pro',
    image: 'https://static.tildacdn.one/tild3939-3538-4832-b730-336439663039/rentacar_43.svg',
    description: 'Крупная компания по аренде автомобилей. Предлагает широкий выбор автомобилей премиум-класса.',
  },
  {
    id: 2,
    name: 'SpeedyCar',
    image: 'https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=800&q=60',
    description: 'Быстрая и надёжная компания для аренды спортивных и городских автомобилей.',
  },
  {
    id: 3,
    name: 'AutoLux',
    image: 'https://www.shutterstock.com/image-photo/copenhagen-denmark-june-7-2024-260nw-2528215041.jpg',
    description: 'Премиум-аренда для ценителей комфорта и стиля. Роскошные автомобили для особых случаев.',
  },
  {
    id: 4,
    name: 'CityDrive',
    image: 'https://autopodpisca.ru/assets/images/autopodpisca/logo_citydrive.jpg',
    description: 'Компания с городским фокусом. Идеально для деловых поездок и коротких аренды.',
  },
]

export default function page() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-8">
      <h1 className="text-4xl font-bold text-[#0080ff] mb-12 text-center">
        Наши компании-партнёры
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
        {companies.map((company) => (
          <div
            key={company.id}
            className="relative bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="relative">
              <img
                src={company.image}
                alt={company.name}
                className="w-full h-56 object-cover"
              />

              <div className="absolute bottom-0 w-full bg-black/60 text-white py-1 px-2 text-sm overflow-hidden">
                <div className="animate-marquee whitespace-nowrap font-bold text-red-500">
                  🚗 Автопрокат компании: {company.name}
                </div>
              </div>
            </div>

            <div className="p-5">
              <h2 className="text-2xl font-bold text-[#0080ff] mb-2">
                {company.name}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                {company.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
