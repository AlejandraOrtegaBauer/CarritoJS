// Inicio de sesion (Objeto Cliente)

let inputName;
let inputPais;
let inputCel;
let buttonIngresar;

const initIngreso = () => {
  cargarHTMLIngreso();
  inputName = document.querySelector("#input-name");
  inputPais = document.querySelector("#input-pais");
  inputCel = document.querySelector("#input-celular");
  buttonIngresar = document.querySelector("#button-ingresar");
  buttonIngresar.addEventListener("click", validarIngreso);
}

//Logica Carrito
const validarIngreso = () => {
  if (inputName.value != "") {
    if (
      inputCel.value != "" &&
      esNumero(inputCel.value)
    ) {

      //Creo el objeto Cliente y lo guardo en LocalStorage
      const nombreCliente = inputName.value;
      const paisCliente = inputPais.value;
      const celCliente = inputCel.value

      const cliente = new Cliente(nombreCliente, paisCliente, celCliente);

      guardarObjetoLocal(claveCliente, cliente);

      //Guardo el flag de inicio de sesion en LocalStorage
      guardarValorLocal(claveSesionIniciada, 1);

      Swal.fire({
        title: "Login Exitoso!",
        text: "Sesión iniciada correctamente.",
        icon: "success",
        confirmButtonText: "OK!",
        timer: 2000,
      });

      //Inicializo la tienda
      initTienda(true);
    } else {
      Swal.fire({
        title: "Error!",
        text: "Tu celular debe ser un número valido",
        icon: "error",
        confirmButtonText: "OK!",
        timer: 2000,
      });
    }

  } else {
    Swal.fire({
      title: "Error!",
      text: "Ingresa tu nombre por favor.",
      icon: "error",
      confirmButtonText: "OK!",
      timer: 2000,
    });
  }
};