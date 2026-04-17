"use client";

import { useState } from "react";

/**
 * Componente para buscar ciudades
 */
export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!city.trim()) return;

    onSearch(city);
    setCity("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mt-4">
      <input
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Buscar ciudad..."
        className="border p-2 rounded w-full"
      />

      <button className="bg-blue-500 text-white px-4 rounded">
        Buscar
      </button>
    </form>
  );
}