let btnMasClase30;
let btnMasClase45;
let btnMasClase60;
let btnMasBelting;
let btnMasMixta;
let btnMasAfinacion;
let btnMasRedesSociales;
let btnMasComposicion;
let btnMasVocalizacion;

let btnMenosClase30;
let btnMenosClase45;
let btnMenosClase60;
let btnMenosBelting;
let btnMenosMixta;
let btnMenosAfinacion;
let btnMenosRedesSociales;
let btnMenosComposicion;
let btnMenosVocalizacion;

let precioClase30;
let precioClase45;
let precioClase60;
let precioBelting;
let precioMixta;
let precioAfinacion;
let precioRedesSociales;
let precioComposicion;
let precioVocalizacion;

let cantidadClase30;
let cantidadClase45;
let cantidadClase60;
let cantidadBelting;
let cantidadMixta;
let cantidadAfinacion;
let cantidadRedesSociales;
let cantidadComposicion;
let cantidadVocalizacion;


let nombreClase30;
let nombreClase45;
let nombreClase60;
let nombreBelting;
let nombreMixta;
let nombreAfinacion;
let nombreRedesSociales;
let nombreComposicion;
let nombreVocalizacion;


let imgClase30;
let imgClase45;
let imgClase60;
let imgBelting;
let imgMixta;
let imgAfinacion;
let imgRedesSociales;
let imgComposicion;
let imgVocalizacion;


let costoActualClase30;
let costoActualClase45;
let costoActualClase60;
let costoActualBelting;
let costoActualMixta;
let costoActualAfinacion;
let costoActualRedesSociales;
let costoActualComposicion;
let costoActualVocalizacion;


let porcentajeActualGananciaClase30;
let porcentajeActualGananciaClase45;
let porcentajeActualGananciaClase60;
let porcentajeActualGananciaBelting;
let porcentajeActualGananciaMixta;
let porcentajeActualGananciaAfinacion;
let porcentajeActualGananciaRedesSociales;
let porcentajeActualGananciaComposicion;
let porcentajeActualGananciaVocalizacion;

let clase30;
let clase45;
let clase60;
let belting;
let mixta;
let afinacion;
let redesSociales;
let composicion;
let vocalizacion;

let encabezadoNombreCliente;
let encabezadoPaisCliente;
let encabezadoCelCliente;

let totalSeleccionado;
let montoAcumulado;
let recargoCuotas;
let montoTotal;

let btnCuota1;
let btnCuota3;
let btnCuota6;
let allBtns;

let listaDetalleCuotas;

let btnCerrarSesion;
let btnFinalizarCompra;

const initTienda = async (sesionNueva) => {
  cargarHTMLCarrito();
  getObjHTMLCarrito();
  inicializarVariablesProductos();
  await crearInstanciasProductos();
  completarPrecios();
  initCarrito(sesionNueva);
};

const getObjHTMLCarrito = () => {
  btnCerrarSesion = document.querySelector("#button-cerrarsesion");
  btnCerrarSesion.addEventListener("click", cerrarSesion);
  btnFinalizarCompra = document.querySelector("#button-finalizarcompra");
  btnFinalizarCompra.addEventListener("click", finalizarCompra);

  btnMasClase30 = document.querySelector("#btnMasClase30");
  btnMasClase45 = document.querySelector("#btnMasClase45");
  btnMasClase60 = document.querySelector("#btnMasClase60");
  btnMasBelting = document.querySelector("#btnMasBelting");
  btnMasMixta = document.querySelector("#btnMasMixta");
  btnMasAfinacion = document.querySelector("#btnMasAfinacion");
  btnMasRedesSociales = document.querySelector("#btnMasRedesSociales");
  btnMasComposicion = document.querySelector("#btnMasComposicion");
  btnMasVocalizacion = document.querySelector("#btnMasVocalizacion");

  btnMenosClase30 = document.querySelector("#btnMenosClase30");
  btnMenosClase45 = document.querySelector("#btnMenosClase45");
  btnMenosClase60 = document.querySelector("#btnMenosClase60");
  btnMenosBelting = document.querySelector("#btnMenosBelting");
  btnMenosMixta = document.querySelector("#btnMenosMixta");
  btnMenosAfinacion = document.querySelector("#btnMenosAfinacion");
  btnMenosRedesSociales = document.querySelector("#btnMenosRedesSociales");
  btnMenosComposicion = document.querySelector("#btnMenosComposicion");
  btnMenosVocalizacion = document.querySelector("#btnMenosVocalizacion");

  precioClase30 = document.querySelector("#precio-Clase30");
  precioClase45 = document.querySelector("#precio-Clase45");
  precioClase60 = document.querySelector("#precio-Clase60");
  precioBelting = document.querySelector("#precio-Belting");
  precioMixta = document.querySelector("#precio-Mixta");
  precioAfinacion = document.querySelector("#precio-Afinacion");
  precioRedesSociales = document.querySelector("#precio-RedesSociales");
  precioComposicion = document.querySelector("#precio-Composicion");
  precioVocalizacion = document.querySelector("#precio-Vocalizacion");

  cantidadClase30 = document.querySelector("#cantidad-Clase30");
  cantidadClase45 = document.querySelector("#cantidad-Clase45");
  cantidadClase60 = document.querySelector("#cantidad-Clase60");
  cantidadBelting = document.querySelector("#cantidad-Belting");
  cantidadMixta = document.querySelector("#cantidad-Mixta");
  cantidadAfinacion = document.querySelector("#cantidad-Afinacion");
  cantidadRedesSociales = document.querySelector("#cantidad-RedesSociales");
  cantidadComposicion = document.querySelector("#cantidad-Composicion");
  cantidadVocalizacion = document.querySelector("#cantidad-Vocalizacion");


  encabezadoNombreCliente = document.querySelector(
    "#header-inputs__nombreCliente"
  );

  totalSeleccionado = document.querySelector("#totalSeleccionado");
  montoAcumulado = document.querySelector("#montoAcumulado");
  recargoCuotas = document.querySelector("#recargoCuotas");
  montoTotal = document.querySelector("#montoTotal");

  btnCuota1 = document.querySelector("#btnCuota1");
  btnCuota3 = document.querySelector("#btnCuota3");
  btnCuota6 = document.querySelector("#btnCuota6");
  allBtns = document.querySelectorAll(".planes-cuotas button");

  btnCuota1.addEventListener("click", () => {
    actualizarRecargoCuotas(1, btnCuota1.id);
  });
  btnCuota3.addEventListener("click", () => {
    actualizarRecargoCuotas(3, btnCuota3.id);
  });
  btnCuota6.addEventListener("click", () => {
    actualizarRecargoCuotas(6, btnCuota6.id);
  });

  listaDetalleCuotas = document.querySelector("#listaDetalleCuotas");
};

const inicializarVariablesProductos = () => {
  nombreClase30 = "Clase30";
  nombreClase45 = "Clase45";
  nombreClase60 = "Clase60";
  nombreBelting = "Belting";
  nombreMixta = "Mixta";
  nombreAfinacion = "Afinacion";
  nombreRedesSociales = "RedesSociales";
  nombreComposicion = "Composicion";
  nombreVocalizacion = "Vocalizaciones";
  imgClase30 = "imagenes/voz_cabeza.jpg";
  imgClase45 = "imagenes/afinacion.jpg";
  imgClase60 = "imagenes/voz-pecho.jpg";
  imgBelting = "imagenes/belting.jpg";
  imgMixta = "imagenes/voz_mixta.jpg";
  imgAfinacion = "imagenes/respiracion.jpg";
  imgRedesSociales = "imagenes/plan_rrss.jpg";
  imgComposicion = "imagenes/compo.jpg";
  imgVocalizacion = "imagenes/voz_cabeza.jpg";
  costoActualClase30 = 500;
  costoActualClase45 = 700;
  costoActualClase60 = 900;
  costoActualBelting = 3000;
  costoActualMixta = 3000;
  costoActualAfinacion = 3000;
  costoActualRedesSociales = 4000;
  costoActualComposicion = 900;
  costoActualVocalizacion = 3000;
  porcentajeActualGananciaClase30 = 0.5;
  porcentajeActualGananciaClase45 = 0.5;
  porcentajeActualGananciaClase60 = 0.5;
  porcentajeActualGananciaBelting = 0.5;
  porcentajeActualGananciaMixta = 0.5;
  porcentajeActualGananciaAfinacion = 0.5;
  porcentajeActualGananciaRedesSociales = 0.5;
  porcentajeActualGananciaComposicion = 0.5;
  porcentajeActualGananciaVocalizacion = 0.5;
};

const cerrarSesion = () => {
  limpiarLocal();
  guardarValorLocal(claveSesionIniciada, 0);
  Swal.fire({
    title: "Cerrar Sesión",
    text: "Tu sesión finalizó correctamente.",
    icon: "success",
    confirmButtonText: "OK!",
    timer: 2000,
  });
  initIngreso();
};

const finalizarCompra = () => {
  if (carrito.productosSeleccionados.length > 0) {
    Swal.fire({
      title: "Compra Confirmada!",
      text: "¡Gracias por tu compra! Recibirás un whatsapp con los detalles de pago y un kit sorpresa.",
      icon: "success",
      confirmButtonText: "OK!",
      timer: 5000,
    });

    limpiarLocal();
    guardarValorLocal(claveSesionIniciada, 0);
    initIngreso();
  } else {
    Swal.fire({
      title: "Carrito Vacío!",
      text: "¡No has seleccionado nada aún!",
      icon: "error",
      confirmButtonText: "OK!",
      timer: 2000,
    });
  }
};

//                  INSTANCIAS
const crearInstanciasProductos = async () => {
  let datos = await obtenerDatosProductos();

  let clase30JSON = datos.filter((dato) => {
    return dato.nombre == "clase30";
  })[0];
  clase30 = crearServicio(clase30JSON);

  let clase45JSON = datos.filter((dato) => {
    return dato.nombre == "clase45";
  })[0];
  clase45 = crearServicio(clase45JSON);

  let clase60JSON = datos.filter((dato) => {
    return dato.nombre == "clase60";
  })[0];
  clase60 = crearServicio(clase60JSON);

  let beltingJSON = datos.filter((dato) => {
    return dato.nombre == "belting";
  })[0];
  belting = crearServicio(beltingJSON);

  let mixtaJSON = datos.filter((dato) => {
    return dato.nombre == "mixta";
  })[0];
  mixta = crearServicio(mixtaJSON);

  let afinacionJSON = datos.filter((dato) => {
    return dato.nombre == "afinacion";
  })[0];
  afinacion = crearServicio(afinacionJSON);

  let redesSocialesJSON = datos.filter((dato) => {
    return dato.nombre == "redesSociales";
  })[0];
  redesSociales = crearServicio(redesSocialesJSON);

  let composicionJSON = datos.filter((dato) => {
    return dato.nombre == "composicion";
  })[0];
  composicion = crearServicio(composicionJSON);

  let vocalizacionJSON = datos.filter((dato) => {
    return dato.nombre == "vocalizaciones";
  })[0];
  vocalizacion = crearServicio(vocalizacionJSON);
};

const crearServicio = ({nombre, costo, porcentajeGanancia, img}) => {
  let servicio = new Servicio(nombre, costo, porcentajeGanancia, img);
  return servicio;
};

const obtenerDatosProductos = async () => {
  try {
    let res = await fetch("js/productos.json");
    let json = await res.json();
    return json;
  } catch (err) {
    console.log("Se encontró un error al obtener los datos: ");
    console.log(err);
  }
};

//                 Precios
const completarPrecios = () => {
  precioClase30.innerHTML = "$" + clase30.precio;
  precioClase45.innerHTML = "$" + clase45.precio;
  precioClase60.innerHTML = "$" + clase60.precio;
  precioBelting.innerHTML = "$" + belting.precio;
  precioMixta.innerHTML = "$" + mixta.precio;
  precioAfinacion.innerHTML = "$" + afinacion.precio;
  precioRedesSociales.innerHTML = "$" + redesSociales.precio;
  precioComposicion.innerHTML = "$" + composicion.precio;
  precioVocalizacion.innerHTML = "$" + vocalizacion.precio;
};
