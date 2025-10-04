import { useEffect, useState } from 'react'

// Вспомогательный компонент для форматирования ответа
const FormattedMessage = ({ text }) => {
	// Разбиваем текст на строки
	const lines = text.split('\n').filter(line => line.trim() !== '')
	
	return (
		<div className='space-y-2'>
			{lines.map((line, i) => {
				// Заголовки: начинаются с "**"
				if (line.startsWith('**') && line.endsWith('**')) {
					const content = line.replace(/\*\*/g, '')
					return (
						<h3
							key={i}
							className='font-bold text-gray-900 dark:text-white text-sm'
						>
							{content}
						</h3>
					)
				}

				// Пункты списка: начинаются с "* "
				if (line.trim().startsWith('* ')) {
					const content = line.trim().substring(2)
					// Жирный подтекст внутри пункта (например: **На покупку:**)
					const parts = content.split(/(\*\*.*?\*\*)/g)
					return (
						<div key={i} className='flex items-start gap-2'>
							<span className='text-[#0080ff] mt-0.5'>•</span>
							<span className='text-sm text-gray-800 dark:text-gray-200'>
								{parts.map((part, j) =>
									part.startsWith('**') && part.endsWith('**') ? (
										<span
											key={j}
											className='font-semibold text-gray-900 dark:text-white'
										>
											{part.replace(/\*\*/g, '')}
										</span>
									) : (
										part
									)
								)}
							</span>
						</div>
					)
				}

				// Обычный абзац
				return (
					<p
						key={i}
						className='text-sm text-gray-800 dark:text-gray-200 leading-relaxed'
					>
						{line}
					</p>
				)
			})}
		</div>
	)
}

export default function GeminiChatModal() {
	const [isOpen, setIsOpen] = useState(false)
	const [input, setInput] = useState('')
	const [messages, setMessages] = useState([])
	const [loading, setLoading] = useState(false)
	const products = [
		{
			name: 'BMW M5 Competition',
			brand: 'BMW',
			category: 'Спортивный автомобиль',
			categoryCar: 'Седан',
			price: '500 TJS/день',
			image:
				'https://lh3.googleusercontent.com/aida-public/AB6AXuDIZbhO09-ADD2gOHrP7mDg8MpmZ7Y317S83OSRhhltLrADbGEx_OGS0slLcDVW8pbLZ6ikMfCJI-MxOtkvDh4f0R5Sl2sW1NT_G9Lz9R9SjhDlJB1T9opihmBGfY_zq4PKwkZtlRGL6SpZVriTEWKFqspBfdxXWY_GO632AfNd7jkJfQyRkc22CGpjCPqgPGf_O1MQL9nnnPYG3OIgw35B2A6gyxIhSBeAXMpsnkrxymENd95Ydfe3O7eqjJryoNFVEBKBfheK9uQ',
			passengers: 4,
			luggage: 3,
			doors: 4,
			type: 'Авто',
			available: true,
			description:
				'Легендарный спортивный седан с 625-сильным двигателем V8. Идеален для тех, кто ценит динамику, роскошь и повседневную практичность в одном автомобиле.',
		},
		{
			name: 'Mercedes-Benz S-Class',
			brand: 'Mercedes-Benz',
			category: 'Бизнес',
			categoryCar: 'Седан',
			price: '450 TJS/день',
			image:
				'https://lh3.googleusercontent.com/aida-public/AB6AXuDf6oABCxE01li43ZrUScT1xyUDNlYPV6dAf9xIrezjs0ga9oW6qX8kyIQICPT5dwPorUQQc8UU903f355muLLsmO4ZS3aSvEL2n63SKb-hjnroyXFja4j0eky3NvG98ZK6Ah3ZRf7-0FcxpsqGOwFY1x3HtuVXvPqfR4jiEtD9n1xr5BeOvxB7t3ltVXrYJMYuwrnHJO9KbIqHPUGfUBh23RuDMPfMzVh9ofxDE3h5bPxyZn6sS1nQ-xvaEqcfblW_fGje_mJNTv8',
			passengers: 5,
			luggage: 4,
			doors: 4,
			type: 'Авто',
			available: true,
			description:
				'Флагманский седан Mercedes-Benz — эталон комфорта, технологий и престижа. Идеален для деловых поездок и представительских целей.',
		},
		{
			name: 'Audi Q7',
			brand: 'Audi',
			category: 'Внедорожник',
			categoryCar: 'Внедорожник (SUV)',
			price: '350 TJS/день',
			image:
				'https://lh3.googleusercontent.com/aida-public/AB6AXuD7ksvdhi4ZZwyYDy4AHp4XDTdvma1suBY4qOB-f9HTtSgL_5jjRUfPE5Bn1_PN_eTEGzmpuERtTPXk6T3OI8CsrxvnwqLeTs_WgI6vZoMxNj7-apCH58uWpJGNu4muspIJSbYZ40ImbTQbxqckNu_LnRM1_feaaZG0pKwbEUU2QFWnI0wqxKpdOjYLbmcakJrXAQCN1IfzgTecrWu5W6mF4zIss9lzuFRS5LSsTSMqFA8r-Qtf4Kp5i-7Dm61URNkdfl2JFkMcUPg',
			passengers: 7,
			luggage: 5,
			doors: 5,
			type: 'Авто',
			available: false,
			description:
				'Просторный и технологичный семиместный внедорожник с полным приводом quattro. Отличный выбор для большой семьи и дальних путешествий.',
		},
		{
			name: 'Porsche 911 Carrera',
			brand: 'Porsche',
			category: 'Спортивный автомобиль',
			categoryCar: 'Купе',
			price: '600 TJS/день',
			image:
				'https://lh3.googleusercontent.com/aida-public/AB6AXuBeDOMZxeGsPar4N1k-vzTlOAGEq6kS5YqZjpShK1HjGq4jonnSQzSxbPxFTYNsaeNL2zJbRBCbuc-YUjLTBwhnqURAzIviLH9qXMAmT1wiOpGdQEl9R6sghV2K8wu6OkBDVTl-7rjWyUFHH6mquhsEHqVQcgeMTzCuGGoK1zQ2V-Iet9fkKf4BkKv2b9Nbrl6w-6ZTbX6J8kFC1YgIoxd35Sp1-mHT8eSHoXz3mOV0pFuP0-bCL_JVUBv1BdF4UtvY6r_RNvYXg60',
			passengers: 2,
			luggage: 2,
			doors: 2,
			type: 'Авто',
			available: true,
			description:
				'Икона автомобильного мира — заднеприводное купе с безупречной управляемостью и фирменным звуком оппозитного двигателя. Для истинных ценителей вождения.',
		},
		{
			name: 'Lexus LX',
			brand: 'Lexus',
			category: 'Внедорожник',
			categoryCar: 'Полноразмерный внедорожник',
			price: '400 TJS/день',
			image:
				'https://lh3.googleusercontent.com/aida-public/AB6AXuBTj4pHwtFrVQZoaELP7NU-WGXJjPYnCXl2vT9U0cdh6XqfpEm2CkP6jvEBZMMPmjMRIAjTNMxpNXQ4sD6e_MsMFpBokN1vzyHF_3oxIGdsulCqfkYMFZlzc4yhu-N_NdHG_tgcVbX3lZu8ZGnHmkt5C9zbYeVWDgj_OgSOIgqjaTerl9WK94lDoSVRuCZjsO9w6eal8lVB3VDhwP2kBqWrraTmNU-ilxqmUrFN0JFA4zv3B4pZBRKWct9sd8yxKgwJwz-KwbrVA1w',
			passengers: 5,
			luggage: 4,
			doors: 5,
			type: 'Авто',
			available: true,
			description:
				'Японский флагманский внедорожник с безупречной надёжностью, роскошным салоном и возможностью покорять любое бездорожье. Наследник Toyota Land Cruiser, но в премиум-исполнении.',
		},
		{
			name: 'Range Rover Sport',
			brand: 'Land Rover',
			category: 'Внедорожник',
			categoryCar: 'Премиальный SUV',
			price: '420 TJS/день',
			image:
				'https://lh3.googleusercontent.com/aida-public/AB6AXuDIgLKW657WBfLogEeri6Pknte_2_27D9lTU4Q4kYUcaho0veBjgYQr594daIs4iKlmqDqNC2SEESdfdSOchecpPvMMU96YkUipr2wX5s4HO3Lo2yFVlnvTXnqzS8duVY7Ylg973PqPi5MRMG5_BiyAqnm9CLMC8fIWFU7fKn7lQi1vjaZKaZU4KKWufQpfVi3MHnqCCC3l3QNPY5Lx6Q9t8UZ7VoC953PQGD2tHfJtcrCfGuUCI3xYdHTmOVWEpuXHEMxFtgBcwlg',
			passengers: 5,
			luggage: 4,
			doors: 5,
			type: 'Авто',
			available: true,
			description:
				'Элегантный и мощный британский внедорожник, сочетающий роскошь, комфорт и внедорожные способности. Идеален для города и путешествий по пересечённой местности.',
		},
	]
useEffect(() => {scrollToBottom()}, [messages])
  const scrollToBottom = () => {
    
  };
	const handleAsk = async () => {
		if (!input.trim()) return
		const userMessage = { role: 'user', text: input }
		setMessages(prev => [...prev, userMessage])
		setInput('')
		setLoading(true)
		const productList = products
			.map(
				p =>
					`• ${p.name}: ${p.category}, цена: ${p.price},свободен или нет:${p.available},${p.description},${p.doors},${p.categoryCar}`
			)
			.join('\n')

		const prompt = `
Ты помощник по прокату автомобилей. Пользователь задает вопрос, отвечай, используя информацию из списка товаров ниже:

${productList}

Вопрос: ${input}
Ответ:
`

		try {
			const res = await fetch('/api/askGemini', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ prompt: prompt }),
			})
			const data = await res.json()
			// setMessages([...messages, { role: 'bot', text: data.text }])

			const botMessage = { role: 'bot', text: data.text || 'Без ответа.' }
			setMessages(prev => [...prev, botMessage])
		} catch (err) {
			const errorMessage = {
				role: 'bot',
				text: '❌ Ошибка: не удалось получить ответ.',
			}
			setMessages(prev => [...prev, errorMessage])
		} finally {
			setLoading(false)
		}
	}

	return (
		<>
			{/* Floating Chat Button */}
			<button
				onClick={() => setIsOpen(true)}
				className='fixed bottom-6 right-6 w-14 h-14 flex items-center justify-center bg-[#0080ff] text-white rounded-full shadow-xl hover:shadow-2xl hover:bg-[#0066cc] transition-all duration-300 z-50'
				aria-label='Открыть чат с Gemini'
			>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					className='h-7 w-7'
					fill='none'
					viewBox='0 0 24 24'
					stroke='currentColor'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth={2}
						d='M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z'
					/>
				</svg>
			</button>

			{/* Modal Backdrop */}
			{isOpen && (
				<div
					className='fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-end z-50 p-4'
					onClick={() => setIsOpen(false)}
				>
					<div
						className='bg-white dark:bg-gray-800 w-full max-w-md rounded-t-3xl rounded-b-lg shadow-2xl overflow-hidden flex flex-col h-[72vh] transform transition-all duration-300'
						onClick={e => e.stopPropagation()}
					>
						{/* Header */}
						<div className='flex items-center justify-between px-5 py-4 border-b border-gray-200 dark:border-gray-700'>
							<div className='flex items-center gap-3'>
								<div className='w-10 h-10 rounded-full bg-gradient-to-br from-[#0080ff] to-[#00bfff] flex items-center justify-center'>
									<span className='text-white font-bold text-lg'>G</span>
								</div>
								<h2 className='text-lg font-semibold text-gray-800 dark:text-white'>
									Gemini AI
								</h2>
							</div>
							<button
								onClick={() => setIsOpen(false)}
								className='text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 transition'
								aria-label='Закрыть чат'
							>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='h-6 w-6'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M6 18L18 6M6 6l12 12'
									/>
								</svg>
							</button>
						</div>

						{/* Chat Messages */}
						<div className='flex-1 overflow-y-auto px-4 py-3 space-y-4'>
							{messages.length === 0 && !loading && (
								<div className='text-center text-gray-500 dark:text-gray-400 mt-8'>
									<p>👋 Привет! Задайте любой вопрос — я помогу.</p>
								</div>
							)}

							{messages.map((m, i) => (
								<div
									key={i}
									className={`flex ${
										m.role === 'user' ? 'justify-end' : 'justify-start'
									}`}
								>
									<div
										className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm ${
											m.role === 'user'
												? 'bg-[#0080ff] text-white rounded-tr-none'
												: 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-tl-none'
										}`}
									>
										{m.role === 'bot' ? (
											<FormattedMessage text={m.text} />
										) : (
											m.text
										)}
									</div>
								</div>
							))}

							{loading && (
								<div className='flex justify-start'>
									<div className='bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-2xl rounded-tl-none px-4 py-3 max-w-[85%]'>
										<div className='flex space-x-2'>
											<div className='w-2 h-2 bg-gray-400 rounded-full animate-bounce'></div>
											<div className='w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-75'></div>
											<div className='w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150'></div>
										</div>
									</div>
								</div>
							)}
						</div>

						{/* Input Area */}
						<div className='p-3 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800'>
							<div className='flex gap-2'>
								<textarea
									className='flex-1 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl px-4 py-2 text-sm text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-[#0080ff] focus:border-transparent'
									rows={1}
									value={input}
									onChange={e => setInput(e.target.value)}
									placeholder='Напишите сообщение...'
									onKeyDown={e => {
										if (e.key === 'Enter' && !e.shiftKey) {
											e.preventDefault()
											handleAsk()
										}
									}}
								/>
								<button
									onClick={handleAsk}
									disabled={!input.trim() || loading}
									className={`flex items-center justify-center w-12 h-12 rounded-xl flex-shrink-0 transition ${
										input.trim() && !loading
											? 'bg-[#0080ff] hover:bg-[#0066cc] text-white'
											: 'bg-gray-200 dark:bg-gray-600 text-gray-400 cursor-not-allowed'
									}`}
									aria-label='Отправить сообщение'
								>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='h-5 w-5'
										viewBox='0 0 20 20'
										fill='currentColor'
									>
										<path
											fillRule='evenodd'
											d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
											clipRule='evenodd'
										/>
									</svg>
								</button>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	)
}
