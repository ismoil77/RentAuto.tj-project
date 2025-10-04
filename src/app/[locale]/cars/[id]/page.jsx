'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import BookingForm from '@/components/BookingForm'; // твоя форма бронирования
import axiosRequest from '@/utils/axios'
import { toast } from 'react-toastify'

export default function CarPage() {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
const [formOpen, setFormOpen] = useState(false);

  useEffect(() => {
    const fetchCar = async () => {
      try {
        const res = await axiosRequest.get(`https://a9a312fd6819819d.mokky.dev/cars/${id}`);
        const data = res.data;
		  console.log(data);
		  
        const found = data
		  
        setCar(found);
		  console.log(car);

      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCar();
  }, [id]);
  function bronirovat(car){
	if(localStorage.getItem("access_token")||undefined){
		setFormOpen(car)
	}
	else{
				toast.warning("Пожалуйста, войдите в систему, чтобы забронировать автомобиль.");
		
	}
}

  if (loading) return <div className="text-center py-20">Загрузка...</div>;
  if (!car) return <div className="text-center py-20 text-red-500">Машина не найдена</div>;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className=" mx-auto px-6 py-12 flex flex-col lg:flex-row gap-12 dark:bg-black"
    >
      {/* Изображение */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="lg:w-1/2 rounded-xl overflow-hidden shadow-lg"
      >
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-full object-cover rounded-xl"
        />
      </motion.div>

      {/* Информация */}
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="lg:w-1/2 flex flex-col gap-6"
      >
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">{car.name}</h1>
        <p className="text-gray-600 dark:text-gray-300">{car.description}</p>
        <div className="flex gap-6 flex-wrap text-gray-700 dark:text-gray-400 mt-4">
			
          <div>Марка: <b>{car.brand}</b></div>
          <div>Тип кузова: <b>{car.categoryCar}</b></div>
          <div>Категория: <b>{car.category}</b></div>
          <div>Двери: <b>{car.doors}</b></div>
          <div>Пассажиры: <b>{car.passengers}</b></div>
          <div>Багаж: <b>{car.luggage}</b></div>
        </div>
        <p className="text-2xl text-blue-600 font-semibold mt-4">Цена: {car.price}</p>

        {/* Форма бронирования */}
        <div className="mt-8">
          {/* <BookingForm carId={car.id} /> */}
			 <button className='bg-[#0080ff] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#0066cc] transition-all' onClick={()=>bronirovat(car)}>
							Забронировать
						</button>
								{formOpen && (
						  <BookingForm car={formOpen} onClose={() => setFormOpen(null)} />
						)}
        </div>
      </motion.div>
    </motion.div>
  );
}
