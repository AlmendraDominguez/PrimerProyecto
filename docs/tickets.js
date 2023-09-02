function tickets() {
    const divContent = document.getElementById('comprarTicket');
    const content = `<div class="d-flex justify-content-center">
    <div class="card text-center col border-primary border-2 me-1">
        <div class="card-body px-0">
            <h4 class="card-title">Estudiante</h4>
            <p class="card-text fs-5">Tienen un descuento</p>
            <h5 class="card-title"><b>80%</b></h5>
            <p class="card-text"><small class="text-muted">*presentar documentacion</small></p>
        </div>
    </div>

    <div class="card text-center col border-info border-2 mx-1">
        <div class="card-body">
            <h4 class="card-title">Trainee</h4>
            <p class="card-text fs-5">Tienen un descuento</p>
            <h5 class="card-title"><b>50%</b></h5>
            <p class="card-text"><small class="text-muted">*presentar documentacion</small></p>
        </div>
    </div>

    <div class="card text-center col border-warning border-2 ms-1">
        <div class="card-body">
            <h4 class="card-title">Junior</h4>
            <p class="card-text fs-5">Tienen un descuento</p>
            <h5 class="card-title"><b>15%</b></h5>
            <p class="card-text"><small class="text-muted">*presentar documentacion</small></p>
        </div>
    </div>
</div>

</div>
</section>
<section class="container">
<div class="row d-flex justify-content-center">
<form id="myForm">
<div class="row text-center">
    <p>VENTA</p>
    <h1>VALOR DE TICKET $200</h1>
</div>

<div class="row">
    <input type="text" style="width: auto;" class="form-control col me-4" placeholder="Nombre" aria-label="Nombre" required>

    <input type="text" style="width: auto;" class="form-control col" placeholder="Apellido" aria-label="Apellido" required>
</div>
<div class="row mt-4">
    <input type="text" class="form-control" placeholder="Correo" aria-label="Correo" required>
</div>
<div class="row">
    <div class="cantidad col mt-3 px-0">
        <label for="basic-url" class="form-label col">Cantidad</label>
        <input type="text" class="form-control col" placeholder="Cantidad" aria-label="Cantidad" id="cantidadTest" required>
    </div>
    <div class="categoria col mt-3 ps-4 pe-0">
        <label for="basic-url" class="form-label col">Categoria</label>
        <select class="form-select col pe-0" aria-label="Default select example" id="categoriaTest">
            <option selected value="40">Estudiante</option>
            <option value="100">Trainee</option>
            <option value="170">Junior</option>
        </select>
    </div>
</div>
<div class="row mt-4">
<p class="border rounded p-2" style="background-color: rgba(204,229,255,255); height: 45px;">Total a pagar: $
<span id="resumen" class="montoTotal"></span>
</p></div>

<div class="row my-4">
    <button type="button" class="btn miBoton text-white col me-3" style="background-color: rgba(150,201,62,255)" onclick="reset()">Borrar</button>
    
    <button type="submit" class="btn miBoton text-white col ms-2" style="background-color: rgba(150,201,62,255)" onclick="categoria()">Resumen</button>
</div>
</form>`;

  divContent.innerHTML = content;
}

