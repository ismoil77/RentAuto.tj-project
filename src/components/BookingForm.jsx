"use client";

import { useStore } from '@/store/useStore'
import axiosRequest from '@/utils/axios'
import { useState } from "react";
import { toast } from "react-toastify";

export default function BookingForm({ car, onClose }) {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    rentalDays: 1,
    passportFile: null, // файл паспорта
    bookingTime: new Date().toISOString(),
    confirmed: false,
  });
const {postToTelegram}= useStore();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prev) => ({ ...prev, passportFile: file }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.fullName || !formData.phone) {
      toast.error("Заполните обязательные поля!");
      return;
    }

    try {
      // используем FormData для передачи файла
      const data = new FormData();
data.append("carId", car.id); // ID выбранной машины
data.append("carName", car.name); // Название машины
data.append("brand", car.brand); // Марка
data.append("category", car.category); // Категория
data.append("categoryCar", car.categoryCar); // Тип кузова
data.append("price", car.priceNum); // Цена числом
data.append("fullName", formData.fullName); // ФИО клиента
data.append("phone", formData.phone);
data.append("email", formData.email);
data.append("rentalDays", formData.rentalDays);
data.append("bookingTime", formData.bookingTime); // ISO строка
data.append("confirmed", formData.confirmed);
 // true / false
// if (formData.passportFile) {
//   data.append("file", formData.passportFile); // файл паспорта
// }

console.log(car);

      await axiosRequest.post("/orders", {...formData,...car});
    const confirmedText = formData.confirmed ? "✅ Подтверждено" : "❌ Не подтверждено";
const message = `
🚗 *Новое бронирование автомобиля!*

*Машина:* ${car.name} (${car.brand})
*Категория:* ${car.category}
*Тип кузова:* ${car.categoryCar}
*Цена:* ${car.price} TJS/день

👤 *Клиент:*
ФИО: ${formData.fullName}
Телефон: ${formData.phone}
Email: ${formData.email}

📅 *Информация о бронировании:*
Дней аренды: ${formData.rentalDays}
Дата заявки: ${new Date(formData.bookingTime).toLocaleString()}
Статус: ${confirmedText}
`;

await postToTelegram(message);
      toast.success("Бронирование успешно отправлено ждите ответа!");
      onClose();
    } catch (err) {
      console.error(err);
      toast.error("Ошибка при бронировании");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" style={{zIndex:1000}}>
      <div className="bg-white dark:bg-gray-900 rounded-xl p-8 w-full max-w-lg relative">
        <button
          className="absolute top-4 right-4 text-gray-700 dark:text-gray-300 font-bold text-xl"
          onClick={onClose}
        >
          ×
        </button>
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
          Бронирование: {car?.name}
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
                    <label htmlFor="fullName">ФИО</label>

          <input
            type="text"
            name="fullName"
            id="fullName"

            placeholder="ФИО"
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
          <label htmlFor="phone">Номер телефона</label>

          <input
            type="text"
            name="phone"
            id="phone"

            placeholder="Телефон"
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <label htmlFor="email">Email</label>

          <input
            type="email"
            name="email"
            id="email"

            placeholder="Email"
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
            value={formData.email}
            onChange={handleChange}
          />
          <label htmlFor="rentalDays">Количество дней</label>
          <input
            type="number"
            min="1"
            name="rentalDays"
            id="rentalDays"

            placeholder="Количество дней аренды"
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
            value={formData.rentalDays}
            onChange={handleChange}
          />
          
          
          <button
            type="submit"
            className="w-full bg-[#0080ff] py-3 rounded-lg text-white font-bold hover:bg-[#0066cc] transition"
          >
            Отправить заявку
          </button>
        </form>
      </div>
    </div>
  );
}
