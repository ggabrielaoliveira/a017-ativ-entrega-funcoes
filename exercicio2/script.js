// A
// let num1= Number(prompt("Digite um numero"))
// let num2= Number(prompt("Digite outro"))

// const somaDosNums=(num1,num2)=>{
//     return num1+num2
// }
// console.log("o",num1,"+",num2,"=",somaDosNums(num1,num2));
// B
const booleano=(num1,num2)=>{
    if(num1>=num2){
        console.log("seu numero", num1,"é maior ou igual que",num2,"?",true)
    }else{
        console.log("vish")
    }
    
} 
booleano(1,2)
// C
let num= Number(prompt("Digite um numero"))
const imparOuPar=(numero)=>{
    if(num%2==0){
        console.log("seu numero é PAR, parabens!")
    }else{
        console.log("seu numero é IMPAR, que pena :(")
    }
    return numero
}
console.log(imparOuPar(num));

D
const mensagem=prompt("digite uma mensagem")
const receberMensagem=(mensagem)=>{
    const tamanho = mensagem.length
    console.log("o tamanho dessa mensagem é: ",tamanho)
    const minuscula= mensagem.toLowerCase()
    console.log("a mensagem com letras minusculas:",minuscula);
    return mensagem
}
console.log(receberMensagem(mensagem))


