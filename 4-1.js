let salario = [1500];

for (let i = 1; i < 7; i++) {
    salario[i] = salario[i-1]*1.1;
    console.log(`El salario despues del ${i} anio  es ${salario[i].toFixed(2)}`);
}
