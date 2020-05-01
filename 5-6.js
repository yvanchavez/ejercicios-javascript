let nombres = [];
let edades = [];
mayor = 0;
let j=0;
for (let i = 0; i < 10; i++) {
    nombres[i] = prompt("Ingrese el nombre");
    edades[i] = prompt("Ingrese la edad");
    
    if(edades[i]>mayor){
        mayor=edades[i];
        j=i;
    }
}

console.log(` El alumno mayor es ${nombres[j]} con ${edades[j]} años `);
