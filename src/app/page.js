/**
 * Página principal de la app
 * Obtiene el clima desde Open-Meteo
 */

async function getWeather(city = "Mexico City") {
  try {
    // Coordenadas básicas (puedes expandir esto después)
    const coords = {
      "Mexico City": { lat: 19.43, lon: -99.13 },
      "Madrid": { lat: 40.41, lon: -3.70 },
      "New York": { lat: 40.71, lon: -74.00 }
    };

    const { lat, lon } = coords[city];

    const res = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`,
      { cache: "no-store" } // evita cache en desarrollo
    );

    if (!res.ok) {
      throw new Error("Error al obtener datos del clima");
    }

    const data = await res.json();
    return data.current_weather;

  } catch (error) {
    console.error("API Error:", error);
    return null;
  }
}

export default async function Home() {
  const weather = await getWeather();

  return (
    <main className="p-4">
      <h1 className="text-xl font-bold">🌦️ Weather App</h1>

      {!weather ? (
        <p>Error al cargar el clima</p>
      ) : (
        <div>
          <p>Temperatura: {weather.temperature}°C</p>
          <p>Viento: {weather.windspeed} km/h</p>
        </div>
      )}
    </main>
  );
}