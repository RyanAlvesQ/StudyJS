let values = [1.5, 2, 4, 10]

//acumulator, currentValue, index, array são variaveis fixas do reduce, voce pode utilizar qual necessitar

// function callback (acumulator, currentValue, index, array) {
//     console.log(`acumulator`, acumulator)
//     console.log(`currentValue`, currentValue)
//     console.log(`index`, index)
//     console.log(`array`, array)
//     console.log("---")

//     //return acumulator //acumulador necessita de um return
// }

// values.reduce(callback, 0)

//Agregação
// let sum = values.reduce((total, item) => total + item, 0) // passo o 0 para iniciar o reduce inteiro zerado.
// console.log("sum", sum)

//soma(valores)/ quant. valores
// let avg = values.reduce(
//     (total, item, index) => (total+item) / (index + 1), 
//     0
// )
// console.log("avg", avg)

//Map
// let double = values.reduce((total, item) => total.concat(item * 2), [])
// console.log("double", double)

//Filter
let newValues = values.reduce((total, item) => {
    if (item > 2) {
        total.push(item)
    }

    return total
}, [])
console.log("newValues", newValues)

