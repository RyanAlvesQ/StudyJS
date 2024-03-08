let people  = ['ryan', 'luquinha', 'brx', 'bruna', 'lia']


//retornar elementos especificos
//console.log(people[2])
//console.log(people[people.length-1]) // retorna o ultimo

//retornar "fatias" de um array
//console.log(people.slice(1, 4))

//adicionar novos elementos no array (inicio e fim)
//people.push("ana") //add ao final
//people.unshift("yasmin") //add ao inicio
//console.log(people)


//remover elementos do array
//people.pop() //remove elementos do fim do array (e retorna o elemento removido)
//people.shift() //remove elementos do incio do array (e retorna o elemento removido)
//console.log(people)

//remover "fatias" do array
//people.splice(1, 1) //primeiro parametro é o indice que deseja iniciar a fatia e o segundo é contando a partir do inicio quantos elementos serao removidos
console.log(people)

//localizar elementos
let index = people.indexOf("ryan") //indexOf localiza os elementos 
people.splice(index, 1) //podemos utilizar o splice em conjunto guardando o elemento que precisamos em uma variavel, usando para localização e posteriormente remoção
console.log(people)