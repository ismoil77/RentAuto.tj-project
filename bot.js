// import fetch from 'node-fetch'
// import TelegramBot from 'node-telegram-bot-api'

// const bot = new TelegramBot('8074222345:AAHZDnjuqWVLbI21p9c-Dv5i-LmStgo7ed4', {
// 	polling: true,
// })

// bot.on('text', async ctx => {
// 	const userMessage = ctx.text

// 	// Отправляем запрос на наш API
// 	const res = await fetch(`${'http://localhost:3000'}/api/askGemini`, {
// 		method: 'POST',
// 		headers: { 'Content-Type': 'application/json' },
// 		body: JSON.stringify({ question: userMessage }),
// 	})

// 	const data = await res.json()

// 	// Отправляем ответ пользователю
// 	bot.sendMessage(
// 		ctx.chat.id,
// 		`💬 Вопрос: ${userMessage}\n🤖 Ответ: ${data.text}`
// 	)
// })
