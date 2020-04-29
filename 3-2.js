let sueldoSemanal = 0;
let horasTrabajadas = +prompt("Ingrese horas trabajadas");
let pagoHora = +prompt("Ingrese el pago por hora");

if(horasTrabajadas>40){
    sueldoSemanal=pagoHora*40 + (horasTrabajadas-40)*pagoHora*2;
}else{
    sueldoSemanal=horasTrabajadas*pagoHora;
}
console.log(`El sueldo semanal es: ${sueldoSemanal}`);
