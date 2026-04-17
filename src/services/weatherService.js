/**
 * Servicio de clima usando Open-Meteo (sin API key)
 */

export async function getWeather(city) {
  try {
    // 1. Obtener coordenadas de la ciudad
    const geoRes = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${city}`
    );

    if (!geoRes.ok) {
      throw new Error("Error al buscar la ciudad");
    }

    const geoData = await geoRes.json();

    if (!geoData.results || geoData.results.length === 0) {
      throw new Error("Ciudad no encontrada");
    }

    const { latitude, longitude, name } = geoData.results[0];

    // 2. Obtener clima
    const weatherRes = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
    );

    if (!weatherRes.ok) {
      throw new Error("Error al obtener clima");
    }

    const weatherData = await weatherRes.json();

    // 3. Adaptar formato (porque tu UI espera OpenWeather)
    return {
      name,
      main: {
        temp: weatherData.current_weather.temperature,
      },
      weather: [
        {
          description: "Clima actual",
        },
      ],
      wind: {
        speed: weatherData.current_weather.windspeed,
      },
    };

  } catch (error) {
    console.error("Error:", error.message);
    return null;
  }
}