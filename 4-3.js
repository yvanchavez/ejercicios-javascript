let numeros = [0,1,10,0,3,5,0,-1]
let menoresCero = 0;
let cero = 0;
let mayoresCero = 0;
let i=0;

while(i<numeros.length){
    if(numeros[i]<0){
        menoresCero++;
    }else if(numeros[i] == 0){
        cero++;
    }else{
        mayoresCero++;
    }
    i++;
}

console.log(`Menores a 0 : ${menoresCero}`);
console.log(`Iguales a 0 : ${cero}`);
console.log(`Mayores a 0 : ${mayoresCero}`);
