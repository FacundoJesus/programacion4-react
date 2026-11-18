// ----------------------- EJERCICIO 1 --------------------------------
interface ProductoProps {
  nombre: string;
  precio: number;
  stock: number;
}

// 1. Desestructurar las props en la firma como sugiere la pista
function Producto({ nombre, precio, stock }: ProductoProps) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', margin: '8px 0', borderRadius: '8px' }}>
      <h3>{nombre}</h3>
      <p>Precio: ${precio}</p>
      <p>{stock === 0 ? "Sin stock" : `Stock: ${stock} unidades`}</p>
    </div>
  );
}

// 3. Mostrar el componente tres veces con datos distintos
export default function Ej1() {
  return (
    <div>
      <h3>Lista de Productos</h3>
      <Producto nombre="Teclado" precio={45000} stock={12} />
      <Producto nombre="Mouse" precio={18000} stock={0} />
      <Producto nombre="Monitor" precio={32000} stock={3} />
    </div>
  );
}
