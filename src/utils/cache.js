/**
 * Cache simple para evitar llamadas repetidas a la API
 */

const cache = {};

export function getCache(city) {
  const data = cache[city];

  if (!data) return null;

  const isExpired = Date.now() - data.timestamp > 600000; // 10 min

  return isExpired ? null : data.value;
}

export function setCache(city, value) {
  cache[city] = {
    value,
    timestamp: Date.now(),
  };
}