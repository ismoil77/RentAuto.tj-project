import './about.css'
export default function about() {
	return (
		<div className='text-gray-800'>
	
			<main>
				<section className='hero-section h-[70vh] flex items-center justify-center text-center text-white'>
					<div className='container mx-auto px-6 fade-in'>
						<h1 className='text-4xl md:text-6xl font-bold leading-tight mb-4'>
							Арендуй автомобиль премиум-класса в Таджикистане
						</h1>
						<p className='text-lg md:text-xl max-w-3xl mx-auto'>
							RentAuto.tj — твой агрегатор аренды автомобилей. Спорткары,
							седаны, внедорожники и электрокары — всё в одном месте.
						</p>
						<div className='mt-8 bg-white/20 backdrop-blur-md p-4 md:p-6 rounded-xl max-w-5xl mx-auto'>
							<form className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-center'>
								<div className='lg:col-span-1'>
									<select className='w-full bg-white/80 text-gray-700 border-0 rounded-md p-3 focus:ring-2 focus:ring-[var(--neon-blue)]'>
										<option>Душанбе</option>
										<option>Худжанд</option>
										<option>Бохтар</option>
										<option>Хорог</option>
									</select>
								</div>
								<div className='lg:col-span-1'>
									<input
										className='w-full bg-white/80 text-gray-700 border-0 rounded-md p-3 focus:ring-2 focus:ring-[var(--neon-blue)]'
										placeholder='Марка/Модель'
										type='text'
									/>
								</div>
								<div className='md:col-span-1'>
									<input
										className='w-full bg-white/80 text-gray-700 border-0 rounded-md p-3 focus:ring-2 focus:ring-[var(--neon-blue)]'
										placeholder='Дата начала'
										type='date'
									/>
								</div>
								<div className='md:col-span-1'>
									<input
										className='w-full bg-white/80 text-gray-700 border-0 rounded-md p-3 focus:ring-2 focus:ring-[var(--neon-blue)]'
										placeholder='Дата окончания'
										type='date'
									/>
								</div>
								<button
									className='gradient-button text-white font-bold py-3 px-6 rounded-lg w-full lg:col-span-1 hover:scale-105'
									type='submit'
								>
									Найти машину
								</button>
							</form>
						</div>
					</div>
				</section>
				<section className='py-20 bg-white dark:bg-[var(--card-dark-bg)]'>
					<div className='container mx-auto px-6 text-center'>
						<h2 className='text-3xl font-bold mb-2 text-gray-900 dark:text-white'>
							Почему RentAuto.tj?
						</h2>
						<p className='text-gray-600 dark:text-gray-400 mb-12'>
							Ваш надежный партнер в мире премиум автомобилей.
						</p>
						<div className='grid grid-cols-1 md:grid-cols-3 gap-8 fade-in'>
							<div className='p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-light-gray dark:bg-dark-bg'>
								<span className='material-symbols-outlined text-5xl neon-icon mb-4'>
									directions_car
								</span>
								<h3 className='text-xl font-bold mb-2 text-gray-900 dark:text-white'>
									Большой выбор авто
								</h3>
								<p className='text-gray-600 dark:text-gray-400'>
									От спорткаров до внедорожников — найдите идеальный автомобиль
									для любой поездки.
								</p>
							</div>
							<div className='p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-light-gray dark:bg-dark-bg'>
								<span className='material-symbols-outlined text-5xl neon-icon mb-4'>
									schedule
								</span>
								<h3 className='text-xl font-bold mb-2 text-gray-900 dark:text-white'>
									Онлайн-бронирование за 1 минуту
								</h3>
								<p className='text-gray-600 dark:text-gray-400'>
									Простой и быстрый процесс бронирования, который экономит ваше
									время.
								</p>
							</div>
							<div className='p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-light-gray dark:bg-dark-bg'>
								<span className='material-symbols-outlined text-5xl neon-icon mb-4'>
									verified_user
								</span>
								<h3 className='text-xl font-bold mb-2 text-gray-900 dark:text-white'>
									Прозрачные цены
								</h3>
								<p className='text-gray-600 dark:text-gray-400'>
									Никаких скрытых платежей. Вы платите только ту цену, которую
									видите.
								</p>
							</div>
						</div>
					</div>
				</section>
				<section className='py-20'>
					<div className='container mx-auto px-6 text-center'>
						<h2 className='text-3xl font-bold mb-12 text-gray-900 dark:text-white'>
							Как это работает
						</h2>
						<div className='grid grid-cols-1 md:grid-cols-3 gap-8 relative fade-in'>
							<div className='absolute top-1/2 left-0 w-full h-1 bg-gray-200 dark:bg-gray-700 hidden md:block'></div>
							<div
								className='absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-[var(--primary-blue)] to-[var(--neon-blue)] hidden md:block'
								
							></div>
							<div className='relative z-10 flex flex-col items-center'>
								<div className='w-16 h-16 rounded-full bg-[var(--primary-blue)] text-white flex items-center justify-center text-2xl font-bold mb-4 border-4 border-white dark:border-[var(--light-gray)]'>
									1
								</div>
								<h3 className='text-xl font-bold mb-2 text-gray-900 dark:text-white'>
									Выбери автомобиль
								</h3>
								<p className='text-gray-600 dark:text-gray-400'>
									Используйте фильтры, чтобы найти подходящий вариант.
								</p>
							</div>
							<div className='relative z-10 flex flex-col items-center'>
								<div className='w-16 h-16 rounded-full bg-[var(--primary-blue)] text-white flex items-center justify-center text-2xl font-bold mb-4 border-4 border-white dark:border-[var(--light-gray)]'>
									2
								</div>
								<h3 className='text-xl font-bold mb-2 text-gray-900 dark:text-white'>
									Забронируй онлайн
								</h3>
								<p className='text-gray-600 dark:text-gray-400'>
									Заполните простую форму и оплатите безопасно.
								</p>
							</div>
							<div className='relative z-10 flex flex-col items-center'>
								<div className='w-16 h-16 rounded-full bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-200 flex items-center justify-center text-2xl font-bold mb-4 border-4 border-white dark:border-[var(--light-gray)]'>
									3
								</div>
								<h3 className='text-xl font-bold mb-2 text-gray-900 dark:text-white'>
									Забери ключи
								</h3>
								<p className='text-gray-600 dark:text-gray-400'>
									Получите ваш автомобиль в удобном для вас месте.
								</p>
							</div>
						</div>
					</div>
				</section>
				<section className='py-20 bg-white dark:bg-[var(--card-dark-bg)]'>
					<div className='container mx-auto px-6'>
						<h2 className='text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white'>
							Популярные направления
						</h2>
						<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 fade-in'>
							<div className='relative rounded-lg overflow-hidden group h-80'>
								<img
									alt='Душанбе'
									className='w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500'
									src='https://lh3.googleusercontent.com/aida-public/AB6AXuC-BCzMzXWIXKELBHU4kTmgY8XKGyZzk0pG0tSxlmm6_39J-FpPGZuFTlatnYZRtO9LP8HYXVbCzRBrwsZ-Ajgl6QX4HgpAEFCIRod01niEh8RuF_OUYwDnyCicbHaNGXsMLTr_eIf4WZRLJJafo0VS1wR-6N62xmeOBZKfZXtfpmr1ICqrZSH-QLaHXwVZbVJDG1BKYSBZCLXtdZct2TSkY6wu-EOwLzzMW9HPCh9MVNH2Too6WrzeWdBM_T8pMxQodJnOJl_Q-DE'
								/>
								<div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent'></div>
								<div className='absolute bottom-0 left-0 p-6'>
									<h3 className='text-2xl font-bold text-white'>Душанбе</h3>
									<button className='mt-2 gradient-button text-white text-sm font-semibold py-2 px-4 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
										Посмотреть авто
									</button>
								</div>
							</div>
							<div className='relative rounded-lg overflow-hidden group h-80'>
								<img
									alt='Худжанд'
									className='w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500'
									src='https://lh3.googleusercontent.com/aida-public/AB6AXuBaMaGsr8lLEOZ8WqoO8xnI1ct7KBUAFhgwXpZvWXBN16h7hAhy2Xu2Mw1AH-sFJK1iVX3VYrNfVO49t7ey10eMLPYee6Y-jRHgAbuSjPNaSoP7y5yiY0xHj3YTvT1HVnpebD2SUmnBW2YCvXHtXOh66MhOd12dLCZc6AWWP1fSnusTPOoeqAh-acHmHTSWG6zNBZaXV6_h4GvdKK2SuXOLFUIDf5TbLQYds1GKwS5EYhBcwTYZO472I850-CbWoqzracrPgSdwgxE'
								/>
								<div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent'></div>
								<div className='absolute bottom-0 left-0 p-6'>
									<h3 className='text-2xl font-bold text-white'>Худжанд</h3>
									<button className='mt-2 gradient-button text-white text-sm font-semibold py-2 px-4 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
										Посмотреть авто
									</button>
								</div>
							</div>
							<div className='relative rounded-lg overflow-hidden group h-80'>
								<img
									alt='Хорог'
									className='w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500'
									src='https://lh3.googleusercontent.com/aida-public/AB6AXuDfW02Om2dfPB22XE0C59j4rzh4H7glKWtZ9TtNokC5kbwm8iuT6m2X6_OJ21oEG00L38EzlkRSDjKWxbIQD1XdCqjGsktf9cbzhqXefTlC1NxdRe4pGvJJGm52q3mwxz20gRLX3G65HiVv5_qFTeiWjeb41lCQA8Fb6AVu4TNRxqKDbdqvkPk4XblFUxTt3bzNudwvfKDFByGd8xuT8QS8DV9OyXK5xeYG2zVX7SeVhCYc0HAepgu2UZsIEV8YeCwg0QKLhJK7RGw'
								/>
								<div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent'></div>
								<div className='absolute bottom-0 left-0 p-6'>
									<h3 className='text-2xl font-bold text-white'>Хорог</h3>
									<button className='mt-2 gradient-button text-white text-sm font-semibold py-2 px-4 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
										Посмотреть авто
									</button>
								</div>
							</div>
							<div className='relative rounded-lg overflow-hidden group h-80'>
								<img
									alt='Бохтар'
									className='w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500'
									src='https://lh3.googleusercontent.com/aida-public/AB6AXuCgOG7VQVW3KNMK8RfHr_r3xxtmYAiE-vxL8NYwsbFtvqXolsrmKedU0o6XDMS0E_vLFHffac3YePhz9QsvIr4hc8tKTKD4ZwpZhIBzTB-XAh3_gcJDdmtQmOfBAieaXRK71zloYLk3fOjPSCmuzIpOi4e-iYaAFpPOL6e05gxJNHj75xCx50zmwdBO3p7wcUw5mZDYTdhRd-_pBv_2xil4gRkuG7_Rxsn6jj7v05KIBdP0iZlBuf7EbPKebLg5QotrHW4ediHCosI'
								/>
								<div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent'></div>
								<div className='absolute bottom-0 left-0 p-6'>
									<h3 className='text-2xl font-bold text-white'>Бохтар</h3>
									<button className='mt-2 gradient-button text-white text-sm font-semibold py-2 px-4 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
										Посмотреть авто
									</button>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className='py-20'>
					<div className='container mx-auto px-6'>
						<div className='flex flex-col lg:flex-row items-center gap-12 fade-in'>
							<div className='lg:w-1/2'>
								<h2 className='text-3xl font-bold mb-4 text-gray-900 dark:text-white'>
									О RentAuto.tj
								</h2>
								<p className='text-gray-600 dark:text-gray-400 mb-4'>
									Наша миссия — предоставить лучший сервис по аренде
									премиум-автомобилей в Таджикистане. Мы стремимся сделать
									каждую вашу поездку незабываемой, предлагая только лучшие
									автомобили и первоклассное обслуживание.
								</p>
								<blockquote className='border-l-4 border-[var(--primary-blue)] pl-4 italic text-gray-700 dark:text-gray-300 my-6'>
									"Путешествие в тысячу миль начинается с одного шага... и
									правильного автомобиля."
								</blockquote>
								<a
									className='gradient-button text-white px-8 py-3 rounded-lg font-semibold hover:scale-105 inline-block'
									href='#'
								>
									Узнать больше
								</a>
							</div>
							<div className='lg:w-1/2'>
								<img
									alt='About us'
									className='rounded-xl shadow-2xl w-full'
									src='https://lh3.googleusercontent.com/aida-public/AB6AXuA7wcxQxsOgJv5T5egyejatHp-zWsM5h7sjOqXyinX-hvbA7V7aSNKHof6CIy5EXhDlOkWo2i2DZ0OQUlNxiVIucoX50SGKV_Uj70dgY-oEiXdwr4tBE5rfAcNfcqLnndK9y8eXOfe28h4r7OjaOgj0xsSTgZBaZM_R6HhPoDzy1YlLa9fRLRuvGsSp0tvsHHDIZBERn3XAEsUYK1ltqfLrbu0Bzfi9VkUtL7PvVwN9sLdt6eMrIFbsN90pGUbITo_wDP_xbLBTCNI'
								/>
							</div>
						</div>
					</div>
				</section>
			</main>
			
		</div>
	)
}
