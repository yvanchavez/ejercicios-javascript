 let vector1= [0,1,2,3,4,5,6];
 let vector2=[];
// let aux=[];

// for (let i = 0; i < vector.length; i++) {
//     aux[i]=vector[i];
//     if(i>0){
//     vector[i]=aux[i-1];
//     }else{
//     vector[0]=vector[vector.length-1];
//     }
// }

for (let i = 0; i < vector1.length; i++) {
    if(i==0){
        vector2[i]=vector1[vector1.length-1];
    }else{
        vector2[i]=vector1[i-1]
    }
    
}
console.log(vector2);
