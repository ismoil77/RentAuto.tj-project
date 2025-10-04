import axiosRequest from '@/utils/axios'
import { create } from 'zustand'

export const useStore = create((set) => ({
  // состояние
  cars: [],
  selectedCar: null,
  filters: {
    category: '',
    brand: '',
    priceRange: [0, 1000]
  },
  
  // действия (actions)
  setCars: (cars) => set({ cars }),
  setSelectedCar: (car) => set({ selectedCar: car }),
  setFilters: (filters) => set({ filters }),
  
  // можно добавлять сложные действия
  addCar: (car) => set((state) => ({ 
    cars: [...state.cars, car] 
  })),
  
  removeCar: (carId) => set((state) => ({
    cars: state.cars.filter(car => car.id !== carId)
  })),
  
  // для работы с асинхронными операциями
   fetchCars: async () => {
    try {
      const response = await axiosRequest('/cars')
      const cars = response.data
      console.log(cars);
      
      set({ cars })
    } catch (error) {
      console.error('Error fetching cars:', error)
    }
  },
  postToTelegram: async (data) => {
    const TELEGRAM_BOT_TOKEN = '8074222345:AAHZDnjuqWVLbI21p9c-Dv5i-LmStgo7ed4'
    const TELEGRAM_RentAutoSupport_ID = -1002966936918
    try {
      await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: TELEGRAM_RentAutoSupport_ID,
        text: ` ${data}`,

      }),
    });
    } catch (error) {
      console.error(error);
      
    }
  }

}))