import { useTranslations } from 'next-intl'

export default function contact() {
	const t = useTranslations('SectionHome')
	return (
		<div className='bg-background-light dark:bg-slate-900 font-display text-gray-800 dark:text-gray-200'>
			<div className='flex flex-col min-h-screen'>
				<main className='flex-grow'>
					<section className='relative h-[60vh] min-h-[400px] flex items-center justify-center text-center text-white'>
						<div className='absolute inset-0 bg-black/50 z-10'></div>
						<img
							alt='Car on a scenic road in Tajikistan'
							className='absolute inset-0 w-full h-full object-cover'
							src='https://lh3.googleusercontent.com/aida-public/AB6AXuD82oaHuDt9LNWB9IR_7tP_UwLaeEJ5wxG7IEM7XEFkirWJWnc-pbxkdBxBx-NBNHUNO3LhP7BuhNT1NETG77Cuv-0dFV-5lBsxsOfVZfgV4QwMOnv3NjvFmQdk5fNL7mUdCDKPRNVWUDQdaAHjZPQ6iwmGetCpYn1Dt1QgAvZA4UpRN_6HnWQKAlaOKZT0AwSuZn-0l2rPcBWFLHecHJVgB0j5be6Hkt6bnYP3_Ine5iUpKJ-ZTCL2t1lrpoR_HdDjsCcnEQFHPjA'
						/>
						<div className='relative z-20 container mx-auto px-6'>
							<h1 className='text-5xl md:text-7xl font-extrabold tracking-tight'>
								О RentAuto.tj
							</h1>
							<p className='mt-4 text-xl md:text-2xl max-w-3xl mx-auto text-gray-200'>
								Мы — первый агрегатор аренды автомобилей в Таджикистане.
							</p>
						</div>
					</section>
					<section className='py-16 sm:py-24 bg-white dark:bg-background-dark'>
						<div className='container mx-auto px-6'>
							<div className='max-w-4xl mx-auto text-center'>
								<h2 className='text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white'>
									Наша миссия и ценности
								</h2>
								<p className='mt-4 text-lg text-gray-600 dark:text-gray-300'>
									Наша цель — сделать аренду автомобилей простой, доступной и
									надежной для каждого. Мы стремимся предоставить лучший сервис,
									объединяя на одной платформе проверенных арендодателей и
									качественные автомобили.
								</p>
							</div>
							<div className='mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center'>
								<div className='flex flex-col items-center'>
									<div className='flex items-center justify-center h-16 w-16 rounded-xl bg-primary/10 text-primary mb-4'>
									
									</div>
									<h3 className='text-xl font-bold text-gray-900 dark:text-white'>
										Надежность
									</h3>
									<p className='mt-2 text-gray-600 dark:text-gray-400'>
										Мы работаем только с проверенными партнерами и гарантируем
										исправность каждого автомобиля.
									</p>
								</div>
								<div className='flex flex-col items-center'>
									<div className='flex items-center justify-center h-16 w-16 rounded-xl bg-primary/10 text-primary mb-4'>
										
									</div>
									<h3 className='text-xl font-bold text-gray-900 dark:text-white'>
										Скорость
									</h3>
									<p className='mt-2 text-gray-600 dark:text-gray-400'>
										Быстрое и удобное онлайн-бронирование за несколько минут.
									</p>
								</div>
								<div className='flex flex-col items-center'>
									<div className='flex items-center justify-center h-16 w-16 rounded-xl bg-primary/10 text-primary mb-4'>
									
									</div>
									<h3 className='text-xl font-bold text-gray-900 dark:text-white'>
										Прозрачность
									</h3>
									<p className='mt-2 text-gray-600 dark:text-gray-400'>
										Никаких скрытых платежей. Все условия аренды понятны и
										доступны.
									</p>
								</div>
								<div className='flex flex-col items-center'>
									<div className='flex items-center justify-center h-16 w-16 rounded-xl bg-primary/10 text-primary mb-4'>
									
									</div>
									<h3 className='text-xl font-bold text-gray-900 dark:text-white'>
										Комфорт
									</h3>
									<p className='mt-2 text-gray-600 dark:text-gray-400'>
										Широкий выбор автомобилей премиум-класса для вашего
										удобства.
									</p>
								</div>
							</div>
						</div>
					</section>
					{/* <section className='py-16 sm:py-24 bg-background-light dark:bg-gray-900/50'>
						<div className='container mx-auto px-6'>
							<div className='max-w-4xl mx-auto text-center mb-16'>
								<h2 className='text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white'>
									{t('historyTitle')}
								</h2>
								<p className='mt-4 text-lg text-gray-600 dark:text-gray-300'>
									{t('historySubtitle')}
								</p>
							</div>
							<div className='relative max-w-2xl mx-auto'>
								<div className='border-l-2 border-primary/20 ml-2 absolute h-full'></div>
								<div className='space-y-12'>
									<div className='relative pl-8 timeline-item'>
										<h3 className='text-xl font-bold text-gray-900 dark:text-white'>
											{t('idea')}
										</h3>
										<p className='mt-2 text-gray-600 dark:text-gray-400'>
											{t('ideaDesc')}
										</p>
									</div>
									<div className='relative pl-8 timeline-item'>
										<h3 className='text-xl font-bold text-primary'>
											{t('launch')}
										</h3>
										<p className='mt-2 text-gray-600 dark:text-gray-400'>
											{t('launchDesc')}
										</p>
									</div>
									<div className='relative pl-8 timeline-item'>
										<h3 className='text-xl font-bold text-gray-900 dark:text-white'>
											{t('future')}
										</h3>
										<p className='mt-2 text-gray-600 dark:text-gray-400'>
											{t('futureDesc')}
										</p>
									</div>
								</div>
							</div>
						</div>
					</section> */}
					<section className='py-16 sm:py-24 bg-white dark:bg-background-dark'>
						<div className='container mx-auto px-6'>
							<div className='max-w-4xl mx-auto text-center mb-16'>
								<h2 className='text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white'>
									Наша команда
								</h2>
								<p className='mt-4 text-lg text-gray-600 dark:text-gray-300'>
									Люди, которые делают RentAuto.tj лучшим сервисом аренды авто.
								</p>
							</div>
							<div className='flex justify-center items-center'>
								<div className='text-center'>
									<img
										alt='CEO photo'
										className='w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-lg'
										src='https://crmapi.omuz.tj/crmfiles/profiles/1bbe42f8-c77c-4e3e-b2ae-7eff2409dfda.jpeg'
									/>
									<h3 className='text-lg font-bold text-gray-900 dark:text-white'>
										Вахидов Ismoil
									</h3>
									<p className='text-primary'>Основатель и CEO</p>
								</div>
							</div>
						</div>
					</section>
					<section className='bg-primary/5 dark:bg-primary/10'>
						<div className='container mx-auto px-6 py-16 text-center'>
							<h2 className='text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white'>
								Готовы к поездке?
							</h2>
							<p className='mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto'>
								Ознакомьтесь с нашим каталогом и найдите идеальный автомобиль
								для вашего следующего приключения.
							</p>
							<a
								className='mt-8 inline-block bg-primary text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-primary/90 transition-all focus:outline-none focus:ring-2 focus:ring-primary/50'
								href='#'
							>
								Выбрать автомобиль сейчас
							</a>
						</div>
					</section>
				</main>
			</div>
		</div>
	)
}
