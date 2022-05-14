class TipoCuotas {
  constructor(cantidadCuotas) {
    this.cantidadCuotas = cantidadCuotas;
    switch (cantidadCuotas) {
      case 1:
        this.porcentajeRecargo = 0;
        break;
      case 3:
        this.porcentajeRecargo = 0.1;
        break;
      case 6:
        this.porcentajeRecargo = 0.3;
        break;
    }
  }
}