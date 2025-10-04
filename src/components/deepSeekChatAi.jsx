'use client';

import { useState, useRef, useEffect } from 'react';

const DeepSeekChatAI = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [apiKey, setApiKey] = useState('');
  const [settings, setSettings] = useState({
    temperature: 0.7,
    max_tokens: 2000,
    model: 'deepseek-chat',
    stream: false
  });
  const messagesEndRef = useRef(null);

  // Инициализация из localStorage
  useEffect(() => {
    const savedKey = localStorage.getItem('deepseek_api_key')||undefined;
    const savedSettings = localStorage.getItem('deepseek_settings')||undefined;
    
    if (savedKey) setApiKey(savedKey);
    if (savedSettings) setSettings(JSON.parse(savedSettings));
  }, []);

  // Сохранение в localStorage
  useEffect(() => {
    if (apiKey) localStorage.setItem('deepseek_api_key', apiKey)||undefined;
    localStorage.setItem('deepseek_settings', JSON.stringify(settings))||undefined;
  }, [apiKey, settings]);

  // Автопрокрутка
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Вызов DeepSeek API
  const callDeepSeekAPI = async (userMessage) => {
    if (!apiKey) {
      throw new Error('API ключ не установлен');
    }

    const requestMessages = [
      {
        role: 'system',
        content: `Ты - полезный AI ассистент DeepSeek. Отвечай на русском языке. 
Будь вежливым, полезным и точным. Форматируй ответы для лучшей читаемости.`
      },
      ...messages.slice(-8).map(msg => ({
        role: msg.role,
        content: msg.content
      })),
      {
        role: 'user',
        content: userMessage
      }
    ];

    const requestBody = {
      model: settings.model,
      messages: requestMessages,
      temperature: settings.temperature,
      max_tokens: settings.max_tokens,
      stream: settings.stream
    };

    console.log('Sending request:', requestBody);

    const response = await fetch('https://api.deepseek.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`API Error: ${response.status} - ${errorText}`);
    }

    const data = await response.json();
    console.log('API Response:', data);
    
    if (!data.choices?.[0]?.message?.content) {
      throw new Error('Неверный формат ответа от API');
    }

    return data.choices[0].message.content;
  };

  // Отправка сообщения
  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = {
      id: Date.now(),
      role: 'user',
      content: input.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    setError('');

    try {
      const reply = await callDeepSeekAPI(input.trim());
      
      const assistantMessage = {
        id: Date.now() + 1,
        role: 'assistant',
        content: reply,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Chat error:', error);
      setError(error.message);
      
      const errorMessage = {
        id: Date.now() + 1,
        role: 'assistant',
        content: `❌ Ошибка: ${error.message}`,
        isError: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  // Быстрые действия
  const quickActions = [
    { label: "Очистить чат", action: () => setMessages([]) },
    { label: "Экспорт чата", action: exportChat },
    { label: "Сбросить настройки", action: resetSettings }
  ];

  function exportChat() {
    const chatData = {
      messages,
      settings,
      exportedAt: new Date().toISOString()
    };
    const blob = new Blob([JSON.stringify(chatData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `deepseek-chat-${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }

  function resetSettings() {
    setSettings({
      temperature: 0.7,
      max_tokens: 2000,
      model: 'deepseek-chat',
      stream: false
    });
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const formatTime = (date) => {
    return new Date(date).toLocaleTimeString('ru-RU', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  return (
    <div className="flex flex-col h-[800px] w-full max-w-6xl mx-auto bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
      {/* Заголовок и настройки */}
      <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-white/20 rounded-lg">
            <BrainIcon />
          </div>
          <div>
            <h2 className="text-lg font-semibold">DeepSeek AI Chat</h2>
            <p className="text-sm text-blue-100">Температура: {settings.temperature} · Токены: {settings.max_tokens}</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          {/* Быстрые действия */}
          <div className="flex space-x-1">
            {quickActions.map((item, index) => (
              <button
                key={index}
                onClick={item.action}
                className="px-3 py-1 text-xs bg-white/20 hover:bg-white/30 rounded transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Основной контент */}
      <div className="flex flex-1 overflow-hidden">
        {/* Боковая панель настроек */}
        <div className="w-80 border-r border-gray-200 bg-gray-50 p-4 overflow-y-auto">
          {/* Настройка API ключа */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              API Key DeepSeek
            </label>
            <input
              type="password"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="sk-..."
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="text-xs text-gray-500 mt-1">
              Получите на <a href="https://platform.deepseek.com" target="_blank" className="text-blue-500 hover:underline">platform.deepseek.com</a>
            </p>
          </div>

          {/* Настройки модели */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Модель: {settings.model}
              </label>
              <select
                value={settings.model}
                onChange={(e) => setSettings(prev => ({...prev, model: e.target.value}))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="deepseek-chat">deepseek-chat</option>
                <option value="deepseek-coder">deepseek-coder</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Температура: {settings.temperature}
              </label>
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={settings.temperature}
                onChange={(e) => setSettings(prev => ({...prev, temperature: parseFloat(e.target.value)}))}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-gray-500">
                <span>Более точный</span>
                <span>Более креативный</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Макс. токенов: {settings.max_tokens}
              </label>
              <input
                type="range"
                min="100"
                max="4000"
                step="100"
                value={settings.max_tokens}
                onChange={(e) => setSettings(prev => ({...prev, max_tokens: parseInt(e.target.value)}))}
                className="w-full"
              />
            </div>

            <div>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={settings.stream}
                  onChange={(e) => setSettings(prev => ({...prev, stream: e.target.checked}))}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm font-medium text-gray-700">Stream режим</span>
              </label>
            </div>
          </div>

          {/* Информация о чате */}
          <div className="mt-6 p-3 bg-white rounded-lg border border-gray-200">
            <h3 className="font-medium text-gray-700 mb-2">Информация о чате</h3>
            <div className="space-y-1 text-sm text-gray-600">
              <div>Сообщений: {messages.length}</div>
              <div>Модель: {settings.model}</div>
              <div>Температура: {settings.temperature}</div>
            </div>
          </div>
        </div>

        {/* Область чата */}
        <div className="flex-1 flex flex-col">
          {/* Сообщения */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-gray-500 space-y-4">
                <BrainIcon className="w-16 h-16 text-blue-400" />
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-2">Добро пожаловать в DeepSeek Chat!</h3>
                  <p className="text-sm max-w-md">
                    {apiKey 
                      ? "Начните общение с AI ассистентом" 
                      : "Добавьте API ключ в настройках слева"
                    }
                  </p>
                </div>
              </div>
            ) : (
              messages.map((message) => (
                <Message 
                  key={message.id} 
                  message={message} 
                  formatTime={formatTime}
                />
              ))
            )}

            {/* Индикатор загрузки */}
            {isLoading && <LoadingIndicator />}

            <div ref={messagesEndRef} />
          </div>

          {/* Ошибка */}
          {error && (
            <div className="mx-4 mb-2 p-3 bg-red-50 border border-red-200 rounded-lg">
              <div className="text-red-800 text-sm flex items-center space-x-2">
                <AlertIcon />
                <span>{error}</span>
              </div>
            </div>
          )}

          {/* Поле ввода */}
          <div className="border-t border-gray-200 p-4 bg-white">
            <div className="flex space-x-3">
              <div className="flex-1 relative">
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder={
                    apiKey 
                      ? "Введите ваше сообщение... (Enter для отправки)"
                      : "Добавьте API ключ в настройках"
                  }
                  className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-12 disabled:bg-gray-100"
                  rows="2"
                  disabled={isLoading || !apiKey}
                />
                <div className="absolute right-2 bottom-2 text-xs text-gray-400">
                  ↵ Enter
                </div>
              </div>
              <button
                onClick={sendMessage}
                disabled={isLoading || !input.trim() || !apiKey}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed transition-all duration-200 flex items-center space-x-2 shadow-md"
              >
                {isLoading ? <LoadingIcon /> : <SendIcon />}
                <span>Отправить</span>
              </button>
            </div>
            
            {/* Быстрые подсказки */}
            {apiKey && (
              <div className="mt-3 flex flex-wrap gap-2">
                {[
                  "Напиши Hello World на Python",
                  "Объясни теорию относительности",
                  "Помоги с идеей для стартапа",
                  "Как учить программирование?"
                ].map((hint, index) => (
                  <button
                    key={index}
                    onClick={() => setInput(hint)}
                    disabled={isLoading}
                    className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full transition-colors disabled:opacity-50"
                  >
                    {hint}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Вспомогательные компоненты
const BrainIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const SendIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
  </svg>
);

const LoadingIcon = () => (
  <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
  </svg>
);

const AlertIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const Message = ({ message, formatTime }) => (
  <div className={`flex gap-3 ${message.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
      message.role === 'user' ? 'bg-blue-500' : 'bg-gradient-to-r from-green-500 to-blue-500'
    }`}>
      {message.role === 'user' ? <UserIcon /> : <BotIcon />}
    </div>
    <div className={`max-w-[80%] rounded-2xl px-4 py-3 ${
      message.role === 'user'
        ? 'bg-blue-500 text-white rounded-br-none'
        : message.isError
        ? 'bg-red-100 text-red-800 border border-red-200'
        : 'bg-white text-gray-800 rounded-bl-none border border-gray-200 shadow-sm'
    }`}>
      <div className="whitespace-pre-wrap break-words">{message.content}</div>
      <div className={`text-xs mt-2 ${message.role === 'user' ? 'text-blue-100' : 'text-gray-500'}`}>
        {formatTime(message.timestamp)}
      </div>
    </div>
  </div>
);

const UserIcon = () => (
  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const BotIcon = () => (
  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const LoadingIndicator = () => (
  <div className="flex gap-3">
    <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-gradient-to-r from-green-500 to-blue-500">
      <BotIcon />
    </div>
    <div className="bg-white rounded-2xl rounded-bl-none px-4 py-3 border border-gray-200 shadow-sm">
      <div className="flex space-x-2 items-center">
        <LoadingIcon />
        <span className="text-gray-600">DeepSeek печатает...</span>
      </div>
    </div>
  </div>
);

export default DeepSeekChatAI;