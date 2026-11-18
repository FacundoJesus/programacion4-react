// ----------------------- EJERCICIO 3 --------------------------------
// Mostrar y ocultar - Condicionales
import './css/App.css';
import { useState } from 'react';

export default function Ej3() {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <div className="card" style={{ maxWidth: '480px' }}>
      <h3 className="card-title" style={{ fontSize: '20px', fontWeight: 'bold' }}>
        ¿Qué es JSX?
      </h3>
      <button
        onClick={() => setVisible(!visible)}
        className="card-button"
        type="button"
      >
        {visible ? 'Ocultar respuesta' : 'Mostrar respuesta'}
      </button>

      {visible && (
        <p className="card-text">
          Una sintaxis que permite escribir estructura parecida a HTML dentro de JavaScript. Se transforma en llamadas a funciones de React.
        </p>
      )}
    </div>
  );
}
