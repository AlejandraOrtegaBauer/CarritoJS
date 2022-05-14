//                              INIT
const encabezado = document.querySelector("#encabezado");
const container = document.querySelector("#container");


const claveCliente = "Cliente";
const claveCarrito = "Carrito";
const claveCuotas = "Cuotas";
const claveSesionIniciada = "sesionIniciada";
const claveIdBtnCuotas = "idBtnCuotas";

const claveCarritoJSON = "carritoJSON";
const claveCarritoClienteJSON = "carritoClienteJSON";
const claveCarritoCuotaJSON = "carritoCuotaJSON";

const init = async () => {
  if (
    localStorage.getItem("sesionIniciada") == null ||
    localStorage.getItem("sesionIniciada") == 0
  ) {
    initIngreso();
  } else {
    await initTienda(false);
  }
};

document.addEventListener("DOMContentLoaded", init);