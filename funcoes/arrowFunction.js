// sempre atribuida a uma const, se nao uso chaves para delimitar o escopo, o return fica implicito.
const mult = (n) => (n *= n)
    
console.log(mult(10))