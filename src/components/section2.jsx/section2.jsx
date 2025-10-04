'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import BookingForm from '../BookingForm'
import './section2.css'
import { toast } from 'react-toastify'

export default function SectionCatalog() {
	const [formOpen, setFormOpen] = useState(false)
	const [cars, setCars] = useState([])
	const [filtered, setFiltered] = useState([])
	const [filters, setFilters] = useState({
		brand: '',
		categoryCar: '',
		company: '',
		minPrice: 0,
		maxPrice: 1000,
	})

	// Загрузка с API
	useEffect(() => {
		const fetchCars = async () => {
			try {
				const res = await fetch('https://a9a312fd6819819d.mokky.dev/cars')
				if (!res.ok) {
					throw new Error('Ошибка загрузки машин')
				}
				const data = await res.json()
				// Приведём цену к числу (удалим " TJS/день" и др.)
				const parsed = data.map(car => {
					let priceNum = null
					// ожидаем формат вроде "500 TJS/день"
					if (typeof car.price === 'string') {
						const m = car.price.match(/(\d+)/)
						if (m) priceNum = parseInt(m[1], 10)
					}
					return { ...car, priceNum }
				})
				setCars(parsed)
				setFiltered(parsed)
			} catch (err) {
				console.error('Ошибка fetchCars:', err)
			}
		}

		fetchCars()
	}, [])

	// Применить фильтры
	useEffect(() => {
		let temp = cars

		if (filters.brand) {
			temp = temp.filter(car => car.brand === filters.brand)
		}
		if (filters.categoryCar) {
			temp = temp.filter(car => car.categoryCar === filters.categoryCar)
		}
		if (filters.company) {
			temp = temp.filter(car => car.company === filters.company)
		}
		temp = temp.filter(car => {
			if (car.priceNum == null) return false
			return (
				car.priceNum >= filters.minPrice && car.priceNum <= filters.maxPrice
			)
		})

		setFiltered(temp)
	}, [cars, filters])

	const handleFilterChange = (field, value) => {
		setFilters(prev => ({ ...prev, [field]: value }))
	}
	function bronirovat(car) {
		if (localStorage.getItem('access_token')||undefined) {
			setFormOpen(car)
		} else {
			toast.warning('Пожалуйста, войдите в систему, чтобы забронировать автомобиль.')
		}
	}
	return (
		<div className='bg-background-light dark:bg-slate-900  font-display text-gray-800 dark:text-gray-200'>
			{formOpen && (
				<BookingForm car={formOpen} onClose={() => setFormOpen(null)} />
			)}
			<div className='flex flex-col min-h-screen'>
				<main className='container mx-auto px-6 py-8 flex-grow'>
					<div className='flex flex-col lg:flex-row gap-12'>
						<aside className='lg:w-1/4 xl:w-1/5'>
							<div className='bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm'>
								<h2 className='text-2xl font-bold mb-6 text-gray-900 dark:text-white'>
									Фильтры
								</h2>
								<div className='space-y-6'>
									<div>
										<label
											className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'
											htmlFor='brand'
										>
											Марка
										</label>
										<select
											id='brand'
											className='w-full bg-background-light dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-primary focus:border-primary h-10'
											value={filters.brand}
											onChange={e =>
												handleFilterChange('brand', e.target.value)
											}
										>
											<option value=''>Все марки</option>
											{/* Можно динамически вытянуть бренды */}
											{[...new Set(cars.map(c => c.brand))].map((b, i) => (
												<option key={i} value={b}>
													{b}
												</option>
											))}
										</select>
										
									</div>
									<div>
										<label
											className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'
											htmlFor='brand'
										>
											Компании
										</label>
										<select
											id='brand'
											className='w-full bg-background-light dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-primary focus:border-primary  h-10'
											value={filters.company}
											onChange={e =>
												handleFilterChange('company', e.target.value)
											}
										>
											<option value=''>Все компании</option>
											{/* Можно динамически вытянуть бренды */}
											{[...new Set(cars.map(c => c.company))].map((b, i) => (
												<option key={i} value={b}>
													{b}
												</option>
											))}
										</select>
										
									</div>
									<div>
										<label
											className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'
											htmlFor='categoryCar'
										>
											Тип кузова
										</label>
										<select
											id='categoryCar'
											className='w-full bg-background-light dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-primary focus:border-primary  h-10'
											value={filters.categoryCar}
											onChange={e =>
												handleFilterChange('categoryCar', e.target.value)
											}
										>
											<option value=''>Все типы</option>
											{[...new Set(cars.map(c => c.categoryCar))].map(
												(ct, i) => (
													<option key={i} value={ct}>
														{ct}
													</option>
												)
											)}
										</select>
									</div>
									<div>
										<label
											className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'
											htmlFor='price'
										>
											Цена (TJS/день)
										</label>
										<div className='mt-4'>
											<input
												type='range'
												id='price'
												className='range-slider bg-gray-300 dark:bg-gray-700 [&::-webkit-slider-thumb]:bg-primary [&::-moz-range-thumb]:bg-primary'
												min='0'
												max='1000'
												value={filters.maxPrice}
												onChange={e =>
													handleFilterChange(
														'maxPrice',
														parseInt(e.target.value, 10)
													)
												}
											/>
											<div className='flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1'>
												<span>0</span>
												<span>{filters.maxPrice}</span>
											</div>
										</div>
									</div>
									<button
										className='w-full bg-primary text-white py-3 rounded-lg font-bold hover:bg-primary/90 transition-all focus:outline-none focus:ring-2 focus:ring-primary/50'
										onClick={() => {
											// сброс фильтров
											setFilters({
												brand: '',
												categoryCar: '',
												minPrice: 0,
												maxPrice: 1000,
											})
										}}
									>
										Сбросить фильтры
									</button>
								</div>
							</div>
						</aside>
						<div className='flex-1'>
							<h1 className='text-4xl font-bold mb-8 text-gray-900 dark:text-white'>
								Каталог автомобилей
							</h1>
							<div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8'>
								{filtered.map((car, index) => (
									<div
										key={index}
										className='group bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-800'
									>
										<div className='relative'>
											<img
												alt={car.name}
												className='w-full h-56 object-cover'
												src={car.image}
											/>
																			<div className="absolute top-55 left-0 w-full overflow-hidden z-50 bg-red-500">
  <div className="animate-marquee whitespace-nowrap   text-sm px-2 text-black">
     Автопрокат: <span className='text-[16px] font-bold border-2 bg-yellow-300 rounded'>{car.company} </span>— владелец данного автомобиля
  </div>
</div>
											  {car.available ? (
                <span className="absolute top-3 left-3 bg-green-500 text-white text-xs px-2 py-1 rounded-lg">
                  Доступен
                </span>
              ) : (
                <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded-lg">
                  Недоступен
                </span>
              )}
											<div className='absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
												<button
													className='bg-[#0080ff] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#0066cc] transition-all'
													onClick={() => bronirovat(car)}
												>
													Забронировать
												</button>
											</div>
										</div>

										<div className='p-5'>
											<Link href={'/cars/' + car.id}>
												<h3 className='text-xl font-bold text-gray-900 dark:text-white'>
													{car.name}
												</h3>
											</Link>
											<p className='text-sm text-gray-500 dark:text-gray-400 mt-1'>
												{car.category}
											</p>
											<p className='text-lg text-[#0080ff] font-semibold mt-2'>
												от {car.price}
											</p>

											{/* Иконки характеристик */}
											<div className='flex justify-between mt-4 text-sm text-gray-600 dark:text-gray-300'>
												<div className='flex flex-col items-center'>
													<svg
														xmlns='http://www.w3.org/2000/svg'
														className='h-6 w-6 text-[#0080ff]'
														fill='none'
														viewBox='0 0 24 24'
														stroke='currentColor'
													>
														<path
															strokeLinecap='round'
															strokeLinejoin='round'
															strokeWidth={2}
															d='M16 7a4 4 0 11-8 0 4 4 0 018 0z'
														/>
														<path
															strokeLinecap='round'
															strokeLinejoin='round'
															strokeWidth={2}
															d='M12 14a4 4 0 018 0m-8-8a4 4 0 018 0'
														/>
													</svg>
													<span>{car.passengers} пассажира</span>
												</div>
												<div className='flex flex-col items-center'>
													<svg
														xmlns='http://www.w3.org/2000/svg'
														className='h-6 w-6 text-[#0080ff]'
														fill='none'
														viewBox='0 0 24 24'
														stroke='currentColor'
													>
														<path
															strokeLinecap='round'
															strokeLinejoin='round'
															strokeWidth={2}
															d='M5 8h14M5 8a2 2 0 012-2h10a2 2 0 012 2m-2 4h6m-6 4h6m2-4h.01M12 16h.01'
														/>
													</svg>
													<span>{car.luggage} багаж</span>
												</div>
												<div className='flex flex-col items-center'>
													<svg
														xmlns='http://www.w3.org/2000/svg'
														className='h-6 w-6 text-[#0080ff]'
														fill='none'
														viewBox='0 0 24 24'
														stroke='currentColor'
													>
														<path
															strokeLinecap='round'
															strokeLinejoin='round'
															strokeWidth={2}
															d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6v6m-3-3L9 15'
														/>
													</svg>
													<span>{car.type}</span>
												</div>
												<div className='flex flex-col items-center'>
													<svg
														xmlns='http://www.w3.org/2000/svg'
														className='h-6 w-6 text-[#0080ff]'
														fill='none'
														viewBox='0 0 24 24'
														stroke='currentColor'
													>
														<path
															strokeLinecap='round'
															strokeLinejoin='round'
															strokeWidth={2}
															d='M19 10l-7-7m0 0l-7 7m7-7v18'
														/>
													</svg>
													<span>{car.doors} двери</span>
												</div>
											</div>

											{/* Кнопки внизу */}
										</div>
									</div>
								))}
								{filtered.length === 0 && (
									<div className='text-gray-500 dark:text-gray-400 col-span-full text-center py-10'>
										Нет машин, соответствующих фильтрам
									</div>
								)}
							</div>
						</div>
					</div>
				</main>
			</div>
		</div>
	)
}
