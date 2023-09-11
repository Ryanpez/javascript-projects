// Declare and assign the variables below
let name = "Determination"
let speedmph = 17500
let marskm = 225000000
let moonkm = 384400
let mperk = 0.621

// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof(name))
console.log(typeof(speedmph))
console.log(typeof(marskm))
console.log(typeof(moonkm))
console.log(typeof(mperk))

// Calculate a space mission below
let marsmiles = (225000000 * mperk)
let marshours = (marsmiles / 17500)
let marsdays = (marshours / 24)

// Print the results of the space mission calculations below
console.log(name + " will take " + marsdays + " days to reach Mars")

// Calculate a trip to the moon below
let moonmiles = (384400 * mperk)
let moonhours = (moonmiles / 17500)
let moondays = (moonhours / 24)

// Print the results of the trip to the moon below
console.log(name + " will take " + moondays + " days to reach the Moon")
