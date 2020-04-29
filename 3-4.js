let horas = +prompt("Ingrese la cantidad de horas: ");
let montoTotal=0;

if(horas <=2){
    montoTotal =  horas*5;
}else{
    if(horas <=5){
        montoTotal = 10 + (horas-2)*4;
    }else{
        if(horas <=10){
            montoTotal = 22 + (horas - 5)*3;
        }else{
            montoTotal = 37 + (horas - 10)*2;
        }
    }
}

console.log(`El monto a pagar es : ${montoTotal}` );
