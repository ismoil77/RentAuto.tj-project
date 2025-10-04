'use client'
import BookingForm from '@/components/BookingForm'
import GeminiChatModalMini from '@/components/chatWithGeminiMini'
import MarqueeRentals from '@/components/MarqueeRentals'
import SectionHome from '@/components/section1'
import UserLookup from '@/components/userLookUp'
import { useStore } from '@/store/useStore'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React, { use, useEffect } from 'react'
import { toast } from 'react-toastify'

export default function HomePage() {
	const router = useRouter()
	const [formOpen, setFormOpen] = React.useState(null)
	const pathname = usePathname()
	const {fetchCars,cars} = useStore()
	const handleChange = newLocale => {
		const segments = pathname.split('/')
		if (segments[1] && segments[1].length === 2) {
			segments[1] = newLocale
		} else {
			segments.unshift('', newLocale)
		}
		router.push(segments.join('/'))
	}
	function bronirovat(car) {
		if (localStorage.getItem('access_token')||undefined) {
			setFormOpen(car)
		} else {
			toast.warning('Пожалуйста, войдите в систему, чтобы забронировать автомобиль.')
		}
	}
	useEffect(() => {fetchCars()}, [])
	const t = useTranslations('HomePage')
	return (
		<>
			<select
				className="absolute top-3 right-3 z-50
    bg-[#0080ff]
    text-white
     dark:border-gray-600
    dark:text-gray-300
    rounded-md
    py-2.5 pl-3 pr-8
    text-sm
    cursor-pointer
    focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
    appearance-none
    bg-[url('https://uxwing.com/wp-content/themes/uxwing/download/arrow-direction/arrow-down-icon.png')] 
    bg-no-repeat bg-[length:10px_6px] bg-[right_0.5rem_center]
    transition-colors duration-200
    hover:border-gray-400 dark:hover:border-gray-500"
				onChange={e => handleChange(e.target.value)}
				defaultValue={pathname.split('/')[1] || 'en'}
			>
				<option value='en'>EN</option>
				<option value='ru'>RU</option>
				<option value='tg'>TJ</option>
			</select>
			<SectionHome />
			<GeminiChatModalMini />
			{formOpen && (
				<BookingForm car={formOpen} onClose={() => setFormOpen(null)} />
			)}
			<section className='py-20 bg-white dark:bg-slate-900'>
			<div className='container mx-auto px-6 text-center'>
				<h2 className='text-3xl font-bold mb-2 text-gray-900 dark:text-white'>
					{t('whyTitle')}
				</h2>
				<p className='text-gray-600 dark:text-gray-400 mb-12'>
					{t('whySubtitle')}
				</p>
				<div className='grid grid-cols-1 md:grid-cols-4 gap-8 fade-in'>
					<div className='p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-light-gray dark:bg-dark-bg border-2 border-[#0080ff]'>
						<img
							src='https://st4.depositphotos.com/16122460/40561/i/450/depositphotos_405612086-stock-photo-man-buying-car-shaking-hands.jpg'
							alt={t('partnersAlt')}
							className='w-full object-cover h-[150px] rounded-md'
						/>
						<h3 className='text-xl font-bold mb-2 dark:text-white text-[#0080ff]'>
							{t('partnersTitle')}
						</h3>
						<p className='text-gray-600 dark:text-gray-400'>
							{t('partnersDesc')}
						</p>
					</div>
					<div className='p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-light-gray dark:bg-dark-bg border-[#0080ff] border-2'>
						<img
							src='https://assets.avtocod.ru/storage/2017-11/14/mceclip1(4).jpg'
							alt={t('selectionAlt')}
							className='w-full object-cover h-[150px] rounded-md'
						/>
						<h3 className='text-xl font-bold mb-2 text-[#0080ff] dark:text-white'>
							{t('selectionTitle')}
						</h3>
						<p className='text-gray-600 dark:text-gray-400'>
							{t('selectionDesc')}
						</p>
					</div>
					<div className='p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-light-gray dark:bg-dark-bg border-[#0080ff] border-2'>
						<img
							src='https://www.rentacarantalya.biz/webhox/resim/ce66c3d347a6d0833dd8a8873687096a.jpg'
							alt={t('bookingAlt')}
							className='w-full object-cover h-[150px] rounded-md'
						/>
						<h3 className='text-xl font-bold mb-2 text-[#0080ff] dark:text-white'>
							{t('bookingTitle')}
						</h3>
						<p className='text-gray-600 dark:text-gray-400'>
							{t('bookingDesc')}
						</p>
					</div>
					<div className='p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-light-gray dark:bg-dark-bg border-[#0080ff] border-2'>
						<img
							src='https://img.umedia.uz/wp-content/uploads/2024/11/kontragent-600x340.jpg'
							alt={t('pricingAlt')}
							className='w-full object-cover h-[150px] rounded-md'
						/>
						<h3 className='text-xl font-bold mb-2 text-[#0080ff] dark:text-white'>
							{t('pricingTitle')}
						</h3>
						<p className='text-gray-600 dark:text-gray-400'>
							{t('pricingDesc')}
						</p>
					</div>
				</div>
			</div>
		</section>
			<MarqueeRentals speed={20} />

			<div className='flex-1 dark:bg-slate-900'>
				<h1 className='text-4xl font-bold mb-8 text-gray-900 dark:text-white text-center pt-[20px]'>
					{t('catalogCars')}
				</h1>
				<div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 w-[97%] mx-auto pb-20 dark:bg-slate-900'>
					{cars.map((car, index) => (
						<div
							key={index}
							className='group bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-300'
						>
							<div className='relative'>
								<img
									alt={car.name}
									className='w-full h-56 object-cover'
									src={car.image}
								/>

								<div className="absolute top-55 left-0 w-full overflow-hidden z-50 bg-red-500">
  <div className="animate-marquee whitespace-nowrap   text-sm px-2">
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
				</div>
			</div>

			<MarqueeRentals speed={20} />

			<div className='bg-background-light dark:bg-slate-900 font-display text-gray-800 dark:text-gray-200'>
				<div className='flex flex-col min-h-screen'>
					<main className='flex-grow'>
						<section className='py-16 sm:py-24 dark:bg-slate-900'>
							<div className='container mx-auto px-6'>
								<div className='max-w-4xl mx-auto text-center relative'>
									<div className='animated-border rounded-2xl p-0.5'>
										<div className='bg-background-light dark:bg-slate-900 rounded-2xl p-6'>
											<h2 className='text-3xl sm:text-4xl font-bold text-[#0080ff] dark:text-white'>
												{t('missionTitle')}
											</h2>
											<p className='mt-4 text-lg text-gray-600 dark:text-gray-300'>
												{t('missionDescription')}
											</p>
										</div>
									</div>
								</div>
								<div className='mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center'>
									<div className='flex flex-col items-center border-2 border-[#0080ff] rounded-lg p-4'>
										<img
											src='https://a.d-cd.net/MhmZwEfiIjzgcklPgRyITCMr3Gc-960.jpg'
											alt=''
											className='w-[100%] object-cover h-[150px] rounded-lg '
										/>
										<h3 className='text-xl font-bold text-[#0080ff] dark:text-white'>
											{t('reliability')}
										</h3>
										<p className='mt-2 text-gray-600 dark:text-gray-400'>
											{t('reliabilityDesc')}
										</p>
									</div>
									<div className='flex flex-col items-center border-2 border-[#0080ff] rounded-lg p-4'>
										<img
											src='https://news.store.rambler.ru/img/0bb0a30fe9ea7019cef6f87c64653678?img-format=auto&img-1-resize=height:400,fit:max&img-2-filter=sharpen'
											alt=''
											className='w-[100%] object-cover h-[150px] rounded-lg'
										/>
										<h3 className='text-xl font-bold text-[#0080ff] dark:text-white'>
											{t('speed')}
										</h3>
										<p className='mt-2 text-gray-600 dark:text-gray-400'>
											{t('speedDesc')}
										</p>
									</div>
									<div className='flex flex-col items-center border-2 border-[#0080ff] rounded-lg p-4'>
										<img
											src='https://www.iphones.ru/wp-content/uploads/2023/03/ccf840_efcb5267732349f7a4ff062c2a7b9614mv2.jpg'
											alt=''
											className='w-[100%] object-cover h-[150px] rounded-lg '
										/>
										<h3 className='text-xl font-bold text-[#0080ff] dark:text-white'>
											{t('transparency')}
										</h3>
										<p className='mt-2 text-gray-600 dark:text-gray-400'>
											{t('transparencyDesc')}
										</p>
									</div>
									<div className='flex flex-col items-center border-2 border-[#0080ff] rounded-lg p-4'>
										<img
											src='https://taxi-planet.ru/upload/klassy-avto-v-taksi-premium.png'
											alt=''
											className='w-[100%] object-cover h-[150px] rounded'
										/>
										<h3 className='text-xl font-bold text-[#0080ff] dark:text-white'>
											{t('comfort')}
										</h3>
										<p className='mt-2 text-gray-600 dark:text-gray-400'>
											{t('comfortDesc')}
										</p>
									</div>
								</div>
							</div>
						</section>
					</main>
				</div>
			</div>
		</>
	)
}
