let value = 1234.59

console.log(value.toFixed(2)) // argumento é o numero de casas após a vírgula (sempre arredonda 0.5 pra cima)
console.log(Math.ceil(value)) // arredonda para cima
console.log(Math.floor(value)) // arredonda para baixo
console.log(Math.round(value)) 

// para o valor BRL
// API importante e bem interessante para formatações
console.log (
    new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(value)
)
