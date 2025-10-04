'use client'
import useDarkSide from '@/hook/useDarkSide'
import { useRouter } from '@/i18n/navigation'
import Link from 'next/link'
import { useState } from 'react'
import './headercss.css'
export default function Navbar() {
	const [theme, setTheme] = useDarkSide()
	const [isOpen, setIsOpen] = useState(false)
	const toggleMenu = () => setIsOpen(!isOpen)
	const router = useRouter()

	const navLinks = [
		{ href: '/', label: 'Главная' },
		{ href: '/catalog', label: 'Каталог' },
		{ href: '/about', label: 'О нас' },
		{ href: '/companies', label: 'Компании' },
		{ href: '/contact', label: 'Контакты' },
		{ href: '/aiChat', label: 'AI Chat' },
		{ href: '/orders', label: 'Мои брони', big: true },
	]
	return (
		<div className='bg-red dark:bg-slate-900  font-display '>
			<div className='flex flex-col'>
				<header className=' w-full top-0 z-40 bg-background-light/80  backdrop-blur-sm '>
					<div className='container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 dark:text-white'>
						<Link className='flex items-center gap-3' href='/'>
							{/* <svg
								className='h-8 w-8 text-[#0c7ff2]'
								fill='currentColor'
								viewBox='0 0 24 24'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path d='M6.34299 21.75H3.04701C2.31602 21.75 1.72201 21.156 1.72201 20.425V17.075C1.72201 16.344 2.31602 15.75 3.04701 15.75H6.34299C7.07401 15.75 7.66799 16.344 7.66799 17.075V20.425C7.66799 21.156 7.07401 21.75 6.34299 21.75Z'></path>
								<path d='M6.34299 8.25H3.04701C2.31602 8.25 1.72201 7.65599 1.72201 6.925V3.575C1.72201 2.844 2.31602 2.25 3.04701 2.25H6.34299C7.07401 2.25 7.66799 2.844 7.66799 3.575V6.925C7.66799 7.65599 7.07401 8.25 6.34299 8.25Z'></path>
								<path d='M20.953 8.25H10.883V2.25H20.953C21.684 2.25 22.278 2.844 22.278 3.575V6.925C22.278 7.65599 21.684 8.25 20.953 8.25Z'></path>
								<path d='M20.953 21.75H10.883V15.75H20.953C21.684 15.75 22.278 16.344 22.278 17.075V20.425C22.278 21.156 21.684 21.75 20.953 21.75Z'></path>
							</svg> */}
							<h2 className='text-2xl font-bold text-[#0080ff]'>RentAuto.tj</h2>
						</Link>
						<nav className='hidden md:flex items-center gap-8'>
							<Link
								className='text-xl font-semibold hover:text-primary transition-colors text-outline'
								href='/'
							>
								Главная
							</Link>
							<Link
								className='text-xl font-semibold hover:text-primary transition-colors'
								href='catalog'
							>
								Каталог
							</Link>
							<Link
								className='text-xl font-semibold hover:text-primary transition-colors'
								href='/about'
							>
								О нас
							</Link>
							<Link
								href='/companies'
								className='text-lg font-semibold hover:text-primary transition-colors'
							>
								Компании
							</Link>
							<Link
								className='text-xl font-semibold hover:text-primary transition-colors'
								href='/contact'
							>
								Контакты
							</Link>
							<Link
								className='text-xl font-semibold hover:text-primary transition-colors'
								href='/orders'
							>
								Мои брони
							</Link>
							<Link
								href='/aiChat'
								className='relative text-lg font-bold 
             bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 
             bg-clip-text text-transparent 
             transition-all duration-300 
             hover:scale-105 hover:drop-shadow-[0_0_10px_rgba(168,85,247,0.7)]
             active:scale-95'
							>
								🤖 AI Chat
							</Link>
						</nav>
						<div className='flex items-center gap-4 mr-[60px]'>
							<button
								disabled={localStorage.getItem('access_token')||undefined}
								className='bg-[#0c7ff2] text-white text-sm font-bold px-4 h-10 rounded-lg flex items-center justify-center  hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
							>
								<Link
									href={!localStorage.getItem('access_token') ? 'login' : ''}
								>
									<span>
										{localStorage.getItem('access_token') ? 'LOGGED' : 'LOGIN'}
									</span>
								</Link>
							</button>
							<button className='bg-[#0c7ff2] text-white text-sm font-bold px-4 h-10 rounded-lg flex items-center justify-center  hover:bg-blue-600 transition-colors max-sm:hidden'>
								<Link href={'registration'}>
									<span>Регистрация</span>
								</Link>
							</button>
							<button
								className='bg-[#0c7ff2] text-white text-sm font-bold px-4 h-10 rounded-lg flex items-center justify-center  hover:bg-blue-600 transition-colors max-sm:hidden'
								onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
							>
								{theme}
							</button>

							<button
								onClick={toggleMenu}
								className='md:hidden p-2 rounded-lg bg-primary/10 dark:bg-primary/20 text-primary ml-2'
							>
								<svg
									className='h-6 w-6'
									fill='none'
									stroke='currentColor'
									strokeWidth='2'
									viewBox='0 0 24 24'
									xmlns='http://www.w3.org/2000/svg'
								>
									{isOpen ? (
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											d='M6 18L18 6M6 6l12 12'
										/>
									) : (
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											d='M4 6h16M4 12h16M4 18h16'
										/>
									)}
								</svg>
							</button>
						</div>
					</div>
				</header>
				<div
					className={`md:hidden transition-all duration-300 ${
						isOpen ? 'max-h-screen' : 'max-h-0 overflow-hidden'
					}`}
				>
					<nav className='flex flex-col bg-background-light dark:bg-slate-900 px-4 pb-4 gap-4 dark:text-white'>
						{navLinks.map(({ href, label, big }) => {
							const isActive = router.pathname === href
							return (
								<Link
									key={href}
									href={href}
									className={`${
										big ? 'text-xl' : 'text-lg'
									} font-semibold transition-all duration-200 relative 
              hover:text-primary hover:translate-x-1
              active:scale-95
              ${
								isActive
									? 'text-primary after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-primary rounded-sm'
									: 'text-gray-700 dark:text-gray-200'
							}`}
								>
									{label}
								</Link>
							)
						})}

						<Link
							href='/login'
							className='bg-[#0c7ff2] text-white text-sm font-bold px-4 h-10 rounded-lg flex items-center justify-center hover:bg-blue-600 active:scale-95 transition-all'
						>
							Войти
						</Link>

						<Link
							href='/registration'
							className='bg-[#0c7ff2] text-white text-sm font-bold px-4 h-10 rounded-lg flex items-center justify-center hover:bg-blue-600 active:scale-95 transition-all'
						>
							Регистрация
						</Link>

						<button
							className='bg-[#0c7ff2] text-white text-sm font-bold px-4 h-10 rounded-lg flex items-center justify-center hover:bg-blue-600 active:scale-95 transition-all'
							onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
						>
							{theme === 'dark' ? '🌙 Dark' : '☀️ Light'}
						</button>
					</nav>
				</div>
			</div>
		</div>
	)
}
