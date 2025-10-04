'use client'
import axios from 'axios'
import React, { useEffect, useState } from "react";

// OrdersHistory.jsx
// Компонент получает заказы по user_id из access_token (хранимого в localStorage).
// Использует Tailwind CSS для стилизации.

export default function OrdersHistory() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userId, setUserId] = useState(null);
const sid = JSON.parse(
    atob(localStorage.getItem('access_token')?.split('.')[1])
  )?.id||undefined;
  useEffect(() => {
    const token = localStorage.getItem("access_token")||undefined;
    if (!token) {
      setError("Нет access_token в localStorage");
      setLoading(false);
      return;
    }

    try {
      // предполагаем, что access_token — это JSON с полем id
      const parsed = JSON.parse(token);
		


      
        setUserId(sid);
     
    } catch (err) {
      setError("Ошибка парсинга access_token");
      setLoading(false);
    }
  }, []);
  const controller = new AbortController();
    const url = `https://a9a312fd6819819d.mokky.dev/orders?user_id=${sid}`;

    async function fetchOrders() {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch(url, { signal: controller.signal });
        if (!res.ok) throw new Error(`Ошибка ${res.status}`);
        const data = await res.json();

        const arr = Array.isArray(data) ? data : [data];
        arr.sort((a, b) => new Date(b.bookingTime) - new Date(a.bookingTime));

        setOrders(arr);
      } catch (err) {
        if (err.name !== "AbortError") {
          console.error(err);
          setError(err.message || "Unknown error");
        }
      } finally {
        setLoading(false);
      }
    }
  useEffect(() => {
    

  

    fetchOrders();
    return () => controller.abort();
  }, [sid]);
  useEffect(() => {
	 fetchOrders()
  }, []);

  function formatDate(iso) {
    try {
      const dt = new Date(iso);
      return new Intl.DateTimeFormat("ru-RU", {
        year: "numeric",
        month: "long",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      }).format(dt);
    } catch {
      return iso;
    }
  }
async function deleteOrder(id){
	try {
		await axios.delete(`https://a9a312fd6819819d.mokky.dev/orders/${id}`)
		fetchOrders()
	} catch (error) {
		console.error(error);
		
	}
}
  function calcTotal(order) {
    const days = Number(order.rentalDays) || 0;
    const price = Number(order.priceNum) || 0;
    return days * price;
  }

  return (
    <div className="max-px-[30%] mx-auto p-6 dark:bg-slate-900">
      <header className="mb-6">
        <h1 className="text-3xl font-extrabold text-gray-900 text-center">История бронирований</h1>
        {userId && <p className="mt-1 text-sm text-gray-600">Пользователь: <span className="font-medium">user_id={userId}</span></p>}
      </header>

      {loading && (
        <div className="space-y-4 dark:bg-slate-800">
          {[1, 2].map((i) => (
            <div key={i} className="animate-pulse flex gap-4 items-center dark:bg-slate-800">
              <div className="w-32 h-20 bg-gray-200 rounded-md dark:bg-slate-800" />
              <div className="flex-1 space-y-2">
                <div className="h-4 bg-gray-200 rounded w-1/3 dark:bg-slate-800" />
                <div className="h-3 bg-gray-200 rounded w-2/3 dark:bg-slate-800" />
                <div className="h-3 bg-gray-200 rounded w-1/2 dark:bg-slate-800" />
              </div>
            </div>
          ))}
        </div>
      )}

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded">Ошибка: {error}</div>
      )}

      {!loading && !error && orders.length === 0 && (
        <div className="text-center text-gray-500 py-8">Заказов не найдено.</div>
      )}

      <div className=" flex flex-wrap gap-[20px] justify-center">
        {orders.map((order) => (
          <article key={order.id} className="flex gap-6 bg-white shadow-md rounded-2xl p-5 items-start dark:bg-slate-800 dark:text-white relative w-[500px]">
            <img
              src={order.image}
              alt={order.name}
              className="w-40 h-28 object-cover rounded-lg flex-shrink-0 border"
              onError={(e) => {
                e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='280'%3E%3Crect width='100%25' height='100%25' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23999' font-size='20'%3Eno image%3C/text%3E%3C/svg%3E";
              }}
            />

            <div className="flex-1">
              <div className="flex items-start justify-between gap-4">
                <div className='dark:text-white'>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{order.name}</h2>
                  <p className="mt-1 text-sm text-gray-600 dark:text-white">{order.brand} • {order.category} • {order.categoryCar}</p>
                </div>
				  	<button className='bg-red-500 rounded absolute bottom-6 left-7 px-2 text-white hover:bg-red-600 active:bg-red-700' onClick={()=>deleteOrder(order.id)}>Отменить Бронь</button>
                <div className="text-right">
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${order.confirmed ? 'bg-green-50 text-green-700' : 'bg-yellow-50 text-yellow-700'}`}>
                    {order.confirmed ? 'Подтверждено' : 'Ожидает подтверждения'}
                  </div>
                  <div className="text-xs text-gray-500 mt-2 ark:text-white">Бронь: {formatDate(order.bookingTime)}</div>
                </div>
              </div>

              <p className="mt-4 text-gray-700 dark:text-white">{order.description}</p>

              <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-gray-700 dark:text-white">
                <div className="flex items-center gap-2"><strong>Дней:</strong> {order.rentalDays}</div>
                <div className="flex items-center gap-2"><strong>Пассажиры:</strong> {order.passengers ?? '—'}</div>
                <div className="flex items-center gap-2"><strong>Багаж:</strong> {order.luggage ?? '—'}</div>
                <div className="flex items-center gap-2"><strong>Двери:</strong> {order.doors ?? '—'}</div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <div>
                  <div className="text-sm text-gray-500">Цена в день</div>
                  <div className="text-2xl font-bold">{order.price || `${order.priceNum} TJS`}</div>
                </div>

                {/* <div className="text-right">
                  <div className="text-sm text-gray-500">Итого</div>
                  <div className="text-xl font-semibold">{calcTotal(order)} TJS</div>
                </div> */}
              </div>

            </div>
          </article>
        ))}
      </div>

      <footer className="mt-8 text-center text-sm text-gray-500">Данные подгружаются с сервера через access_token</footer>
    </div>
  );
}
