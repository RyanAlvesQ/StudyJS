let name, age

name = "Ryan"
age = 19
address = {
    street: "Rua Central",
    city: "São José dos Campos",
}

console.log ("name", name)
console.log ("age", age)



// concatenação de strings (antiga)
console.log (name + " tem "+ age + " anos e reside em " + JSON.stringify (address) )

// interpolação (atual)

console.log (`${name} tem ${age} anos e reside em ${JSON.stringify(address)}`)

console.log (`${name} tem ${age + 1} anos.`)

