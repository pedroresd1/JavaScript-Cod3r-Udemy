const name = 'Pedro'
const concatenation = 'Hello ' + name + ' !'
console.log(concatenation)

const template = `Bye ${name} !`
console.log(template)

// expressions
console.log(`1 + 1 = ${1+1}`)

// functions
const up = text => text.toUpperCase()
console.log(`Hey... ${up('warning')}!`)