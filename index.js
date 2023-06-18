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
    apellido = prompt("Ingrese su apellido:");
  } while (username !== "donaldgrow" || apellido !== "cannabis");

