// OR -> qualquer valor verdadeiro dentro da expressão logica, torna o resultado verdadeiro
console.log ("\n--------- OR ---------")
console.log(false || false) // false
console.log(true || false) // true
console.log(false || true) // true
console.log(true || true) // true

// AND -> qualquer valor falso dentro da expressão logica, torna o resultado falso
console.log ("\n--------- AND ---------")
console.log(false && false) // false
console.log(true && false) // false
console.log(false && true) // false
console.log(true && true) // true


// mais de 2 parametros e misto  (OBS: AND tem precedência sobre OR )
console.log ("\n--------- Mix ---------")
console.log (false || false || true) //true
console.log (false && false && true) //false
console.log (false || (false && true)) // false

// NOT (inverta)
console.log ("\n--------- NOT ---------")
console.log (!true) // false
console.log (!(23 < 24)) // false

// Resultado de uma expressão (comparação) é boolean
console.log ((23 < 24) && ("A" == "A")) // true

// Variáveis
console.log ("\n--------- Variáveis ---------")
let a = 10
let b = 20
console.log (a < b) // true
