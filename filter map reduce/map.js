const numbers = [1, 2, 3, 4, 5]
const double = numbers.map((n) => n * 2)
//console.log(double)



// const fahrenheit = [0, 32, 45, 46, 47, 91, 93, 121]
// const celcius = fahrenheit.map((t) => Math.round(((t - 32) *5) /9))
// console.log(celcius)

const people = [
    {name: "Ryan", age: "20"},
    {name: "lucas", age: "31"},
    {name: "aManda", age: "18"}
]

const peopleNormalized = people.map((p) => p.name.toUpperCase())
console.log(peopleNormalized)
