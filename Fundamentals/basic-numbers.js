const number1 = 1.0
const number2 = Number('2.0')

console.log(number1, number2)
console.log(Number.isInteger(number1))
console.log(Number.isNaN(number2))

const avaliation1 = 9.871
const avaliation2 = 6.871

const total = avaliation1 * number1 + number2 * number2
const media = total / (number1 + number2)

console.log(media.toFixed(1))
console.log(media.toFixed(2))
console.log(media.toString())
console.log(media.toString(2))