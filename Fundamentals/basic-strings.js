const school = "Cod3r"


// Indexes 
// CharAt 
console.log(school.charAt(0))
console.log(school.charAt(1))
console.log(school.charAt(2))
console.log(school.charAt(3))
console.log(school.charAt(4))
console.log(school.charAt(5))

// CharCodeAt 
console.log(school.charCodeAt(3))

// IndexOf 
console.log(school.indexOf('3'))
console.log(school.indexOf('C'))

// Substring
console.log(school.substring(1))
console.log(school.substring(0,1))

// Concat
console.log('School '.concat(school).concat("!"))

// Replace
console.log(school.replace(3, 'e'))
console.log(school.replace(/\w/g, 'e'))

// Array
console.log('Ana,Maria,Pedro'.split(','))
console.log('Ana,Maria,Pedro'.split(/,/))