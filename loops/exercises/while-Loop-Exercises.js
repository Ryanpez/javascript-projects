//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.
const input = require('readline-sync');

let initialFuel = 0;
let numAstronauts = 0;
let shuttleAltitude = 0;

/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */
  initialFuel = Number(input.question('What is the starting fuel level?: '));

while (initialFuel < 5000 || initialFuel > 30000 || isNaN(initialFuel)) {
  initialFuel = Number(input.question(`Sorry, ${initialFuel} is not a valid input, please enter a
  fuel level 5000 to 30000: `));

  }

//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
numAstronauts = input.question('How many astronauts are there?: ');

while (numAstronauts < 1 || numAstronauts > 7 || isNaN(numAstronauts)) {
  numAstronauts = Number(input.question(`Sorry, ${numAstronauts} is not a valid input, please enter a
  number 1 to 7: `));

  } 

//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.
while (initialFuel >= 100) {
  shuttleAltitude = shuttleAltitude + 50;
  initialFuel = initialFuel - (100 * numAstronauts);
  console.log(shuttleAltitude);
}

/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/

console.log(`The shuttle gained an altitude of ${shuttleAltitude}`)
if (shuttleAltitude >= 2000) {
  console.log('Orbit achieved!');
} else {
  console.log('Failed to achieve orbit.')
}