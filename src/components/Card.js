/**
 * Componente Card
 * ------------------
 * Tarjeta reutilizable para mostrar
 * información del clima (temperatura,
 * humedad o velocidad del viento).
 */

import Image from "next/image";

export default function Card({ value, text, src }) {
    return (
        <div className="flex items-center gap-3">

            {/* Icono */}
            {src && (
                <Image
                    src={src}
                    alt={text}
                    width={40}
                    height={40}
                />
            )}

            {/* Texto */}
            <div>
                <p className="text-xl font-semibold">{value}</p>
                <p className="text-sm">{text}</p>
            </div>

        </div>
    );
}