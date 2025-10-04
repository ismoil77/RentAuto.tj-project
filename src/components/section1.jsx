'use client'

import { useTranslations } from 'next-intl'
import Link from 'next/link'

export default function SectionHome() {
	const t = useTranslations('SectionHome')

	return (
		<div className='bg-background-light dark:bg-slate-900 font-display text-content-light dark:text-content-dark'>
			<div className='flex min-h-screen flex-col '>
				<main className='flex-grow'>
					<section className='relative flex justify-center items-center bg-hero bg-cover  bg-center h-screen'>
						<div className=' mx-auto px-4 sm:px-6  lg:px-8 py-24 sm:py-32 lg:py-48 flex flex-col items-center justify-center text-center text-white max-w-[800px] backdrop-blur-sm h-[500px] rounded'>
							<h1 className='text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight max-w-4xl '>
								{t('heroTitlePrefix')}
								<span className='text-[#0c7ff2]'>
									{t('heroTitleHighlight')}
								</span>
							</h1>
							<p className='mt-4 max-w-2xl text-base md:text-lg text-white/90'>
								{t('heroSubtitle')}
							</p>
							<form className='mt-10 w-full max-w-3xl bg-background-light/20 dark:bg-background-dark/30 backdrop-blur-md p-4 rounded-lg shadow-2xl'>
								<div className='grid grid-cols-1 md:grid-cols-4 gap-4 items-end'>
									<div className='col-span-1 md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-4'>
										{/* Город */}
										<div>
											<label className='sr-only' htmlFor='city'>
												{t('cityPlaceholder')}
											</label>
											<div className='relative'>
												<div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
													<svg
														className='text-subtle-light dark:text-subtle-dark'
														fill='none'
														height='20'
														stroke='currentColor'
														strokeLinecap='round'
														strokeLinejoin='round'
														strokeWidth='2'
														viewBox='0 0 24 24'
														width='20'
														xmlns='http://www.w3.org/2000/svg'
													>
														<path d='M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z'></path>
														<circle cx='12' cy='10' r='3'></circle>
													</svg>
												</div>
												<input
													className='w-full h-14 pl-10 pr-4 rounded-lg bg-background-light dark:bg-slate-900 border border-border-light dark:border-border-dark focus:ring-2 focus:ring-primary focus:border-primary transition text-content-light dark:text-content-dark placeholder:text-subtle-light dark:placeholder:text-subtle-dark'
													id='city'
													placeholder={t('cityPlaceholder')}
													type='text'
												/>
											</div>
										</div>

										{/* Марка/модель */}
										<div>
											<label className='sr-only' htmlFor='car'>
												{t('carPlaceholder')}
											</label>
											<div className='relative'>
												<div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
													<svg
														className='text-subtle-light dark:text-subtle-dark'
														fill='none'
														height='20'
														stroke='currentColor'
														strokeLinecap='round'
														strokeLinejoin='round'
														strokeWidth='2'
														viewBox='0 0 24 24'
														width='20'
														xmlns='http://www.w3.org/2000/svg'
													>
														<path d='m10 17 2 2 4-4'></path>
														<path d='M7 11l2 2 4-4'></path>
														<path d='M3 22v-6l4-4 4.5 4.5L16 12l2-2 3 3v6H3Z'></path>
													</svg>
												</div>
												<input
													className='w-full h-14 pl-10 pr-4 rounded-lg bg-background-light dark:bg-slate-900 border border-border-light dark:border-border-dark focus:ring-2 focus:ring-primary focus:border-primary transition text-content-light dark:text-content-dark placeholder:text-subtle-light dark:placeholder:text-subtle-dark'
													id='car'
													placeholder={t('carPlaceholder')}
													type='text'
												/>
											</div>
										</div>

										{/* Даты аренды */}
										<div>
											<label className='sr-only' htmlFor='dates'>
												{t('datesPlaceholder')}
											</label>
											<div className='relative'>
												<div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
													<svg
														className='text-subtle-light dark:text-subtle-dark'
														fill='none'
														height='20'
														stroke='currentColor'
														strokeLinecap='round'
														strokeLinejoin='round'
														strokeWidth='2'
														viewBox='0 0 24 24'
														width='20'
														xmlns='http://www.w3.org/2000/svg'
													>
														<rect
															height='18'
															rx='2'
															ry='2'
															width='18'
															x='3'
															y='4'
														></rect>
														<line x1='16' x2='16' y1='2' y2='6'></line>
														<line x1='8' x2='8' y1='2' y2='6'></line>
														<line x1='3' x2='21' y1='10' y2='10'></line>
													</svg>
												</div>
												<input
													className='w-full h-14 pl-10 pr-4 rounded-lg bg-background-light dark:bg-slate-900 border border-border-light dark:border-border-dark focus:ring-2 focus:ring-primary focus:border-primary transition text-content-light dark:text-content-dark placeholder:text-subtle-light dark:placeholder:text-subtle-dark'
													id='dates'
													placeholder={t('datesPlaceholder')}
													type='text'
												/>
											</div>
										</div>
									</div>

									{/* Кнопка */}
								<Link href={'/catalog'}>	<button
										className='w-full col-span-1 h-14 bg-[#0c7ff2] text-white text-base font-bold rounded-lg flex items-center justify-center gap-2 hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-primary/50'
										type='button'
									>
										<svg
											fill='none'
											height='20'
											stroke='currentColor'
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='2'
											viewBox='0 0 24 24'
											width='20'
											xmlns='http://www.w3.org/2000/svg'
										>
											<circle cx='11' cy='11' r='8'></circle>
											<path d='m21 21-4.3-4.3'></path>
										</svg>
										<span>{t('searchButton')}</span>
									</button>
                  </Link>
								</div>
							</form>
						</div>
					</section>
				</main>
			</div>
		</div>
	)
}
