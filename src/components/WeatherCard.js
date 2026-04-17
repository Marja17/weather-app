/**
 * Componente visual del clima
 */
export default function WeatherCard({ weather }) {
  return (
    <div className="bg-white shadow-lg p-4 rounded mt-6">
      <h2 className="text-xl font-bold">{weather.name}</h2>

      <p>🌡 Temperatura: {weather.main.temp}°C</p>
      <p>☁ Estado: {weather.weather[0].description}</p>
      <p>💨 Viento: {weather.wind.speed} m/s</p>
    </div>
  );
}