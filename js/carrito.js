let carrito;
let cliente;

class Carrito {
  constructor(cliente) {
    this.cliente = cliente;
    this.productosSeleccionados = [];
    this.tipoCuotas = { cantidadCuotas: 0, porcentajeRecargo: 0 };
  }

  agregarProducto(producto) {
    this.productosSeleccionados.push(producto);
    guardarCarritoLocal(this);
  }

  quitarProducto(producto) {
    let index = this.productosSeleccionados.findIndex(
      (item) => item.nombre == producto.nombre
    );

    if (index >= 0) {
      this.productosSeleccionados.splice(index, 1);
    }
    guardarCarritoLocal(this);
  }

  calcularTotalCarritoSinRecargo() {
    return this.productosSeleccionados.reduce((acc, item) => {
      return (acc += item.precio);
    }, 0);
  }

  aplicarInteres(porcentajeRecargo) {
    return this.productosSeleccionados.map(
      (item) => item.precio + item.precio * porcentajeRecargo
    );
  }

  calcularTotalCarritoConRecargo() {
    return this.aplicarInteres(this.tipoCuotas.porcentajeRecargo).reduce(
      (acc, item) => (acc += item),
      0
    );
  }

  armarDetalleCuotas() {
    const costoCuota = this.calcularCostoCuota();
    let detalleCuotas = "";

    for (let i = 1; i <= this.tipoCuotas.cantidadCuotas; i += 1) {
      detalleCuotas += "<li>" + i + ") $" + costoCuota + "<li/>";
    }

    return detalleCuotas;
  }

  calcularCostoCuota() {
    return (
      this.calcularTotalCarritoConRecargo()/
      this.tipoCuotas.cantidadCuotas
    ).toFixed(2);
  }
}
//        INICIALIZAR CARRITO
const initCarrito = (sesionNueva) => {
  //Obtengo el objeto Cliente del Local Storage
  cliente = obtenerObjetoLocal(claveCliente);

  //Obtengo o creo objeto Carrito
  carrito = getInstanciaCarrito(sesionNueva);


  completarEncabezadoCliente(cliente.nombre, cliente.pais, cliente.cel);

  configurarBtnAumentarCantidad();
  configurarBtnDisminuirCantidad();
  completarCantidadesIniciales();

  //Actualizo detalle de cuotas
  const idBtn = obtenerValorLocal(claveIdBtnCuotas);
  actualizarRecargoCuotas(carrito.tipoCuotas.cantidadCuotas, idBtn);
  actualizarResumenCompra();
};

//        OBTENER INSTANCIA DE CARRITO
const getInstanciaCarrito = (sesionNueva) => {
  let instancia;

  if (sesionNueva) {
    instancia = new Carrito(cliente);

    guardarCarritoLocal(instancia);
  } else {
    instancia = getCarritoLocal();
  }

  return instancia;
};

/* -------------------------------------- */
const completarEncabezadoCliente = (nombreCliente, paisCliente, celCliente) => {
  encabezadoNombreCliente.innerHTML = nombreCliente;
  encabezadoPaisCliente.innerHTML = paisCliente;
  encabezadoCelCliente.innerHTML = celCliente;
};

//        CONFIGURACION BOTONES AUMENTAR CANTIDAD
function aumentarCantidadSeleccionada(objetoHTML, producto, cantidad = 1) {
  carrito.agregarProducto(producto);
  objetoHTML.innerHTML = obtenerCantidadProductoEnCarrito(producto);
  actualizarResumenCompra();
  actualizarDetalleCuotas();
  notificarProductoAñadido();
}

const configurarBtnAumentarCantidad = () => {
  btnMasClase30.addEventListener("click", () => {
    aumentarCantidadSeleccionada(cantidadClase30, clase30);
  });
  btnMasClase45.addEventListener("click", () => {
    aumentarCantidadSeleccionada(cantidadClase45, clase45);
  });
  btnMasClase60.addEventListener("click", () => {
    aumentarCantidadSeleccionada(cantidadClase60, clase60);
  });
  btnMasBelting.addEventListener("click", () => {
    aumentarCantidadSeleccionada(cantidadBelting, belting);
  });
  btnMasMixta.addEventListener("click", () => {
    aumentarCantidadSeleccionada(cantidadMixta, mixta);
  });
  btnMasAfinacion.addEventListener("click", () => {
    aumentarCantidadSeleccionada(cantidadAfinacion, afinacion);
  });
  btnMasRedesSociales.addEventListener("click", () => {
    aumentarCantidadSeleccionada(cantidadRedesSociales, redesSociales);
  });
  btnMasComposicion.addEventListener("click", () => {
    aumentarCantidadSeleccionada(cantidadComposicion, composicion);
  });
  btnMasVocalizacion.addEventListener("click", () => {
    aumentarCantidadSeleccionada(cantidadVocalizacion, vocalizacion);
  });
};

//              CONFIGURACION BOTONES DISMINUIR CANTIDAD
function disminuirCantidadSeleccionada(objetoHTML, producto, cantidad = 1) {
  let cantActual = obtenerCantidadProductoEnCarrito(producto);

  if (cantActual > 0) {
    carrito.quitarProducto(producto);
    objetoHTML.innerHTML = obtenerCantidadProductoEnCarrito(producto);
    notificarProductoEliminado();
    actualizarResumenCompra();
    actualizarDetalleCuotas();
  }
}

const configurarBtnDisminuirCantidad = () => {
  btnMenosClase30.addEventListener("click", () => {
    disminuirCantidadSeleccionada(cantidadClase30, clase30);
  });
  btnMenosClase45.addEventListener("click", () => {
    disminuirCantidadSeleccionada(cantidadClase45, clase45);
  });
  btnMenosClase60.addEventListener("click", () => {
    disminuirCantidadSeleccionada(cantidadClase60, clase60);
  });
  btnMenosBelting.addEventListener("click", () => {
    disminuirCantidadSeleccionada(cantidadBelting, belting);
  });
  btnMenosMixta.addEventListener("click", () => {
    disminuirCantidadSeleccionada(cantidadMixta, mixta);
  });
  btnMenosAfinacion.addEventListener("click", () => {
    disminuirCantidadSeleccionada(cantidadAfinacion, afinacion);
  });
  btnMenosRedesSociales.addEventListener("click", () => {
    disminuirCantidadSeleccionada(cantidadRedesSociales, redesSociales);
  });
  btnMenosComposicion.addEventListener("click", () => {
    disminuirCantidadSeleccionada(cantidadComposicion, composicion);
  });
  btnMenosVocalizacion.addEventListener("click", () => {
    disminuirCantidadSeleccionada(cantidadVocalizacion, vocalizacion);
  });
};

const notificarCambioUsuario = (
  texto,
  destino,
  posicionX,
  posicionY,
  colorBackground
) => {
  Toastify({
    text: texto,
    duration: 3000,
    destination: destino,
    newWindow: true,
    close: true,
    gravity: posicionX, // `top` or `bottom`
    position: posicionY, // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: colorBackground,
    },
    onClick: function () {}, // Callback after click
  }).showToast();
};

const notificarProductoAñadido = () => {
  const texto = "Producto Añadido!";
  const destino = "";
  const posicionX = "top"; // `top` or `bottom`
  const posicionY = "right"; // `left`, `center` or `right`
  const colorBackground = "linear-gradient(to right, #00b09b, #96c93d);";

  notificarCambioUsuario(texto, destino, posicionX, posicionY, colorBackground);
};
const notificarProductoEliminado = () => {
  const texto = "Producto Eliminado!";
  const destino = "";
  const posicionX = "top"; // `top` or `bottom`
  const posicionY = "right"; // `left`, `center` or `right`
  const colorBackground ="linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)";

  notificarCambioUsuario(texto, destino, posicionX, posicionY, colorBackground);
};

// Cantidad de Productos seleccionados Config.
const obtenerCantidadProductoEnCarrito = (producto) => {
  let cantidad = 0;
  for (let item of carrito.productosSeleccionados) {
    cantidad += item.nombre == producto.nombre ? 1 : 0;
  }
  return cantidad;
};

const setCantidadesInicialesPorProducto = (objetoHTML, producto) => {
  objetoHTML.innerHTML = obtenerCantidadProductoEnCarrito(producto);
};

const completarCantidadesIniciales = () => {
  setCantidadesInicialesPorProducto(cantidadClase30, clase30);
  setCantidadesInicialesPorProducto(cantidadClase45, clase45);
  setCantidadesInicialesPorProducto(cantidadClase60, clase60);
  setCantidadesInicialesPorProducto(cantidadBelting, belting);
  setCantidadesInicialesPorProducto(cantidadMixta, mixta);
  setCantidadesInicialesPorProducto(cantidadAfinacion, afinacion);
  setCantidadesInicialesPorProducto(cantidadRedesSociales, redesSociales);
  setCantidadesInicialesPorProducto(cantidadComposicion, composicion);
  setCantidadesInicialesPorProducto(cantidadVocalizacion, vocalizacion);
};

//      ACTUALIZAR RESUMEN COMPRA

function actualizarResumenCompra() {
  const sinRecargo = carrito.calcularTotalCarritoSinRecargo();
  const conRecargo = carrito.calcularTotalCarritoConRecargo();

  totalSeleccionado.innerHTML = carrito.productosSeleccionados.length;
  montoAcumulado.innerHTML = sinRecargo;
  recargoCuotas.innerHTML = conRecargo - sinRecargo;
  montoTotal.innerHTML = conRecargo;
}

//           ACTUALIZAR CUOTAS

function actualizarRecargoCuotas(cantidadCuotas, btnID) {
  if (cantidadCuotas != 0) {
    const cuotas = new TipoCuotas(cantidadCuotas);
    carrito.tipoCuotas = cuotas;
    guardarCarritoLocal(carrito);

    guardarValorLocal(claveIdBtnCuotas, btnID);
    actualizarResumenCompra();
    actualizarDetalleCuotas();
    cambiarEstadoBtn(btnID);
    notificarCantidadCuotas(cantidadCuotas);
  }
}

const notificarCantidadCuotas = (cantidadCuotas) => {
  const texto =
    cantidadCuotas == 1
      ? `Pagas en ${cantidadCuotas} cuota!`
      : `Pagas en ${cantidadCuotas} cuotas!`;
  const destino = "";
  const posicionX = "bottom"; // `top` or `bottom`
  const posicionY = "center"; // `left`, `center` or `right`
  const colorBackground = "linear-gradient(90deg, #1CB5E0 0%, #000851 100%)";

  notificarCambioUsuario(texto, destino, posicionX, posicionY, colorBackground);
};

function cambiarEstadoBtn(btnID) {
  for (let item of allBtns) {
    item.className = "btn btn-ahora-unselected";
  }
  let btn = document.querySelector(`#${CSS.escape(btnID)}`);
  btn.className = "btn btn-ahora-selected";
}

//   ACTUALIZAR DETALLE CUOTAS

function actualizarDetalleCuotas() {
  listaDetalleCuotas.innerHTML = carrito.armarDetalleCuotas();
}
