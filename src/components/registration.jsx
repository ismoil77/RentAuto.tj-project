"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axiosRequest from '@/utils/axios'
import Link from 'next/link'

export default function Registration() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Пример запроса логина
      const res = await axiosRequest.post("/register", { email, password,phoneNumber,role:"user" });
      localStorage.setItem("access_token", res.data.token)||undefined;
      router.push("/"); 
    } catch (err) {
      setError("Неверный логин или пароль");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex absolute top-0 w-[100%] z-50 items-center justify-center bg-gradient-to-r from-gray-900 to-black text-white">
      <div className="relative w-full max-w-md bg-black/70 backdrop-blur-lg rounded-2xl shadow-xl p-8">
        {/* Авто-фон */}
        <div className="absolute inset-0 opacity-30 overflow-hidden rounded-2xl">
          <img
            src="https://images.unsplash.com/photo-1542362567-b07e54358753?w=1200&q=80&auto=format&fit=crop"
            alt="car background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        </div>

        <h1 className="text-3xl font-bold mb-6 relative z-10 text-[#0c7ff2] text-center">
          Регистрация в RentAuto.tj
        </h1>

        <form onSubmit={handleLogin} className="space-y-4 relative z-10">
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-600 focus:border-[#0c7ff2] focus:ring-1 focus:ring-[#0c7ff2] outline-none text-white"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Номер </label>
            <input
              type="number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-600 focus:border-[#0c7ff2] focus:ring-1 focus:ring-[#0c7ff2] outline-none text-white"
              placeholder="Ввведите номер +992-XXX-XX-XX-XX"
              required
            />
            <label className="block text-sm font-medium mb-1">Пароль</label>

				<input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-600 focus:border-[#0c7ff2] focus:ring-1 focus:ring-[#0c7ff2] outline-none text-white"
              placeholder="••••••••"
              required
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl bg-[#0c7ff2] hover:bg-[#0a6ad1] transition-colors font-bold"
          >
            {loading ? "Вход..." : "Войти"}
          </button>
        </form>

        <p className="text-sm text-gray-400 mt-4 relative z-10 text-center">
          Есть аккаунт?{" "}
          <Link href="/login" className="text-[#0c7ff2] hover:underline">
            Логин
          </Link>
        </p>
		   <p className="text-sm text-gray-400 mt-4 relative z-10 text-center">
          Передумал обратно?{" "}
          <Link href="/" className="text-[#0c7ff2] hover:underline">
            Home
          </Link>
        </p>
      </div>
    </div>
  );
}
