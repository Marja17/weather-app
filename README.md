# Weather App (Next.js)

Aplicación web desarrollada con Next.js que permite consultar el clima en tiempo real usando una API externa.

## Características

- Búsqueda de ciudades
- Información del clima en tiempo real
- Cache para optimizar llamadas a la API
- Manejo de errores
- Tests básicos
- Uso de variables de entorno

## Tecnologías

- Next.js 14
- React
- Tailwind CSS
- OpenWeather API

## Instalación

npm install
npm run dev

Abrir en navegador:
http://localhost:3000

## Configuración

Crear archivo .env.local:

NEXT_PUBLIC_API_KEY=TU_API_KEY

## Arquitectura

src/
 ├── app/
 ├── components/
 ├── services/
 ├── utils/
 └── __tests__/

## Testing

npm run test

## Manejo de errores

- Validación de respuesta API (res.ok)
- Retorno de null en fallos
- Mensajes en UI

## Seguridad

- Uso de variables de entorno
- No exposición de API keys
- Validación de inputs

## Mejoras futuras

- Dark mode
- Geolocalización
- Pronóstico extendido
- Diseño responsive avanzado

## Autor

Marja17