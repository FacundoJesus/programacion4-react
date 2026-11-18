// ----------------------- EJERCICIO 2 --------------------------------
import { useState } from 'react';

export default function Ej2() {
  const [contador, setContador] = useState<number>(0);

  return (
    <div>
      <h3>Valor actual: {contador}</h3>
      <button disabled={contador === 0} onClick={() => setContador((c) => c - 1)}>
        -
      </button>{' '}
      <button disabled={contador === 10} onClick={() => setContador((c) => c + 1)}>
        +
      </button>{' '}
      <button onClick={() => setContador(0)}>Reiniciar</button>

      {contador === 10 && <p style={{ color: 'crimson', fontWeight: 'bold' }}>Llegaste al máximo</p>}
    </div>
  );
}
