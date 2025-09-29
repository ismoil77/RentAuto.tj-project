'use client'
import SectionHome from '@/components/section1'
import SectionCatalog from '@/components/section2.jsx/section2'
import {useTranslations} from 'next-intl';
import { usePathname, useRouter } from 'next/navigation'
 
export default function HomePage() {
      const router = useRouter();
  const pathname = usePathname();
    const handleChange = (newLocale) => {
    
    const segments = pathname.split("/");
    if (segments[1] && segments[1].length === 2) {
      segments[1] = newLocale;
    } else {
      segments.unshift("", newLocale);
    }
    router.push(segments.join("/"));
  };

  const t = useTranslations('HomePage');
  return  <>
      <h1>{t('title')}</h1>
 <select
  className="absolute top-3 right-3 z-50
    bg-[#0080ff]
    text-white
     dark:border-gray-600
    text-gray-700 dark:text-gray-300
    rounded-md
    py-2.5 pl-3 pr-8
    text-sm
    cursor-pointer
    focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
    appearance-none
    bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEyIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggZD0iTTAuNzA3IDQuMjkzQTEgMSAwIDAgMSAuNzA3IDIuODg3TDEuNDE0IDEuNDY0YTEgMSAwIDAgMSAxLjQxNCAwbDUuNjU3IDUuNjU3YTEgMSAwIDAgMCAxLjQxNCAwTDExLjI5MyAyLjg4N2ExIDEgMCAwIDEgMS40MTQgMS40MTRMNi4zNTQgMTAuNjU3YTEgMSAwIDAgMS0xLjQxNCAwTDAuNzA3IDQuMjkzek1hMSAxIDAgMCAwIDAgMnoiIGZpbGw9IiM2MDY0NkMiLz4KPC9zdmc+')] 
    bg-no-repeat bg-[length:10px_6px] bg-[right_0.5rem_center]
    transition-colors duration-200
    hover:border-gray-400 dark:hover:border-gray-500"
  onChange={(e) => handleChange(e.target.value)}
  defaultValue={pathname.split('/')[1] || 'en'}
>
  <option value="en">EN</option>
  <option value="ru">RU</option>
</select>

      <SectionHome />

      <div className="bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-200">
        <div className="flex flex-col min-h-screen">
          <main className="flex-grow">
            <section className="py-16 sm:py-24 bg-white dark:bg-background-dark">
              <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center">
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
                    {t('missionTitle')}
                  </h2>
                  <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                    {t('missionDescription')}
                  </p>
                </div>
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
                  <div className="flex flex-col items-center">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {t('reliability')}
                    </h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-400">
                      {t('reliabilityDesc')}
                    </p>
                  </div>
                  <div className="flex flex-col items-center">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {t('speed')}
                    </h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-400">
                      {t('speedDesc')}
                    </p>
                  </div>
                  <div className="flex flex-col items-center">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {t('transparency')}
                    </h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-400">
                      {t('transparencyDesc')}
                    </p>
                  </div>
                  <div className="flex flex-col items-center">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {t('comfort')}
                    </h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-400">
                      {t('comfortDesc')}
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="py-16 sm:py-24 bg-background-light dark:bg-gray-900/50">
              <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center mb-16">
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
                    {t('historyTitle')}
                  </h2>
                  <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                    {t('historySubtitle')}
                  </p>
                </div>
                <div className="relative max-w-2xl mx-auto">
                  <div className="border-l-2 border-primary/20 ml-2 absolute h-full"></div>
                  <div className="space-y-12">
                    <div className="relative pl-8 timeline-item">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {t('idea')}
                      </h3>
                      <p className="mt-2 text-gray-600 dark:text-gray-400">
                        {t('ideaDesc')}
                      </p>
                    </div>
                    <div className="relative pl-8 timeline-item">
                      <h3 className="text-xl font-bold text-primary">
                        {t('launch')}
                      </h3>
                      <p className="mt-2 text-gray-600 dark:text-gray-400">
                        {t('launchDesc')}
                      </p>
                    </div>
                    <div className="relative pl-8 timeline-item">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {t('future')}
                      </h3>
                      <p className="mt-2 text-gray-600 dark:text-gray-400">
                        {t('futureDesc')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
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
								
								<h3 className='text-xl font-bold mb-2 text-gray-900 dark:text-white'>
									Большой выбор авто
								</h3>
								<p className='text-gray-600 dark:text-gray-400'>
									От спорткаров до внедорожников — найдите идеальный автомобиль
									для любой поездки.
								</p>
							</div>
							<div className='p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-light-gray dark:bg-dark-bg'>
								
								<h3 className='text-xl font-bold mb-2 text-gray-900 dark:text-white'>
									Онлайн-бронирование за 1 минуту
								</h3>
								<p className='text-gray-600 dark:text-gray-400'>
									Простой и быстрый процесс бронирования, который экономит ваше
									время.
								</p>
							</div>
							<div className='p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-light-gray dark:bg-dark-bg'>
								
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
    </>

}