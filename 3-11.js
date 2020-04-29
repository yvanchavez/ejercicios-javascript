let anios = +prompt("Ingrese la cantidad de años:");
let bono = 0;


    switch(anios){
        case 1:
            bono = 100;
            break;
        case 2:
            bono = 200;
            break;
        case 3:
            bono = 300;
            break;
        case 4:
            bono = 400;
            break;
        case 5:
            bono = 500;
            break;
        default:
            bono = 1000;    
}

console.log(`A Ud. le corresponde un bono de: ${bono}`);
