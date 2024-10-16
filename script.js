function calcular() {
    // Obtener la tasa de cambio ingresada por el usuario
    const tasaCambio = parseFloat(document.getElementById("tasaCambio").value);

    // Obtener el contenedor de las tablas
    const tablaContainer = document.querySelector('.tabla-container');
    tablaContainer.innerHTML = '';

    // Crear 10 tablas
    for (let i = 0; i < 10; i++) {
        const nuevaTabla = document.createElement('table');
        nuevaTabla.classList.add('tabla');

        // Crear el encabezado de la tabla
        const thead = nuevaTabla.createTHead();
        const row = thead.insertRow();
        const cell1 = row.insertCell();
        const cell2 = row.insertCell();
        cell1.textContent = 'Dólares';
        cell2.textContent = 'Bolívares';

        // Crear el cuerpo de la tabla
        const tbody = nuevaTabla.createTBody();
        for (let j = 1; j <= 10; j++) {
            const fila = tbody.insertRow();
            const celdaDolar = fila.insertCell();
            const celdaBolivar = fila.insertCell();
            celdaDolar.textContent = j + (i * 10);
            // Redondear el valor de los bolívares a 2 decimales
            celdaBolivar.textContent = ((j + (i * 10)) * tasaCambio).toFixed(2);
        }

        // Agregar la tabla al contenedor
        tablaContainer.appendChild(nuevaTabla);
    }
}