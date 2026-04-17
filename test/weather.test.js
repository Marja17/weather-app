import { getWeather } from "../services/weatherService";

/**
 * Test básico
 */
test("retorna null cuando la API falla", async () => {
  const data = await getWeather("ciudad-invalida-123");
  expect(data).toBeNull();
});