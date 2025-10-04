'use client';
import { getTelegramUserId } from '@/utils/telegram'
import { useState } from "react";

export default function UserLookup() {
  const [username, setUsername] = useState("");
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLookup = async () => {
    setLoading(true);
    setError("");
    try {
      const apiKey = 'apify_api_TjBi1XQKzVGBgBmj9VViyPQ22BCRgC055wax'; // 🔑 ключ из .env
      const info = await getTelegramUserId(username, apiKey);
      setUserInfo(info);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
        Узнать Telegram ID по Username
      </h2>
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Введите username без @"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border rounded-lg p-2 flex-1"
        />
        <button
          onClick={handleLookup}
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          {loading ? "Загрузка..." : "Искать"}
        </button>
      </div>

      {error && <p className="text-red-500 mt-3">{error}</p>}

      {userInfo && (
        <div className="mt-4 p-3 border rounded-lg bg-gray-50 dark:bg-gray-700">
          <p><b>ID:</b> {userInfo.id}</p>
          <p><b>Username:</b> @{userInfo.username}</p>
          <p><b>Имя:</b> {userInfo.firstName} {userInfo.lastName}</p>
          {userInfo.photoUrl && (
            <img
              src={userInfo.photoUrl}
              alt="Аватар"
              className="mt-2 w-20 h-20 rounded-full shadow"
            />
          )}
        </div>
      )}
    </div>
  );
}
