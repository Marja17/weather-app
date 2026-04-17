"use client";

import { useState } from "react";
import { getWeather } from "../services/weatherService";
import { getCache, setCache } from "../utils/cache";
import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";

/**
 * Página principal
 */
export default function Home() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = async (city) => {
    setError("");

    //  CACHE
    const cached = getCache(city);
    if (cached) {
      setWeather(cached);
      return;
    }

    const data = await getWeather(city);

    // ERROR UI
    if (!data) {
      setError("Error al cargar el clima");
      setWeather(null);
      return;
    }

    setCache(city, data);
    setWeather(data);
  };

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold">🌤 Weather App</h1>

      <SearchBar onSearch={handleSearch} />

      {error && <p className="text-red-500 mt-4">{error}</p>}

      {!weather && !error && (
        <p className="mt-4">Busca una ciudad</p>
      )}

      {weather && <WeatherCard weather={weather} />}
    </main>
  );
}