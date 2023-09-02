function categoria() {
    debugger;
    const valueCategoria = document.getElementById('categoriaTest').value;
    const valueCantidad = document.getElementById('cantidadTest').value;
    const resumenFinal = document.getElementById('resumen');

    const resumen = valueCategoria * valueCantidad;
    resumenFinal.innerHTML = resumen;
}

function reset() {
    document.getElementById("myForm").reset();
}
