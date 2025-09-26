import React from 'react'

export default function Footer() {
  return (
	 <div>
		<footer className='bg-gray-900 text-white'>
				<div className='container mx-auto px-6 py-12'>
					<div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
						<div>
							<a className='flex items-center space-x-2' href='#'>
								<svg
									className='w-8 h-8 text-[var(--primary-blue)]'
									fill='currentColor'
									viewBox='0 0 24 24'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path d='M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11C5.84 5 5.28 5.42 5.08 6.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z'></path>
								</svg>
								<span className='text-2xl font-bold'>RentAuto.tj</span>
							</a>
							<p className='mt-4 text-gray-400 text-sm'>
								Ваш агрегатор аренды автомобилей премиум-класса в Таджикистане.
							</p>
						</div>
						<div>
							<h4 className='font-bold text-lg mb-4'>Навигация</h4>
							<ul className='space-y-2 text-sm text-gray-400'>
								<li>
									<a className='hover:text-[var(--neon-blue)]' href='#'>
										Главная
									</a>
								</li>
								<li>
									<a className='hover:text-[var(--neon-blue)]' href='#'>
										Каталог
									</a>
								</li>
								<li>
									<a className='hover:text-[var(--neon-blue)]' href='#'>
										О нас
									</a>
								</li>
								<li>
									<a className='hover:text-[var(--neon-blue)]' href='#'>
										Контакты
									</a>
								</li>
							</ul>
						</div>
						<div>
							<h4 className='font-bold text-lg mb-4'>Контакты</h4>
							<ul className='space-y-2 text-sm text-gray-400'>
								<li className='flex items-center space-x-2'>
									<span className='material-symbols-outlined text-xl'>
										phone
									</span>
									<span>+992 (XXX) XXX-XX-XX</span>
								</li>
								<li className='flex items-center space-x-2'>
									<span className='material-symbols-outlined text-xl'>
										email
									</span>
									<span>info@rentauto.tj</span>
								</li>
							</ul>
						</div>
						<div>
							<h4 className='font-bold text-lg mb-4'>Мы в соцсетях</h4>
							<div className='flex space-x-4'>
								<a
									className='text-gray-400 hover:text-[var(--neon-blue)] transition-colors'
									href='#'
								>
									<svg
										aria-hidden='true'
										className='w-6 h-6'
										fill='currentColor'
										viewBox='0 0 24 24'
									>
										<path
											clip-rule='evenodd'
											d='M12.315 2c-4.043 0-4.555.018-6.138.09-1.583.072-2.678.342-3.62.723-.97.39-1.782 1-2.56 1.782-.777.778-1.392 1.59-1.782 2.56-.381.942-.65 2.037-.723 3.62C2.018 7.445 2 7.957 2 12s.018 4.555.09 6.138c.072 1.583.342 2.678.723 3.62.39.97 1 1.782 1.782 2.56.778.777 1.59 1.392 2.56 1.782.942.38 2.037.65 3.62.723 1.583.072 2.095.09 6.138.09s4.555-.018 6.138-.09c1.583-.072 2.678-.342 3.62-.723.97-.39 1.782-1 2.56-1.782.777-.778 1.392-1.59 1.782-2.56.38-.942.65-2.037.723-3.62.072-1.583.09-2.095.09-6.138s-.018-4.555-.09-6.138c-.072-1.583-.342-2.678-.723-3.62-.39-.97-1-1.782-1.782-2.56-.778-.778-1.59-1.392-2.56-1.782C19.032 2.41 17.937 2.14 16.35 2.07 14.768 2.002 14.256 2 12.315 2zM8.423 15.88a1.532 1.532 0 11-3.064 0 1.532 1.532 0 013.064 0zm3.892-3.88a3.993 3.993 0 100 7.985 3.993 3.993 0 000-7.985zM12 17.388a5.388 5.388 0 110-10.776 5.388 5.388 0 010 10.776z'
											fill-rule='evenodd'
										></path>
									</svg>
								</a>
								<a
									className='text-gray-400 hover:text-[var(--neon-blue)] transition-colors'
									href='#'
								>
									<svg
										aria-hidden='true'
										className='w-6 h-6'
										fill='currentColor'
										viewBox='0 0 24 24'
									>
										<path d='M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.646 6.757l-1.42 6.425c-.14.64-.53.8-1.08.5l-2.14-1.57-1.04.99c-.11.11-.2.21-.36.37-.16.16-.33.3-.57.3l.22-2.2 4.02-3.64c.18-.16-.04-.25-.28-.09l-4.96 3.12-2.1-.65c-.63-.2-.68-.65.13-1.01l8.52-3.32c.54-.2 1.02.13.85.8z'></path>
									</svg>
								</a>
								<a
									className='text-gray-400 hover:text-[var(--neon-blue)] transition-colors'
									href='#'
								>
									<svg
										aria-hidden='true'
										className='w-6 h-6'
										fill='currentColor'
										viewBox='0 0 24 24'
									>
										<path
											clip-rule='evenodd'
											d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
											fill-rule='evenodd'
										></path>
									</svg>
								</a>
							</div>
						</div>
					</div>
					<div className='mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-500'>
						<p>© 2024 RentAuto.tj. Все права защищены.</p>
					</div>
				</div>
			</footer>
	 </div>
  )
}
