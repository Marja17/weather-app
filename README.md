<p align="center">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Weather_icon.svg/2048px-Weather_icon.svg.png" alt="Logo" width="150" height="150" />
</p>

<h1 align="center">Weather App</h1>

<p align="center">
<b>Aplicación del clima (Multi-ciudad)</b><br>
<sub>
Aplicación desarrollada en JavaScript (Node.js) que permite consultar el clima en tiempo real de una o varias ciudades utilizando la API de Open-Meteo.  
El proyecto está enfocado en el manejo de APIs, asincronía con async/await, consumo de datos externos, manejo de errores y estructuración de código en módulos.
</sub>
</p>

## ➤ Sobre el proyecto

Este proyecto tiene como objetivo mostrar cómo consumir una API meteorológica en tiempo real usando JavaScript.  
Permite ingresar una o varias ciudades y obtener información como temperatura, humedad y velocidad del viento.

La aplicación está pensada para ejecutarse desde la terminal usando Node.js.

---

## ➤ Características

- Consulta del clima en tiempo real
- Soporte para múltiples ciudades en una sola ejecución
- Uso de async/await para llamadas a API
- Manejo de errores básicos (ciudades inválidas o fallos de red)
- Salida organizada en consola

---

## ➤ API utilizada

Se utiliza la API de Open-Meteo, la cual no requiere clave de autenticación.

Ejemplo de endpoint:

```bash
https://api.open-meteo.com/v1/forecast