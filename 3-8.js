let bonoAntiguedad = 0;
let bonoSueldo = 0;
let bono=0;

let antiguedad = +prompt("Ingrese antiguedad: ");
let sueldo = +prompt("Ingrese sueldo");

if(antiguedad > 2 && antiguedad < 5){
    bonoAntiguedad = sueldo*0.2;
}else{
    if(antiguedad>=5){
        bonoAntiguedad = sueldo*0.3;
    }
}

if(sueldo<=1000){
    bonoSueldo = sueldo*0.25;
}else{
    if(sueldo>1000 && sueldo<3500){
        bonoSueldo = sueldo*0.15;
    }else{
        bonoSueldo = sueldo*0.1;
    }
}

if(bonoAntiguedad>bonoSueldo){
    bono = bonoAntiguedad;
}else{
    bono = bonoSueldo;
}
console.log(`A Ud. le correspode un bono de ${bono}`);
