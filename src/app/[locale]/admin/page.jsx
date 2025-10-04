'use client'

import axiosRequest from '@/utils/axios'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'



export default function AdminPanel() {
  const [cars, setCars] = useState([])
  const [loading, setLoading] = useState(true)
  const [editCar, setEditCar] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    brand: '',
    category: '',
    categoryCar: '',
    price: '',
    passengers: 0,
    luggage: 0,
    doors: 0,
    type: '',
    available: true,
    description: '',
    image: ''
  })

  // GET all cars
  const fetchCars = async () => {
    setLoading(true)
    try {
      const res = await axiosRequest('/cars')
      setCars(res.data)
    } catch (err) {
      console.error(err)
      toast.error('Ошибка загрузки автомобилей')
    } finally {
      setLoading(false)
    }
  }

const role = JSON.parse(atob(localStorage.getItem('access_token').split('.')[1])).role||undefined;
  useEffect(() => {
    fetchCars()
console.log(role);
if(role!="admin"){
	window.location.href="/"
}
  }, [])

  // Handle input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  // Open modal for editing
  const handleEdit = (car) => {
    setEditCar(car)
    setFormData(car)
    setShowModal(true)
  }

  // Save car (POST or PUT)
  const handleSave = async () => {
    try {
      if (editCar) {
        // PUT /cars/:id
        await axios.patch(`https://a9a312fd6819819d.mokky.dev/cars/${editCar.id}`, {name:formData.name,brand:formData.brand,category:formData.category,categoryCar:formData.categoryCar,price:formData.price,passengers:formData.passengers,luggage:formData.luggage,doors:formData.doors,type:formData.type,available:formData.available,description:formData.description,image:formData.image})
        toast.success('Автомобиль обновлен')
      } else {
        // POST /cars
        await axiosRequest.post('/cars', formData)
        toast.success('Автомобиль добавлен')
      }
      setShowModal(false)
      setEditCar(null)
      setFormData({
        name: '',
        brand: '',
        category: '',
        categoryCar: '',
        price: '',
        passengers: 0,
        luggage: 0,
        doors: 0,
        type: '',
        available: true,
        description: '',
        image: ''
      })
      fetchCars()
    } catch (err) {
      console.error(err)
      toast.error('Ошибка сохранения')
		     setShowModal(false)
      setEditCar(null)
      setFormData({
        name: '',
        brand: '',
        category: '',
        categoryCar: '',
        price: '',
        passengers: 0,
        luggage: 0,
        doors: 0,
        type: '',
        available: true,
        description: '',
        image: ''
      })
    }
  }

  // Delete car
  const handleDelete = async (id) => {
    if (!confirm('Вы уверены, что хотите удалить автомобиль?')) return
    try {
      await axiosRequest.delete(`/cars/${id}`)
      toast.success('Автомобиль удален')
      fetchCars()
    } catch (err) {
      console.error(err)
      toast.error('Ошибка удаления')
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-xl text-gray-500 dark:text-gray-300">Загрузка автомобилей...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-8">
      <h1 className="text-4xl font-bold text-[#0080ff] mb-8">Админ панель — Автомобили</h1>

      <button
        onClick={() => setShowModal(true)}
        className="mb-6 bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition-colors"
      >
        Добавить автомобиль
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {cars.map((car) => (
          <div
            key={car.id}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg relative  overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="relative">
              <img src={car.image} alt={car.name} className="w-full h-56 object-cover" />
              {car.available ? (
                <span className="absolute top-3 left-3 bg-green-500 text-white text-xs px-2 py-1 rounded-lg">
                  Доступен
                </span>
              ) : (
                <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded-lg">
                  Недоступен
                </span>
              )}
            </div>
            <div className="p-5 flex flex-col justify-between ">
              <h2 className="text-2xl font-bold text-[#0080ff]">{car.name}</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{car.category}</p>
              <p className="text-lg font-semibold mt-2">{car.price}</p>
              <p className="mt-2 text-gray-700 dark:text-gray-300 text-sm">{car.description}</p>

              <div className="flex justify-between mt-4 text-sm text-gray-600 dark:text-gray-300">
                <div className="flex flex-col items-center">
                  <span>Пассажиры</span>
                  <span className="font-bold">{car.passengers}</span>
                </div>
                <div className="flex flex-col items-center">
                  <span>Багаж</span>
                  <span className="font-bold">{car.luggage}</span>
                </div>
                <div className="flex flex-col items-center">
                  <span>Двери</span>
                  <span className="font-bold">{car.doors}</span>
                </div>
                <div className="flex flex-col items-center">
                  <span>Тип</span>
                  <span className="font-bold">{car.type}</span>
                </div>
              </div>

              <div className="flex gap-2 mt-4 absolute   top-40 right-1">
                <button
                  onClick={() => handleEdit(car)}
                  className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition-colors w-[180px]"
                >
                  Редактировать
                </button>
                <button
                  onClick={() => handleDelete(car.id)}
                  className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg transition-colors"
                >
                  Удалить
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl w-full max-w-lg shadow-lg relative">
            <h2 className="text-2xl font-bold text-[#0080ff] mb-4">
              {editCar ? 'Редактировать автомобиль' : 'Добавить автомобиль'}
            </h2>
            <div className="space-y-3 max-h-[70vh] overflow-y-auto">
              <input
                type="text"
                name="name"
                placeholder="Название"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg"
              />
              <input
                type="text"
                name="brand"
                placeholder="Марка"
                value={formData.brand}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg"
              />
              <input
                type="text"
                name="category"
                placeholder="Категория"
                value={formData.category}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg"
              />
              <input
                type="text"
                name="categoryCar"
                placeholder="Тип кузова"
                value={formData.categoryCar}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg"
              />
              <input
                type="text"
                name="price"
                placeholder="Цена"
                value={formData.price}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg"
              />
              <input
                type="number"
                name="passengers"
                placeholder="Пассажиры"
                value={formData.passengers}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg"
              />
              <input
                type="number"
                name="luggage"
                placeholder="Багаж"
                value={formData.luggage}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg"
              />
              <input
                type="number"
                name="doors"
                placeholder="Двери"
                value={formData.doors}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg"
              />
              <input
                type="text"
                name="type"
                placeholder="Тип"
                value={formData.type}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg"
              />
              <input
                type="text"
                name="image"
                placeholder="Ссылка на изображение"
                value={formData.image}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg"
              />
              <textarea
                name="description"
                placeholder="Описание"
                value={formData.description}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg"
              />
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="available"
                  checked={formData.available}
                  onChange={handleChange}
                  className="h-4 w-4"
                />
                Доступен
              </label>
            </div>
            <div className="flex justify-end gap-2 mt-4">
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-300 dark:bg-gray-600 text-black dark:text-white px-4 py-2 rounded-lg"
              >
                Отмена
              </button>
              <button
                onClick={handleSave}
                className="bg-[#0080ff] text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                Сохранить
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
