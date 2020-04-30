let ventas = [5000,15000,40000,1000,30000,12000,14000,20000]

let menos10k = 0;
let cantidadMenos10k = 0;
let entre10y20k = 0;
let cantidadEntre10y20k = 0;
let i=0;

while(i<ventas.length){
    if(ventas[i]<=10000){

        menos10k += ventas[i];
        cantidadMenos10k++;
    }else if(ventas[i]>10000 && ventas[i]<20000){
        entre10y20k += ventas[i];
        cantidadEntre10y20k++;
    }

    i++;
}

console.log(`${cantidadMenos10k} ventas fueron por menos de 10 000 , el monto total fue de ${menos10k}`);
console.log(`${cantidadEntre10y20k} ventas fueron entre 10 000 y 20 000 , el monto total fue de ${entre10y20k}`);