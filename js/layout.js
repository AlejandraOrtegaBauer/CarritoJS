//HTML CARRITO

const carritoHTML = ` <div class="carrito">
<div class="lista-articulos animate__animated animate__fadeInLeft">
  <h1 class="titulo-seccion">Servicios</h2>
  <div class="articulo">
    <div class="articulo-descripcion">
      <img
        src="imagenes/voz_cabeza.jpg"
        alt="Clase de Canto (30 minutos)"
        class="articulo-img"
      />
      <div class="articulo-descripcion__descripcion">
        <h4>Clase de Canto (30 minutos)</h4>
        <p class="articulo-descripcion__precioPorUnidad">
          Precio por Unidad: <strong id="precio-Clase30">0</strong>
        </p>
        <p class="articulo-descripcion__cantidadSeleccionada">
          Cantidad Seleccionada: <strong id="cantidad-Clase30">0</strong>
        </p>
      </div>
    </div>
    <div class="articulo-controles">
      <button id="btnMenosClase30" class="articulo-controles__botonMenos">
        -
      </button>
      <button id="btnMasClase30" class="articulo-controles__botonMas">
        +
      </button>
    </div>
  </div>

  
  <div class="articulo">
    <div class="articulo-descripcion">
      <img
        src="imagenes/afinacion.jpg"
        alt="Clase de Canto (45 minutos)"
        class="articulo-img"
      />
      <div class="articulo-descripcion__descripcion">
        <h4>Clase de Canto (45 minutos)</h4>
        <p class="articulo-descripcion__precioPorUnidad">
          Precio por Unidad: <strong id="precio-Clase45">0</strong>
        </p>
        <p class="articulo-descripcion__cantidadSeleccionada">
          Cantidad Seleccionada:
          <strong id="cantidad-Clase45">0</strong>
        </p>
      </div>
    </div>
    <div class="articulo-controles">
      <button
        id="btnMenosClase45"
        class="articulo-controles__botonMenos"
      >
        -
      </button>
      <button id="btnMasClase45" class="articulo-controles__botonMas">
        +
      </button>
    </div>
  </div>


  <div class="articulo">
    <div class="articulo-descripcion">
      <img
        src="imagenes/voz-pecho.jpg"
        alt="Clase de Canto (60 minutos)"
        class="articulo-img"
      />
      <div class="articulo-descripcion__descripcion">
        <h4>Clase de Canto (60 minutos)</h4>
        <p class="articulo-descripcion__precioPorUnidad">
          Precio por Unidad: <strong id="precio-Clase60">0</strong>
        </p>
        <p class="articulo-descripcion__cantidadSeleccionada">
          Cantidad Seleccionada: <strong id="cantidad-Clase60">0</strong>
        </p>
      </div>
    </div>
    <div class="articulo-controles">
      <button
        id="btnMenosClase60"
        class="articulo-controles__botonMenos"
      >
        -
      </button>
      <button id="btnMasClase60" class="articulo-controles__botonMas">
        +
      </button>
    </div>
  </div>

  <div class="articulo">
    <div class="articulo-descripcion">
      <img
        src="imagenes/belting.jpg"
        alt="Curso de Belting"
        class="articulo-img"
      />
      <div class="articulo-descripcion__descripcion">
        <h4>Curso de Belting</h4>
        <p class="articulo-descripcion__precioPorUnidad">
          Precio por Unidad: <strong id="precio-Belting">0</strong>
        </p>
        <p class="articulo-descripcion__cantidadSeleccionada">
          Cantidad Seleccionada: <strong id="cantidad-Belting">0</strong>
        </p>
      </div>
    </div>
    <div class="articulo-controles">
      <button id="btnMenosBelting" class="articulo-controles__botonMenos">
        -
      </button>
      <button id="btnMasBelting" class="articulo-controles__botonMas">
        +
      </button>
    </div>
  </div>


  <div class="articulo">
    <div class="articulo-descripcion">
      <img
        src="imagenes/voz_mixta.jpg"
        alt="Curso Entrenamiento Voz Mixta"
        class="articulo-img"
      />
      <div class="articulo-descripcion__descripcion">
        <h4>Curso Entrenamiento Voz Mixta</h4>
        <p class="articulo-descripcion__precioPorUnidad">
          Precio por Unidad: <strong id="precio-Mixta">0</strong>
        </p>
        <p class="articulo-descripcion__cantidadSeleccionada">
          Cantidad Seleccionada: <strong id="cantidad-Mixta">0</strong>
        </p>
      </div>
    </div>
    <div class="articulo-controles">
      <button
        id="btnMenosMixta"
        class="articulo-controles__botonMenos"
      >
        -
      </button>
      <button id="btnMasMixta" class="articulo-controles__botonMas">
        +
      </button>
    </div>
  </div>

  <div class="articulo">
  <div class="articulo-descripcion">
    <img
      src="imagenes/respiracion.jpg"
      alt="Curso Afinacion"
      class="articulo-img"
    />
    <div class="articulo-descripcion__descripcion">
      <h4>Curso Afinación</h4>
      <p class="articulo-descripcion__precioPorUnidad">
        Precio por Unidad: <strong id="precio-Afinacion">0</strong>
      </p>
      <p class="articulo-descripcion__cantidadSeleccionada">
        Cantidad Seleccionada: <strong id="cantidad-Afinacion">0</strong>
      </p>
    </div>
  </div>
  <div class="articulo-controles">
    <button
      id="btnMenosAfinacion"
      class="articulo-controles__botonMenos"
    >
      -
    </button>
    <button id="btnMasAfinacion" class="articulo-controles__botonMas">
      +
    </button>
  </div>
</div>

<div class="articulo">
<div class="articulo-descripcion">
  <img
    src="imagenes/plan_rrss.jpg"
    alt="Plan Redes Sociales Para Artistas"
    class="articulo-img"
  />
  <div class="articulo-descripcion__descripcion">
    <h4>Plan Redes Sociales Para Artistas</h4>
    <p class="articulo-descripcion__precioPorUnidad">
      Precio por Unidad: <strong id="precio-RedesSociales">0</strong>
    </p>
    <p class="articulo-descripcion__cantidadSeleccionada">
      Cantidad Seleccionada: <strong id="cantidad-RedesSociales">0</strong>
    </p>
  </div>
</div>
<div class="articulo-controles">
  <button
    id="btnMenosRedesSociales"
    class="articulo-controles__botonMenos"
  >
    -
  </button>
  <button id="btnMasRedesSociales" class="articulo-controles__botonMas">
    +
  </button>
</div>
</div>

<div class="articulo">
<div class="articulo-descripcion">
  <img
    src="imagenes/compo.jpg"
    alt="Clase de Composicion Musical"
    class="articulo-img"
  />
  <div class="articulo-descripcion__descripcion">
    <h4>Clase de Composición Musical</h4>
    <p class="articulo-descripcion__precioPorUnidad">
      Precio por Unidad: <strong id="precio-Composicion">0</strong>
    </p>
    <p class="articulo-descripcion__cantidadSeleccionada">
      Cantidad Seleccionada: <strong id="cantidad-Composicion">0</strong>
    </p>
  </div>
</div>
<div class="articulo-controles">
  <button
    id="btnMenosComposicion"
    class="articulo-controles__botonMenos"
  >
    -
  </button>
  <button id="btnMasComposicion" class="articulo-controles__botonMas">
    +
  </button>
</div>
</div>

<div class="articulo">
<div class="articulo-descripcion">
  <img
    src="imagenes/voz_cabeza.jpg"
    alt="Vocalizaciones"
    class="articulo-img"
  />
  <div class="articulo-descripcion__descripcion">
    <h4>Vocalizaciones</h4>
    <p class="articulo-descripcion__precioPorUnidad">
      Precio por Unidad: <strong id="precio-Vocalizacion">0</strong>
    </p>
    <p class="articulo-descripcion__cantidadSeleccionada">
      Cantidad Seleccionada: <strong id="cantidad-Vocalizacion">0</strong>
    </p>
  </div>
</div>
<div class="articulo-controles">
  <button
    id="btnMenosVocalizacion"
    class="articulo-controles__botonMenos"
  >
    -
  </button>
  <button id="btnMasVocalizacion" class="articulo-controles__botonMas">
    +
  </button>
</div>
</div>

<div class="detalleGastos animate__animated animate__fadeInUp">
  <p class="titulo-seccion">Pago en Cuotas</p>
  <div class="ingreso-cuotas">
    <p class="detalleGastos-itemDetalle">
      <strong>Cantidad de Cuotas:</strong>
    </p>
    <div class="planes-cuotas">
      <div class="cuota1">
        <button id="btnCuota1" class="btn btn-ahora-unselected">
          1
        </button>
        <p class="porcentajeInteres">(0%)</p>
      </div>
      <div class="cuota2">
        <button id="btnCuota3" class="btn btn-ahora-unselected">
          3
        </button>
        <p class="porcentajeInteres">(10%)</p>
      </div>
      <div class="cuota3">
        <button id="btnCuota6" class="btn btn-ahora-unselected">
          6
        </button>
        <p class="porcentajeInteres">(30%)</p>
      </div>
    </div>
  </div>

  <div class="detalleCuotas">
    <p class="titulo-seccion">Detalle de Cuotas</p>
    <ul id="listaDetalleCuotas"></ul>
  </div>
</div>
<div class="resumenCompra animate__animated animate__fadeInRight">
  <p class="titulo-seccion">Resumen Compra</p>
  <div>
    <p class="detalleGastos-itemDetalle">
      <strong> Total Artículos Seleccionados:</strong>
      <span id="totalSeleccionado">0</span>
    </p>
    <p class="detalleGastos-itemDetalle">
      <strong> Monto Acumulado:</strong> $<span id="montoAcumulado"
        >0</span
      >
    </p>
    <p class="detalleGastos-itemDetalle">
      <strong>Recargo por Cuotas :</strong>
      $<span id="recargoCuotas">0</span>
    </p>
    <p class="detalleGastos-montoTotal">
      <strong>Monto Total:</strong> $<span id="montoTotal">0</span>
    </p>
  </div>
  <div id="botones-encabezado">
  <button id="button-finalizarcompra" class="btn-encabezado">
    Finalizar Compra
  </button>
  <button id="button-cerrarsesion" class="btn-encabezado">
    Cerrar Sesión
  </button>
</div>
</div>
</div>`;

const cargarHTMLCarrito = () => {
  encabezado.innerHTML = encabezadoCarritoHTML;
  container.innerHTML = carritoHTML;
};
const cargarHTMLIngreso = () => {
  encabezado.innerHTML = encabezadoIngresoHTML;
  container.innerHTML = ingresoHTML;
};

// HTML INGRESO

const ingresoHTML = `
<div class="formulario">
  <div class="form-item">
    <label for="name">Nombre</label>
    <input
      class="inputs"
      type="text"
      name="name"
      id="input-name"
      value=""
    />
  </div>
  <div class="form-item">
    <label for="pais">País</label>
    <input
      class="inputs"
      type="text"
      name="pais"
      id="input-pais"
      value=""
    />
  </div>
  <div class="form-item">
  <label for="cel">Celular</label>
  <input
    class="inputs"
    type="text"
    name="cel"
    id="input-celular"
    value=""
  />
</div>
  <button id="button-ingresar">Ingresar</button>
</div>`;

const encabezadoIngresoHTML = `<h1>Alejandra Ortega - Vocal Coach</h1>
<h2>Productos y Recursos Para Artistas</h2>
<h3>Carrito de Compras</h3>`;

const encabezadoCarritoHTML = `<h1>Alejandra Ortega - Vocal Coach</h1>
<div class="user-data">
  <div class="header-fields">
    <p class="header-fields__label">Bienvenido/a</p>
    <p class="header-fields__label">País:</p>
    <p class="header-fields__label">Celular:</p>
  </div>
  <div class="header-inputs">
    <p id="header-inputs__nombreCliente" class="header-inputs__label"></p>
    <p id="header-inputs__paisCliente" class="header-inputs__label"></p>
    <p id="header-inputs__celCliente" class="header-inputs__label"></p>
  </div>
</div>`;
