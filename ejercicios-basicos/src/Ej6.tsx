// ----------------------- EJERCICIO 6 --------------------------------
import { useState } from 'react';
import type { ChangeEvent } from 'react';

const lenguajes = [
  { id: 1, lenguaje: 'Javascript' },
  { id: 2, lenguaje: 'React' },
  { id: 3, lenguaje: 'Typescript' },
  { id: 4, lenguaje: 'Java' },
  { id: 5, lenguaje: 'C#' },
  { id: 6, lenguaje: 'Python' },
  { id: 7, lenguaje: 'HTML' },
  { id: 8, lenguaje: 'CSS' },
  { id: 9, lenguaje: 'Cobol' },
  { id: 10, lenguaje: 'Php' },
];

export default function Ej6() {
  const [busqueda, setBusqueda] = useState<string>('');

  function buscarPalabra(e: ChangeEvent<HTMLInputElement>) {
    setBusqueda(e.target.value);
  }

  const lenguajesFiltrados = lenguajes.filter((i) =>
    i.lenguaje.toLowerCase().includes(busqueda.trim().toLowerCase())
  );

  return (
    <div>
      <input
        value={busqueda}
        onChange={buscarPalabra}
        type="text"
        placeholder="Ingrese el lenguaje"
        style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc', minWidth: '240px' }}
      />

      {busqueda.trim() && <p style={{ fontWeight: 'bold' }}>{lenguajesFiltrados.length} resultados</p>}

      <ul>
        {lenguajesFiltrados.map((item) => (
          <li key={item.id}>{item.lenguaje}</li>
        ))}
      </ul>
    </div>
  );
}
