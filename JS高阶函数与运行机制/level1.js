function sum1(a) {
    return (b, c) => {
        return a + b + c
    }
}

function sum2(a) {
    return (b) => {
        return (c) => {
            return a + b + c
        }
    }
}

console.log(sum1(1)(2, 3))
console.log(sum2(1)(2)(3))