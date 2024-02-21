let name = 'Ryan Alves'

// console.log(name[0])

// for (const x of name) {
//     console.log(x)
// }

// console.log(name.length)

// Ryan Alves -> ["Ryan", "Alves"]
console.log(name.split(" ")) // dentro dos parenteses voce utiliza o argumento do caractere que quer fazer a separação a partir dele, bastante utilizado em arquivos CSV

let values = [1, 2, 3, 4, 5, 10, 20]
values = ["R", "Y", "A", "N"]
console.log(values.join(" ")) // converte em string o array colocando ',' para separação, conseguimos modificar utilizando o que queremos na separaçao dentro dos parenteses