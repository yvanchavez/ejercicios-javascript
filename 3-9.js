
let cuota = 0;
let cuotaBase = 0;

let tipoPoliza = prompt("Ingrese el tipo de poliza: (A) cobertura amplia y (B) daños a terceros");
let conduceAlcohol = prompt("¿Cuándo conduce tiene por hábito beber alcohol ? responda si (s) o no (n)");
let utilizaLentes = prompt(" ¿Utiliza lentes? responda si (s) o no (n)");
let enfermedad = prompt("¿Padece alguna enfermedad –como deficiencia cardiaca o diabetes ? responda si (s) o no (n)");
let mayor40 = prompt("¿Tiene más de 40 años? responda si (s) o no (n)");



if(tipoPoliza === "A" || tipoPoliza === "a"){
    cuotaBase = 1200;
} 
if(tipoPoliza === "B" || tipoPoliza === "b"){
    cuotaBase = 950;
}

if(conduceAlcohol === "s" || conduceAlcohol === "S"){
    cuota += cuotaBase*0.1;
}
if(utilizaLentes === "s" || utilizaLentes === "S"){
    cuota += cuotaBase*0.05;
}
if(enfermedad === "s" || enfermedad === "S"){
    cuota += cuotaBase*0.05;
}
if(mayor40 === "s" || mayor40 === "S"){
    cuota += cuotaBase*0.2;
}else{
    cuota += cuotaBase*0.1;
}

console.log(`La poliza le cuesta: ${cuotaBase+cuota}`);



