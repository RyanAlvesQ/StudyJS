const numbers = [10, 18, 1, 15]

let res = numbers.filter((n) => n > 10)
console.log(res)

//atribui uma arrow function a uma variavel, filtrando o array com numeros maiores que 10

const people = [
    {name: 'Ryan', age: '19', gender: 'M'},
    {name: 'Bruna', age: '20', gender: 'F'},
    {name: 'Brx', age: '15', gender: 'M'},
    {name: 'Luquinha', age: '20', gender: 'M'},
    {name: 'Danilo', age: '40', gender: 'M'},
]

const m = people.filter((p) => p.age >= 18)
console.log(m)

const n = people.filter((p) => p.age >= 18 && p.gender == 'M')
console.log(n)

const x = people.filter((p) => p.age >= 18 && p.age <= 25 && p.gender == 'M')
console.log(x)