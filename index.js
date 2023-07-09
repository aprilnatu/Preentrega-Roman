let fecha = new Date()
let año_actual = fecha.getFullYear();
let año_nacimiento = parseInt(prompt("Para acceder deber ser mayor de 18 años. Ingrese su año de nacimiento:"));
let edad = parseInt(año_actual - año_nacimiento);
if(edad >= 18){
    alert("Su edad es: " + edad + " ,usted es mayor de edad");
    }else{
    alert("Su edad es: " + edad + " usted es menor de edad");
    }

let nombreIngresado = prompt('Ingresar nombre: ')
let apellidoIngresado = prompt('Ingresar apellido: ')
function saludar(nombre, apellido) {
    alert('Bienvenidx ' + nombre + ' ' + apellido);
}
saludar(nombreIngresado, apellidoIngresado) 

do {
    username = prompt("Ingrese su nombre de usuario:");
    contraseña = prompt("Ingrese su contraseña:");
  } while (username !== "donaldgrow" || contraseña !== "cannabis");


const productos = [
    {id: 1, producto: 'Carpa 100X100X200CM', precio: 71343},
    {id: 2, producto: 'Aceite de Cannabis 50ml', precio: 4999},
    {id: 3, producto: 'Cogonauts Koko', precio: 7000},
    {id: 4, producto: 'Filtro de Olor', precio: 19000},
    {id: 5, producto: 'Carpa 120X90X180CM', precio: 118000},
    {id: 6, producto: 'Cogonauts Mini Flidas', precio: 4183},
    {id: 7, producto: 'Medidor de PH', precio: 4000},
    {id: 8, producto: 'Medidor profesional de Ph', precio: 10000},
    {id: 9, producto: 'Cogonauts Baku', precio: 7000},
]
const buscado = productos.find(producto => producto.id === 4 ) 
console.log(buscado)
function calcularPrecioTotal(precioProducto) {   
    if (isNaN(precioProducto)) {
        return 'El precio ingresado no es un número'
    }
    let costoEnvio  = 1000
    let iva         = 1.21

    return (precioProducto * iva) + costoEnvio
}

const cantidadProductos = Number(prompt('ingrese cantidad de productos: '))

if (!isNaN(cantidadProductos)) {
    for (let index = 0; index < cantidadProductos; index++) {
        const producto1 = prompt('ingrese el precio del producto '+ (index+1) +': ')      
        alert('el precio total es: ' + calcularPrecioTotal(producto1))
    }
} else {
    alert('la cantidad de productos ingresada no es un número')
}