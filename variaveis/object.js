const person = {
    name: "Ryan",
    age: 19,
    address: {
        street: "Av. Central",
        city: "São José dos Campos",
    },
}

// variaveis do tipo const podem ser modificadas se forem do tipo object ou array.
person.name = "Kise"


console.log (person.name)
console.log (person.age)

console.log (`${person.name} tem ${person.age} e mora na rua ${person.address.street} na cidade de ${person.address.city}. `)