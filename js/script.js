const esNumero = (input) => !Number.isNaN(Number(input));

const esMayorIgualQue = (numero, mayorQue) => numero >= mayorQue;

const esMenorIgualQue = (numero, menorQue) => numero <= menorQue && numero >= 0;

const validarCantidadProductos = (cantidad) => {
  while (!esNumero(cantidad) || !esMayorIgualQue(cantidad, 0)) {
    cantidad = prompt("Por favor, ingresa una cantidad igual o mayor a cero.");
  }
  return Number(cantidad);
};