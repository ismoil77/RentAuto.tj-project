'use client'

import { useEffect, useRef, useState } from 'react'

const CAR_BG_URLS = [
  'https://images.unsplash.com/photo-1542362567-b07e54358753?w=1600&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=1600&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?w=1600&q=80&auto=format&fit=crop',
]

const LANG_LABEL = { auto: 'Auto', ru: 'Русский', tj: 'Тоҷикӣ', en: 'English' }

const detectLang = (text = '') => {
  if (!text) return 'ru'
  const hasLatin = /[A-Za-z]/.test(text)
  const hasCyrillic = /[А-Яа-яЁё]/.test(text)
  const hasTajikLetters = /[ҳҷғӣӯ]/i.test(text)
  if (hasTajikLetters) return 'tj'
  if (hasLatin && !hasCyrillic) return 'en'
  return 'ru'
}

const FormattedMessage = ({ text }) => {
  if (!text) return null
  const lines = String(text).split('\n').filter(Boolean)
  return (
    <div className="space-y-2 break-words">
      {lines.map((line, i) => (
        <p key={i} className="text-sm text-gray-100 leading-relaxed">
          {line}
        </p>
      ))}
    </div>
  )
}

export default function GeminiChatPage() {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState(() => {
    try {
      const raw = localStorage.getItem('gemini_chat')||undefined;
      return raw ? JSON.parse(raw) : []
    } catch {
      return []
    }
  })
  const [loading, setLoading] = useState(false)
  const [bgIndex, setBgIndex] = useState(0)
  const [languageMode, setLanguageMode] = useState('auto')
  const [cars, setCars] = useState([])
  const bottomRef = useRef(null)

  // Загружаем список машин
  useEffect(() => {
    fetch('https://a9a312fd6819819d.mokky.dev/cars')
      .then(r => r.json())
      .then(data => setCars(data))
      .catch(err => console.error('Ошибка загрузки машин:', err))
  }, [])

  // Сохраняем историю
  useEffect(() => {
    try {
      localStorage.setItem('gemini_chat', JSON.stringify(messages))||undefined;
    } catch {}
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  // Смена фона
  useEffect(() => {
    const t = setInterval(
      () => setBgIndex(i => (i + 1) % CAR_BG_URLS.length),
      8000
    )
    return () => clearInterval(t)
  }, [])

  const buildPrompt = userText => {
    const sysBase = `
Ты — виртуальный ассистент по подбору автомобилей. 
У тебя есть список машин с характеристиками (ниже).
Используй эти данные, чтобы советовать пользователю.

Список доступных машин:
${cars
  .map(
    c =>
      `- ${c.name} (${c.brand}), ${c.categoryCar}, ${c.price}, ${c.passengers} пассажиров, ${c.luggage} багаж, двери: ${c.doors}. Описание: ${c.description}`
  )
  .join('\n')}

Будь дружелюбным, кратким и информативным.
`

    const langInstruction =
      languageMode === 'auto'
        ? `Отвечай на языке пользователя: Русский, Тоҷикӣ или English.`
        : languageMode === 'ru'
        ? 'Отвечай только на русском языке.'
        : languageMode === 'tj'
        ? 'Ҷавобҳоро ба забони тоҷикӣ деҳ.'
        : 'Respond only in English.'

    return `${sysBase}\n${langInstruction}\n\nВопрос пользователя:\n${userText}\n\nОтвет:`
  }

  const pushMessage = msg => setMessages(prev => [...prev, msg])

  const handleAsk = async () => {
    const text = input.trim()
    if (!text) return
    const detected = detectLang(text)
    const userLang = detected === 'tj' ? 'tj' : detected === 'en' ? 'en' : 'ru'

    const userMsg = {
      id: Date.now(),
      role: 'user',
      text,
      lang: userLang,
      ts: Date.now(),
    }
    pushMessage(userMsg)
    setInput('')
    setLoading(true)

    const prompt = buildPrompt(text)

    try {
      const res = await fetch('/api/askGemini', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      })

      const data = await res.json()
      const botText =
        (data && (data.text || data.answer || data.message)) || 'Без ответа.'

      pushMessage({
        id: Date.now() + 1,
        role: 'bot',
        text: botText,
        lang: userLang,
        ts: Date.now(),
      })
    } catch (err) {
      pushMessage({
        id: Date.now() + 2,
        role: 'bot',
        text: '❌ Ошибка: не удалось получить ответ.',
        lang: 'ru',
        ts: Date.now(),
      })
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const handleClear = () => {
    localStorage.removeItem('gemini_chat')||undefined;
    setMessages([])
  }

  return (
    <div
      className="fixed top-[70px] inset-0 flex flex-col text-white"
      style={{
        backgroundImage: ` url(${CAR_BG_URLS[bgIndex]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 backdrop-blur-sm bg-black/50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-600 flex items-center justify-center shadow-lg">
            <span className="font-bold text-lg">🚗</span>
          </div>
          <div>
            <h1 className="text-base sm:text-lg font-semibold">Авто-ассистент Gemini</h1>
            <p className="text-xs sm:text-sm text-gray-300">
              Подбор машин • Русский • Тоҷикӣ • English
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <select
            value={languageMode}
            onChange={e => setLanguageMode(e.target.value)}
            className="px-2 sm:px-3 py-2 rounded-md bg-black/40 border border-white/30 text-xs sm:text-sm"
          >
            <option value="auto">{LANG_LABEL.auto}</option>
            <option value="ru">{LANG_LABEL.ru}</option>
            <option value="tj">{LANG_LABEL.tj}</option>
            <option value="en">{LANG_LABEL.en}</option>
          </select>
          <button
            onClick={handleClear}
            className="px-2 sm:px-3 py-2 bg-red-600 hover:bg-red-500 rounded-md text-xs sm:text-sm shadow-md"
          >
            Очистить
          </button>
        </div>
      </div>

      {/* Messages */}
      <main className="flex-1 overflow-y-auto px-4 sm:px-6 py-6 sm:py-8 space-y-4">
        {messages.map(m => (
          <div
            key={m.id}
            className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`px-4 py-3 rounded-2xl shadow-lg max-w-[80%] sm:max-w-[70%] ${
                m.role === 'user'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-800/80 text-gray-100'
              }`}
            >
              {m.role === 'bot' ? <FormattedMessage text={m.text} /> : m.text}
            </div>
          </div>
        ))}
        {loading && (
          <div className="text-gray-400 animate-pulse">Ассистент думает...</div>
        )}
        <div ref={bottomRef} />
      </main>

      {/* Input */}
      <footer className="px-4 sm:px-6 py-3 sm:py-4 bg-black/60 backdrop-blur-md">
        <div className="flex gap-2">
          <textarea
            className="flex-1 bg-gray-900/70 border border-gray-700 rounded-xl px-3 sm:px-4 py-2 sm:py-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={1}
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Опиши свои требования к машине..."
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
            className="w-12 h-12 bg-blue-600 hover:bg-blue-500 rounded-xl flex items-center justify-center text-lg shadow-md disabled:opacity-50"
          >
            ➤
          </button>
        </div>
      </footer>
    </div>
  )
}
