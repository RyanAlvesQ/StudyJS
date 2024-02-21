// JSON = JavaScript Object Notation
// JSON.stringify()
// JSON.parse()

const people = [
    {
        id: 1,
        nome: "Ryan",
        lastName: "Alves",
        bornDate: new Date (2004, 5, 24),
        address: {
            city: "São José dos Campos",
        },
    },

    {
        id: 2,
        nome: "Kise",
        lastName: "XL",
        bornDate: new Date (2004, 5, 24),
        address: {
            city: "São Paulo",
        },
    },
]

console.log(JSON.stringify(people)) // conversão de obj -> string / JSON

const json = '[{"id":1,"nome":"Ryan","lastName":"Alves","bornDate":"2004-06-24T03:00:00.000Z","address":{"city":"São José dos Campos"}},{"id":2,"nome":"Kise","lastName":"XL","bornDate":"2004-06-24T03:00:00.000Z","address":{"city":"São Paulo"}}]'

console.log(JSON.parse(json)) // conversão de string / JSON -> obj