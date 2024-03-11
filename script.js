let INDICE = 13;
let SOMA = 0;
let K = 0;

while (K < INDICE) {
  K = K + 1;
  SOMA = SOMA + K;
}

alert(SOMA);
//no final o valor da variável SOMA será 91

//----

function fibonacciSequence(n) {
  let fib = [0, 1];
  for (let i = 2; i <= n + 1; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

function isFibonacci(num) {
  let fib = fibonacciSequence(num);
  if (fib.includes(num)) {
    return `O número ${num} pertence à sequência de Fibonacci.`;
  } else {
    return `O número ${num} não pertence à sequência de Fibonacci.`;
  }
}

console.log(isFibonacci(21));

//REVERSE STRING

function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

let myString = "Olá, mundo!";
console.log(reverseString(myString));
