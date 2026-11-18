// ----------------------- EJERCICIO 5 --------------------------------
import { useState } from 'react';
import type { ChangeEvent } from 'react';

// Definimos la estructura de cada ítem de la lista
interface Producto {
  id: number;
  name: string;
}

export default function Ej5() {
  const [producto, setProducto] = useState<string>('');
  const [lista, setLista] = useState<Producto[]>([]);

  function manejarCambio(e: ChangeEvent<HTMLInputElement>) {
    setProducto(e.target.value);
  }

  function agregarItem() {
    if (producto.trim() === '') return;

    const newItem: Producto = {
      id: Date.now(),
      name: producto.trim(),
    };

    setLista([...lista, newItem]);
    setProducto('');
  }

  function eliminarItem(id: number) {
    setLista(lista.filter((i) => i.id !== id));
  }

  return (
    <div>
      <h3>Lista de compras</h3>
      <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
        <input
          value={producto}
          onChange={manejarCambio}
          type="text"
          placeholder="Ej. yerba"
          style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <button onClick={agregarItem} style={{ padding: '8px 16px' }}>
          Agregar
        </button>
      </div>

      {lista.length === 0 ? (
        <p>No hay nada para comprar</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {lista.map((item) => (
            <li
              key={item.id}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                maxWidth: '300px',
                padding: '6px 0',
                borderBottom: '1px solid #eee',
              }}
            >
              <span>{item.name}</span>
              <button onClick={() => eliminarItem(item.id)} style={{ color: 'crimson' }}>
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
