# Programación IV - Repositorio de Prácticas y Entregas (React)

Repositorio correspondiente a la cátedra de **Programación IV** (Tecnicatura Universitaria en Programación - UTN Paraná).

## Estructura del Repositorio

```text
programacion4-react/
   ejercicios-basicos/        (un proyecto Vite con los 7 ejercicios de "React desde cero")
   frontend-endpoints/        (prácticas de endpoints)
```

---

## Ejercicios Básicos (`ejercicios-basicos`)

Proyecto Vite + React + TypeScript que contiene la resolución de los 7 ejercicios de la guía "React desde cero":

- `src/Ej1.tsx`: Componente Producto con desestructuración de props (`nombre`, `precio`, `stock`).
- `src/Ej2.tsx`: Contador numérico con límites inferior (0) y superior (10) y reinicio.
- `src/Ej3.tsx`: Tarjeta interactiva con toggle para mostrar/ocultar concepto de JSX.
- `src/Ej4.tsx`: Conversor reactivo de temperatura Celsius a Fahrenheit calculado al vuelo.
- `src/Ej5.tsx`: Lista de compras con inserción y eliminación dinámica de ítems.
- `src/Ej6.tsx`: Buscador y filtro en tiempo real sobre lista de tecnologías/lenguajes.
- `src/Ej7.tsx`: Componente Producto con renderizado condicional de etiqueta "Oferta!".
- `src/App.tsx`: Vista general que integra y presenta los 7 ejercicios con títulos identificatorios.

### Instrucciones de Ejecución

```bash
cd ejercicios-basicos
npm install
npm run dev
```

Para compilar y validar TypeScript:

```bash
npm run build
```
