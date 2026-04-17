'use client';

/**
 * WeatherApp
 * ------------------
 * Componente principal que:
 * - obtiene la ciudad
 * - llama a Open-Meteo
 * - maneja errores
 * - muestra resultados
 */

import { useState } from "react";
import axios from "axios";
import Search from "./Search";
import Card from "./Card";

/**
 * Función para obtener icono según código del clima
 * basado en la documentación de Open-Meteo
 */
const getIcon = (code) => {
    if ([0].includes(code)) return "/clear.svg";
    if ([1, 2, 3].includes(code)) return "/clouds.svg";
    if ([45, 48].includes(code)) return "/mist.svg";
    if ([51, 53, 55].includes(code)) return "/drizzle.svg";
    if ([61, 63, 65].includes(code)) return "/rain.svg";
    if ([71, 73, 75].includes(code)) return "/snow.svg";
    return "/clear.svg";
};

export default function WeatherApp() {

    /** Estado para la ciudad */
    const [city, setCity] = useState("Mexico City");

    /** Estado para guardar datos del clima */
    const [weather, setWeather] = useState(null);

    /** Estado para errores */
    const [error, setError] = useState("");

    /** Estado para loading */
    const [loading, setLoading] = useState(false);

    /**
     * Función principal que:
     * 1. Obtiene coordenadas por ciudad
     * 2. Obtiene clima usando coordenadas
     */
    const fetchWeather = async () => {
        try {
            setLoading(true);
            setError("");

            // Paso 1: obtener latitud y longitud
            const geo = await axios.get(
                `https://geocoding-api.open-meteo.com/v1/search?name=${city}`
            );

            // Validación si no existe ciudad
            if (!geo.data.results) {
                setError("City not found");
                setLoading(false);
                return;
            }

            // Extraer datos de ubicación
            const { latitude, longitude, name } = geo.data.results[0];

            // Paso 2: obtener clima
            const weatherData = await axios.get(
                `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=relativehumidity_2m,windspeed_10m`
            );

            // Guardar datos combinados
            setWeather({
                city: name,
                ...weatherData.data
            });

        } catch {
            setError("Error fetching weather");
        } finally {
            setLoading(false);
        }
    };

    /**
     * Maneja cambio del input
     */
    const handleInputChange = (e) => {
        setCity(e.target.value);
    };

    return (
        <section className="bg-gradient-to-br from-[#00feba] to-[#5b548a] px-responsive-x py-responsive-y flex flex-col gap-6 rounded-2xl text-center">

            {/* Barra de búsqueda */}
            <Search
                onInputChange={handleInputChange}
                onSearchClick={fetchWeather}
            />

            {/* Loading */}
            {loading && <p>Loading...</p>}

            {/* Error */}
            {error && <p className="text-red-500">{error}</p>}

            {/* Resultado */}
            {weather && (
                <>
                    <div className="flex flex-col items-center">

                        {/* Icono del clima */}
                        <img
                            src={getIcon(weather.current_weather.weathercode)}
                            width={120}
                        />

                        {/* Temperatura */}
                        <h2 className="text-3xl font-bold">
                            {weather.current_weather.temperature}°C
                        </h2>

                        {/* Ciudad */}
                        <p className="text-xl">{weather.city}</p>
                    </div>

                    {/* Humedad y viento */}
                    <div className="flex justify-between mt-6">
                        <Card
                            value={`${weather.hourly.relativehumidity_2m[0]}%`}
                            text="Humidity"
                            src="/humidity.svg"
                        />
                        <Card
                            value={`${weather.current_weather.windspeed} km/h`}
                            text="Wind Speed"
                            src="/wind.svg"
                        />
                    </div>
                </>
            )}
        </section>
    );
}