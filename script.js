// 1. Seleccionamos el contenedor del HTML donde meteremos el tablero
const gridContainer = document.getElementById('grid-container');

// 2. Definimos el tamaño de nuestra cuadrícula (10 filas por 10 columnas = 100 hexágonos)
const ROWS = 10;
const COLS = 10;

// 3. Usamos dos bucles "for" (un bucle dentro de otro) para generar la cuadrícula
for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
        
        // Creamos un nuevo elemento DIV en memoria
        const hex = document.createElement('div');
        
        // Le asignamos la clase "hexagon" para que herede los estilos del CSS
        hex.classList.add('hexagon');
        
        // REQUISITO DE COMPRENSIÓN: Guardamos las coordenadas en el propio hexágono
        // Esto nos servirá más adelante para saber exactamente cuál hexágono clicamos
        hex.dataset.row = r;
        hex.dataset.col = c;
        
        // OPCIONAL: Ponemos texto dentro para ver la coordenada de prueba (ej: "0,0")
        hex.innerText = `${r},${c}`;

        // Metemos el hexágono recién creado dentro de nuestro contenedor principal
        gridContainer.appendChild(hex);
    }
}