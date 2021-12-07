// Calculate a Circle Area
//      A = PI * (radius * radius) or A = PI * radius²
//
// And Circumference 
//      D = sqrt((4 * A) / PI ) or (( 4 * A ) / PI) ^ 1/2) 
//
// And Diameter
//      C = sqrt(4 * A * PI ) or (( 4 * A * PI) ^ 1/2) 

const PI = Math.PI;
const radius = 10;
let circleArea = PI * (radius ** 2);
let circleDiameter = Math.sqrt((4*circleArea)/PI)
let circleCircumference = Math.sqrt((circleArea*4*PI))

console.log("Area: " + circleArea + "m2.");
console.log("Diameter: " + circleDiameter + "m2.");
console.log("Circumference: " + circleCircumference + "m2.");
