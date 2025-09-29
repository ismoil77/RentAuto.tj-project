'use client'
import useDarkSide from '@/hook/useDarkSide'
import Link from 'next/link'
import './headercss.css'
export default function Navbar() {
	const [theme, setTheme] = useDarkSide()
	console.log(theme)

	return (
		<div className='bg-background-light dark:bg-background-dark font-display text-content-light dark:text-content-dark'>
			<div className='flex flex-col'>
				<header className='fixed w-full top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm '>
					<div className='container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3'>
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
								className='text-xl font-semibold hover:text-primary transition-colors'
								href='/contact'
							>
								Контакты
							</Link>
						</nav>
						<div className='flex items-center gap-4'>
							<button className='bg-[#0c7ff2] text-white text-sm font-bold px-4 h-10 rounded-lg flex items-center justify-center  hover:bg-blue-600 transition-colors'>
								<span>Войти</span>
							</button>
							<button
								className='bg-[#0c7ff2] text-white text-sm font-bold px-4 h-10 rounded-lg flex items-center justify-center  hover:bg-blue-600 transition-colors'
								onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
							>
								{theme}
							</button>

							<button className='md:hidden p-2 rounded-lg bg-primary/10 dark:bg-primary/20 text-primary'>
								<svg
									className='h-6 w-6'
									fill='none'
									height='24'
									stroke='currentColor'
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									viewBox='0 0 24 24'
									width='24'
									xmlns='http://www.w3.org/2000/svg'
								>
									<line x1='4' x2='20' y1='12' y2='12'></line>
									<line x1='4' x2='20' y1='6' y2='6'></line>
									<line x1='4' x2='20' y1='18' y2='18'></line>
								</svg>
							</button>
						</div>
					</div>
				</header>
			</div>
		</div>
	)
}
