function sum () {
    //arguments
    let res = 0
    for (const n of arguments) {
        res += n
    }
    return res
}
console.log(sum (1, 1, 4, 5, 6))