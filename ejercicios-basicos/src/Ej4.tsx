// ----------------------- EJERCICIO 4 --------------------------------
import { useState } from 'react';
import type { ChangeEvent } from 'react';

export default function Ej4() {
  const [celsius, setCelsius] = useState<string>('');

  // Calculamos los valores directamente en cada renderizado (sin usar un segundo useState)
  const celsiusNumber = Number(celsius);
  const fahrenheit = celsius ? (celsiusNumber * 9) / 5 + 32 : 0;

  function convertToFahrenheit(e: ChangeEvent<HTMLInputElement>) {
    setCelsius(e.target.value);
  }

  return (
    <div>
      <input
        type="number"
        value={celsius}
        onChange={convertToFahrenheit}
        placeholder="Ingrese grados Celsius"
        style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
      />

      <h3>{fahrenheit} ºF</h3>

      {celsiusNumber > 30 && <p style={{ color: 'orange', fontWeight: 'bold' }}>Hace calor</p>}
    </div>
  );
}
