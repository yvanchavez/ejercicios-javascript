let monto = +prompt("¿Cuánto dinero tiene para el regalo?");
let regalo = "";

if(monto<=10){
    regalo = "Tarjeta";
}else{
    if( monto <= 100){
        regalo = "Chocolates";
    }else{
        if( monto <= 250){
            regalo = "Flores";
        }else{            
                regalo = "Anillo";            
        }
    }
}

console.log(`Puedes comprar ${regalo}`);
