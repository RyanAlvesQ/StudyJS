//const bornDate = new Date ("2004, 05, 24")
//const bornDate = new Date ("Jun 24 2004 00:03:00")
const bornDate = new Date ("2004-06-24T03:03:00.000Z")
const today = new Date ()

console.log (bornDate)
console.log (bornDate.toISOString())

console.log ("dia", bornDate.getDate())
console.log ("mês", bornDate.getMonth() + 1)
console.log ("ano", bornDate.getFullYear())

console.log ("idade", today.getFullYear() - bornDate.getFullYear())