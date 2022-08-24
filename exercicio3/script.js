const soma=(num1,num2)=>{
    return num1+num2
}
const subtracao=(num1,num2)=>{
    return num1-num2
}
const multiplicacao=(num1,num2)=>{
    return num1*num2
}
const divisao=(num1,num2)=>{
    return num1/num2
}

const numero= Number(prompt("digite um numero"))
const numero2= Number(prompt("digite outro numero"))

console.log(numero,"+",numero2,"=",soma(numero,numero2));
console.log(numero,"-",numero2,"=",subtracao(numero,numero2));
console.log(numero,"x",numero2,"=",multiplicacao(numero,numero2));
console.log(numero,"/",numero2,"=",divisa(numero,numero2));