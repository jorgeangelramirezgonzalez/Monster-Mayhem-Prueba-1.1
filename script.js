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

// --- LÓGICA DE INTERACTIVIDAD: SELECCIÓN POR CLIC ---

// 1. Creamos una variable en memoria para guardar cuál es el hexágono seleccionado actualmente
let currentSelectedHex = null;

// 2. Buscamos TODOS los hexágonos que acabamos de meter al contenedor
const allHexagons = document.querySelectorAll('.hexagon');

// 3. Le asignamos un "escuchador de clics" (EventListener) a cada uno de ellos
allHexagons.forEach(hex => {
    hex.addEventListener('click', function() {
        
        // REGLA A: Si el usuario hace clic en el hexágono que YA estaba seleccionado, lo deseleccionamos
        if (currentSelectedHex === hex) {
            hex.classList.remove('selected');
            currentSelectedHex = null; // Volvemos a dejar el tablero sin selección
            console.log("Casilla deseleccionada");
        } 
        // REGLA B: Si hace clic en un hexágono nuevo
        else {
            // Si ya había otro seleccionado antes en el tablero, le quitamos el color amarillo
            if (currentSelectedHex !== null) {
                currentSelectedHex.classList.remove('selected');
            }
            
            // Le ponemos el color amarillo al nuevo hexágono clicado
            hex.classList.add('selected');
            
            // Guardamos este nuevo hexágono como el "activo" en nuestra variable
            currentSelectedHex = hex;
            
            // Imprimimos en la consola de desarrollo la coordenada exacta para verificar
            console.log(`Casilla seleccionada en la coordenada: Fila ${hex.dataset.row}, Columna ${hex.dataset.col}`);
        }
    });
});