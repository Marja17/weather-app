/**
 * Layout principal
 * Aplica fuente global y estilos base
 */

import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Weather App",
  description: "Weather app using Open-Meteo API",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}