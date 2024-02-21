// '24/06/2004' <-> Date

// Date -> Formato ISO
console.log(new Date('06/24/2004 12:00')) //colocar a string corretamente para funcionar no formato ISO
console.log(new Date('2004-06-24'))
console.log(new Date('2004 06 24'))

console.log(new Date().toString())
console.log(new Date().toISOString())