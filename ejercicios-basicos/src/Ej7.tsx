// ----------------------- EJERCICIO 7 --------------------------------
interface ProductoProps {
  nombre: string;
  precio: number;
  stock: number;
  oferta: boolean;
}

// 1. Desestructurar las props en la firma como sugiere la pista
function Producto({ nombre, precio, stock, oferta }: ProductoProps) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', margin: '8px 0', borderRadius: '8px' }}>
      <h3>{nombre}</h3>
      {oferta && (
        <span
          style={{
            backgroundColor: '#16a34a',
            color: 'white',
            padding: '2px 8px',
            borderRadius: '4px',
            fontSize: '12px',
            fontWeight: 'bold',
          }}
        >
          ¡Oferta!
        </span>
      )}
      <p>Precio: ${precio}</p>
      <p>{stock === 0 ? 'Sin stock' : `Stock: ${stock} unidades`}</p>
    </div>
  );
}

// 3. Mostrar el componente tres veces con datos distintos
export default function Ej7() {
  return (
    <div>
      <h3>Lista de Productos en Promoción</h3>
      <Producto nombre="Teclado" precio={45000} stock={12} oferta={true} />
      <Producto nombre="Mouse" precio={18000} stock={0} oferta={false} />
      <Producto nombre="Monitor" precio={32000} stock={3} oferta={true} />
    </div>
  );
}
