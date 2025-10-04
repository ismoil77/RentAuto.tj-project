'use client'
import useDarkSide from '@/hook/useDarkSide'
import { useRouter } from '@/i18n/navigation'
import Link from 'next/link'
import { useState } from 'react'
import './headercss.css'
import { useTranslations } from 'next-intl'

export default function Navbar() {
	const [theme, setTheme] = useDarkSide()
	const [isOpen, setIsOpen] = useState(false)
	const toggleMenu = () => setIsOpen(!isOpen)
	const router = useRouter()
	const t = useTranslations('Header') // ← Используем Header, а не HomePage

	const navLinks = [
		{ href: '/', key: 'home' },
		{ href: '/catalog', key: 'catalog' },
		{ href: '/about', key: 'about' },
		{ href: '/companies', key: 'companies' },
		{ href: '/contact', key: 'contact' },
		{ href: '/aiChat', key: 'aiChat' },
		{ href: '/orders', key: 'myBookings', big: true },
	]

	return (
		<div className='bg-red dark:bg-slate-900 font-display'>
			<div className='flex flex-col'>
				<header className='w-full top-0 z-40 bg-background-light/80 backdrop-blur-sm'>
					<div className='container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 dark:text-white'>
						<Link className='flex items-center gap-3' href='/'>
							<h2 className='text-2xl font-bold text-[#0080ff]'>RentAuto.tj</h2>
						</Link>

						{/* Desktop Navigation */}
						<nav className='hidden md:flex items-center gap-8'>
							{navLinks.slice(0, -1).map(({ href, key }) => (
								<Link
									key={href}
									className='text-[17px] font-semibold hover:text-primary transition-colors text-outline hover:text-[#0080ff] hover:border-b-2 hover:border-[#0080ff]'
									href={href}
								>
									{t(key)}
								</Link>
							))}
							<Link
								href='/orders'
								className='text-[17px] font-semibold hover:text-primary transition-colors hover:text-[#0080ff] hover:border-b-2 hover:border-[#0080ff]'
							>
								{t('myBookings')}
							</Link>
							{/* <Link
								href='/aiChat'
								className='relative text-[10px] font-bold 
									bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 
									bg-clip-text text-transparent 
									transition-all duration-300 
									hover:scale-105 hover:drop-shadow-[0_0_10px_rgba(168,85,247,0.7)]
									active:scale-95'
							>
								{t('aiChat')}
							</Link> */}
						</nav>

						<div className='flex items-center gap-4 ml-[15px] mr-[60px]'>
							<button
								disabled={!!localStorage.getItem('access_token')}
								className='bg-[#0c7ff2] text-white text-sm font-bold px-4 h-10 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
							>
								<Link href={!localStorage.getItem('access_token') ? '/login' : '#'}>
									<span>
										{localStorage.getItem('access_token')
											? t('loggedIn')
											: t('login')}
									</span>
								</Link>
							</button>

							<button className='bg-[#0c7ff2] text-white text-sm font-bold px-4 h-10 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors max-sm:hidden'>
								<Link href='/registration'>
									<span>{t('register')}</span>
								</Link>
							</button>

							<button
								className='bg-[#0c7ff2] text-white text-sm font-bold px-4 h-10 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors max-sm:hidden'
								onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
							>
								{theme === 'dark' ? t('darkMode') : t('lightMode')}
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

				{/* Mobile Menu */}
				<div
					className={`md:hidden transition-all duration-300 ${
						isOpen ? 'max-h-screen' : 'max-h-0 overflow-hidden'
					}`}
				>
					<nav className='flex flex-col bg-background-light dark:bg-slate-900 px-4 pb-4 gap-4 dark:text-white'>
						{navLinks.map(({ href, key, big }) => {
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
									{t(key)}
								</Link>
							)
						})}

						<Link
							href='/login'
							className='bg-[#0c7ff2] text-white text-sm font-bold px-4 h-10 rounded-lg flex items-center justify-center hover:bg-blue-600 active:scale-95 transition-all'
						>
							{t('login')}
						</Link>

						<Link
							href='/registration'
							className='bg-[#0c7ff2] text-white text-sm font-bold px-4 h-10 rounded-lg flex items-center justify-center hover:bg-blue-600 active:scale-95 transition-all'
						>
							{t('register')}
						</Link>

						<button
							className='bg-[#0c7ff2] text-white text-sm font-bold px-4 h-10 rounded-lg flex items-center justify-center hover:bg-blue-600 active:scale-95 transition-all'
							onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
						>
							{theme === 'dark' ? t('darkMode') : t('lightMode')}
						</button>
					</nav>
				</div>
			</div>
		</div>
	)
}