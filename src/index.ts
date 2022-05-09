//descuento octubre 15%
let precio: number = 500;
let cantidad: number = 2;
let mes: number = "Agosto";
let descuento: number = 0;
let montoConDescuento: number = 0;
let precioTotal: number = precio * cantidad;

if (mes == "Octubre") {
  descuento = (precioTotal * 15) / 100;
  montoConDescuento = precioTotal - descuento;
  console.log("Por comprar en el mes de Octubre Ud. tiene un 15% de descuento");
  console.log("El monto a pagar es: $" + montoConDescuento);
} else {
  console.log("$" + precioTotal);
}
