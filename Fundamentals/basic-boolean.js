let isActive = false
console.log(isActive)

isActive = true
console.log(isActive)

isActive = 1
console.log(!isActive)
console.log(!!isActive)

// situations
//true 
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isActive = true))

//false
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isActive = false))

//Test
console.log(!!('' || null || 0 || NaN))


let name = ''
console.log(name || 'Desconhecido')

/*
false
true
false
true
true
true
true
true
true
true
true
false
false
false
false
false
false
false
Desconhecido
*/