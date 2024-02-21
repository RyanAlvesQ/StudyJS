function mult(n) {
    n *= n
    return n
}
let numVal = 10
console.log(mult(numVal))
console.log(numVal)

// ---- Comportamento por referência

function multObj(obj) {
    obj.value *= obj.value

    return obj
}

const numObj = {value: 10}
console.log(multObj(numObj))
console.log(numObj)