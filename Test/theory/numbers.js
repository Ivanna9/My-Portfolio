// const num = 54 //int
// const float = 1.67
// const pow = 10e3 // 10000
// const big = 1_000_00

// console.dir(Number.MAX_SAFE_INTEGER)
// console.log(Math)
// console.log(Number.isFinite(Infinity))


const strInt ='33'
const strFloat ='33.65'
//1 V
// console.log(Number(strInt))
// console.log(Number(strFloat))

// //2V
// console.log(parseInt(strInt))
// console.log(parseInt(strFloat))

// //3V
// console.log(+strInt, +strFloat)

const fixed = (+(0.5+0.7).toFixed(1))//строчку вернет и с тем количеством нолей которое укажем.
console.log(parseFloat(fixed))