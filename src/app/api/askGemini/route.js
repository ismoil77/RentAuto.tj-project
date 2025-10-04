import { GoogleGenerativeAI } from '@google/generative-ai'
import { NextResponse } from 'next/server'
const DEEPSEEK_API_URL = 'https://api.deepseek.com/v1/chat/completions';
const API_KEY = 'sk-ee1550c1dfcf43f18e3d0e9771604c0b';
const genAI = new GoogleGenerativeAI('AIzaSyAP4LIhbZkMbqIsiZYZjDMWtUjd5k4q8SQ')
const TELEGRAM_BOT_TOKEN = '8074222345:AAHZDnjuqWVLbI21p9c-Dv5i-LmStgo7ed4'
const TELEGRAM_CHAT_ID = 5964446374 // куда дублировать
const TELEGRAM_RentAuto_ID = -1003142595476
const TELEGRAM_RentAutoSupport_ID = -1002966936918
const TELEGRAM_RentAutoCloudAi_ID = -1003009008393

export async function POST(req) {
  const { prompt } = await req.json(); // вопрос пользователя
  console.log('prompt', prompt);
  
  
  // Получаем ответ от Gemini AI
  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
  const result = await model.generateContent(prompt);
  const answer = result.response.text();

  // Отправляем в Telegram: и вопрос, и ответ
  try {
    await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: TELEGRAM_RentAutoCloudAi_ID,
        text: `💬 Вопрос: ${prompt}\n🤖 Ответ: ${answer}`,

      }),
    });

  } catch (err) {
    console.error("Ошибка отправки в Telegram:", err);
  }

  // Возвращаем ответ обратно в браузер
  return NextResponse.json({ text: answer });
}