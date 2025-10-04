"use client";

import axios from "axios";
import { redirect } from "next/navigation";

// Базовый URL твоего API
const API_URL = "https://a9a312fd6819819d.mokky.dev";

const axiosRequest = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Добавляем токен к каждому запросу
axiosRequest.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access_token")||undefined;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Проверка ответа
axiosRequest.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.warn("⛔ Access token недействителен или истёк");
      localStorage.removeItem("access_token");
      redirect("/login"); 
    }
    return Promise.reject(error);
  }
);

export default axiosRequest;
