import './section2.css'
export default function SectionCatalog() {
	return (
		<div className='bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-200'>
			<div className='flex flex-col min-h-screen'>
			
				<main className='container mx-auto px-6 py-8 flex-grow'>
					<div className='flex flex-col lg:flex-row gap-12'>
						<aside className='lg:w-1/4 xl:w-1/5'>
							<div className='bg-white dark:bg-background-dark p-6 rounded-xl shadow-sm'>
								<h2 className='text-2xl font-bold mb-6 text-gray-900 '>
									Фильтры
								</h2>
								<div className='space-y-6'>
									<div>
										<label
											className='block text-sm font-medium text-gray-700  mb-2'
											for='make'
										>
											Марка
										</label>
										<select
											className='w-full bg-background-light dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-primary focus:border-primary'
											id='make'
										>
											<option>Выберите марку</option>
											<option>BMW</option>
											<option>Mercedes-Benz</option>
											<option>Audi</option>
											<option>Porsche</option>
										</select>
									</div>
									<div>
										<label
											className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'
											for='model'
										>
											Модель
										</label>
										<select
											className='w-full bg-background-light dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-primary focus:border-primary'
											id='model'
										>
											<option>Выберите модель</option>
										</select>
									</div>
									<div>
										<label
											className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'
											for='body-type'
										>
											Тип кузова
										</label>
										<select
											className='w-full bg-background-light dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-primary focus:border-primary'
											id='body-type'
										>
											<option>Выберите тип</option>
											<option>Седан</option>
											<option>Внедорожник</option>
											<option>Спортивный</option>
										</select>
									</div>
									<div>
										<label
											className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'
											for='price'
										>
											Цена (TJS/день)
										</label>
										<div className='mt-4'>
											<input
												className='range-slider bg-gray-300 dark:bg-gray-700 [&amp;::-webkit-slider-thumb]:bg-primary [&amp;::-moz-range-thumb]:bg-primary'
												max='1000'
												min='100'
												type='range'
												value='550'
											/>
											<div className='flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1'>
												<span>100</span>
												<span>1000</span>
											</div>
										</div>
									</div>
									<button className='w-full bg-primary text-white py-3 rounded-lg font-bold hover:bg-primary/90 transition-all focus:outline-none focus:ring-2 focus:ring-primary/50'>
										Применить
									</button>
								</div>
							</div>
						</aside>
						<div className='flex-1'>
							<h1 className='text-4xl font-bold mb-8 text-gray-900 dark:text-white'>
								Каталог автомобилей
							</h1>
							<div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8'>
								<div className='group bg-white dark:bg-background-dark rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1'>
									<div className='relative'>
										<img
											alt='BMW M5 Competition'
											className='w-full h-56 object-cover'
											src='https://lh3.googleusercontent.com/aida-public/AB6AXuDIZbhO09-ADD2gOHrP7mDg8MpmZ7Y317S83OSRhhltLrADbGEx_OGS0slLcDVW8pbLZ6ikMfCJI-MxOtkvDh4f0R5Sl2sW1NT_G9Lz9R9SjhDlJB1T9opihmBGfY_zq4PKwkZtlRGL6SpZVriTEWKFqspBfdxXWY_GO632AfNd7jkJfQyRkc22CGpjCPqgPGf_O1MQL9nnnPYG3OIgw35B2A6gyxIhSBeAXMpsnkrxymENd95Ydfe3O7eqjJryoNFVEBKBfheK9uQ'
										/>
										<div className='absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
											<button className='bg-primary text-white px-6 py-3 rounded-lg font-bold hover:bg-primary/90 transition-all '>
												Забронировать
											</button>
										</div>
									</div>
									<div className='p-5'>
										<h3 className='text-xl font-bold text-gray-900 dark:text-white'>
											BMW M5 Competition
										</h3>
										<p className='text-sm text-gray-500 dark:text-gray-400 mt-1'>
											Спортивный автомобиль
										</p>
										<p className='text-lg text-[#0c7ff2] font-semibold text-primary mt-2'>
											от 500 TJS/день
										</p>
									</div>
								</div>
								<div className='group bg-white dark:bg-background-dark rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1'>
									<div className='relative'>
										<img
											alt='Mercedes-Benz S-Class'
											className='w-full h-56 object-cover'
											src='https://lh3.googleusercontent.com/aida-public/AB6AXuDf6oABCxE01li43ZrUScT1xyUDNlYPV6dAf9xIrezjs0ga9oW6qX8kyIQICPT5dwPorUQQc8UU903f355muLLsmO4ZS3aSvEL2n63SKb-hjnroyXFja4j0eky3NvG98ZK6Ah3ZRf7-0FcxpsqGOwFY1x3HtuVXvPqfR4jiEtD9n1xr5BeOvxB7t3ltVXrYJMYuwrnHJO9KbIqHPUGfUBh23RuDMPfMzVh9ofxDE3h5bPxyZn6sS1nQ-xvaEqcfblW_fGje_mJNTv8'
										/>
										<div className='absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
											<button className='bg-primary text-white px-6 py-3 rounded-lg font-bold hover:bg-primary/90 transition-all'>
												Забронировать
											</button>
										</div>
									</div>
									<div className='p-5'>
										<h3 className='text-xl font-bold text-gray-900 dark:text-white'>
											Mercedes-Benz S-Class
										</h3>
										<p className='text-sm text-gray-500 dark:text-gray-400 mt-1'>
											Бизнес
										</p>
										<p className='text-lg text-[#0c7ff2]  font-semibold text-primary mt-2'>
											от 450 TJS/день
										</p>
									</div>
								</div>
								<div className='group bg-white dark:bg-background-dark rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1'>
									<div className='relative'>
										<img
											alt='Audi Q7'
											className='w-full h-56 object-cover'
											src='https://lh3.googleusercontent.com/aida-public/AB6AXuD7ksvdhi4ZZwyYDy4AHp4XDTdvma1suBY4qOB-f9HTtSgL_5jjRUfPE5Bn1_PN_eTEGzmpuERtTPXk6T3OI8CsrxvnwqLeTs_WgI6vZoMxNj7-apCH58uWpJGNu4muspIJSbYZ40ImbTQbxqckNu_LnRM1_feaaZG0pKwbEUU2QFWnI0wqxKpdOjYLbmcakJrXAQCN1IfzgTecrWu5W6mF4zIss9lzuFRS5LSsTSMqFA8r-Qtf4Kp5i-7Dm61URNkdfl2JFkMcUPg'
										/>
										<div className='absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
											<button className='bg-primary text-white px-6 py-3 rounded-lg font-bold hover:bg-primary/90 transition-all'>
												Забронировать
											</button>
										</div>
									</div>
									<div className='p-5'>
										<h3 className='text-xl font-bold text-gray-900 dark:text-white'>
											Audi Q7
										</h3>
										<p className='text-sm text-gray-500 dark:text-gray-400 mt-1'>
											Внедорожник
										</p>
										<p className='text-lg text-[#0c7ff2]  font-semibold text-primary mt-2'>
											от 350 TJS/день
										</p>
									</div>
								</div>
								<div className='group bg-white dark:bg-background-dark rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1'>
									<div className='relative'>
										<img
											alt='Porsche 911 Carrera'
											className='w-full h-56 object-cover'
											src='https://lh3.googleusercontent.com/aida-public/AB6AXuBeDOMZxeGsPar4N1k-vzTlOAGEq6kS5YqZjpShK1HjGq4jonnSQzSxbPxFTYNsaeNL2zJbRBCbuc-YUjLTBwhnqURAzIviLH9qXMAmT1wiOpGdQEl9R6sghV2K8wu6OkBDVTl-7rjWyUFHH6mquhsEHqVQcgeMTzCuGGoK1zQ2V-Iet9fkKf4BkKv2b9Nbrl6w-6ZTbX6J8kFC1YgIoxd35Sp1-mHT8eSHoXz3mOV0pFuP0-bCL_JVUBv1BdF4UtvY6r_RNvYXg60'
										/>
										<div className='absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
											<button className='bg-primary text-white px-6 py-3 rounded-lg font-bold hover:bg-primary/90 transition-all'>
												Забронировать
											</button>
										</div>
									</div>
									<div className='p-5'>
										<h3 className='text-xl font-bold text-gray-900 dark:text-white'>
											Porsche 911 Carrera
										</h3>
										<p className='text-sm text-gray-500 dark:text-gray-400 mt-1'>
											Спортивный автомобиль
										</p>
										<p className='text-lg text-[#0c7ff2]  font-semibold text-primary mt-2'>
											от 600 TJS/день
										</p>
									</div>
								</div>
								<div className='group bg-white dark:bg-background-dark rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1'>
									<div className='relative'>
										<img
											alt='Lexus LX'
											className='w-full h-56 object-cover'
											src='https://lh3.googleusercontent.com/aida-public/AB6AXuBTj4pHwtFrVQZoaELP7NU-WGXJjPYnCXl2vT9U0cdh6XqfpEm2CkP6jvEBZMMPmjMRIAjTNMxpNXQ4sD6e_MsMFpBokN1vzyHF_3oxIGdsulCqfkYMFZlzc4yhu-N_NdHG_tgcVbX3lZu8ZGnHmkt5C9zbYeVWDgj_OgSOIgqjaTerl9WK94lDoSVRuCZjsO9w6eal8lVB3VDhwP2kBqWrraTmNU-ilxqmUrFN0JFA4zv3B4pZBRKWct9sd8yxKgwJwz-KwbrVA1w'
										/>
										<div className='absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
											<button className='bg-primary text-white px-6 py-3 rounded-lg font-bold hover:bg-primary/90 transition-all'>
												Забронировать
											</button>
										</div>
									</div>
									<div className='p-5'>
										<h3 className='text-xl font-bold text-gray-900 dark:text-white'>
											Lexus LX
										</h3>
										<p className='text-sm text-gray-500 dark:text-gray-400 mt-1'>
											Внедорожник
										</p>
										<p className='text-lg text-[#0c7ff2]  font-semibold text-primary mt-2'>
											от 400 TJS/день
										</p>
									</div>
								</div>
								<div className='group bg-white dark:bg-background-dark rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1'>
									<div className='relative'>
										<img
											alt='Range Rover Sport'
											className='w-full h-56 object-cover'
											src='https://lh3.googleusercontent.com/aida-public/AB6AXuDIgLKW657WBfLogEeri6Pknte_2_27D9lTU4Q4kYUcaho0veBjgYQr594daIs4iKlmqDqNC2SEESdfdSOchecpPvMMU96YkUipr2wX5s4HO3Lo2yFVlnvTXnqzS8duVY7Ylg973PqPi5MRMG5_BiyAqnm9CLMC8fIWFU7fKn7lQi1vjaZKaZU4KKWufQpfVi3MHnqCCC3l3QNPY5Lx6Q9t8UZ7VoC953PQGD2tHfJtcrCfGuUCI3xYdHTmOVWEpuXHEMxFtgBcwlg'
										/>
										<div className='absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
											<button className='bg-primary text-white px-6 py-3 rounded-lg font-bold hover:bg-primary/90 transition-all'>
												Забронировать
											</button>
										</div>
									</div>
									<div className='p-5'>
										<h3 className='text-xl font-bold text-gray-900 dark:text-white'>
											Range Rover Sport
										</h3>
										<p className='text-sm text-gray-500 dark:text-gray-400 mt-1'>
											Внедорожник
										</p>
										<p className='text-lg text-[#0c7ff2]  font-semibold text-primary mt-2'>
											от 420 TJS/день
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</main>
			</div>
		</div>
	)
}
