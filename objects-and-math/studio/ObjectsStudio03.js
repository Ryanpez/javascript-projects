// Code your crewMass function here:
function crewMass(crew) {
  let unroundedMass = 0;

  for (let i = 0; i < crew.length; i++) {
    unroundedMass += crew[i].mass;
  }
  return Math.round(unroundedMass * 10)/10;

  //array.reduce method with arrow function
  //let reducedMass = Math.round(crew.reduce((accumulator, currentValue) => {return accumulator + currentValue}, 0)*10)/10; // arrow function

  //one line rounding method
  //return Math.round((crew[0].mass + crew[1].mass + crew[2].mass)*10)/10
}
// arrow function example
// reg function
//function greet(name) {
//  return `Hello, ${name}!`;
//}
// arrow function
//greetArrow = (name) => {return `Hello, ${name}!`};

// Code your fuelRequired function here:
function fuelRequired(crewMassKg, crew) {
  let safetyMargin = 0

  for (let i = 0; i< crew.length; i++) {
    if (crew[i].species === 'dog' || crew[i].species === 'cat') {
      safetyMargin += 200;
    } else {
      safetyMargin += 100;
    }
    return Math.ceil((75000 + crewMassKg + safetyMargin) * 9.5)
  }
}

// The pre-selected crew is in the array at the end of this file.
// Feel free to add, remove, or switch crew members as you see fit.

let candidateA = {
   'name':'Gordon Shumway',
   'species':'alf',
   'mass':90,
   'o2Used':function(hrs){return 0.035*hrs},
   'astronautID':414
 };
 let candidateB = {
   'name':'Lassie',
   'species':'dog',
   'mass':19.1,
   'o2Used':function(hrs){return 0.030*hrs},
   'astronautID':503
 };
 let candidateC = {
   'name':'Jonsey',
   'species':'cat',
   'mass':3.6,
   'o2Used':function(hrs){return 0.022*hrs},
   'astronautID':796
 };
 let candidateD = {
   'name':'Paddington',
   'species':'bear',
   'mass':31.8,
   'o2Used':function(hrs){return 0.047*hrs},
   'astronautID':291
 };
 let candidateE = {
   'name':'Pete',
   'species':'tortoise',
   'mass':417,
   'o2Used':function(hrs){return 0.010*hrs},
   'astronautID':599
 };
 let candidateF = {
   'name':'Hugs',
   'species':'ball python',
   'mass':2.3,
   'o2Used':function(hrs){return 0.018*hrs},
   'astronautID':890
 };
 
 let crew = [candidateB,candidateD,candidateF];


 console.log(`The mission has a launch mass of ${crewMass(crew) + 75000} and requires ${fuelRequired(crewMass(crew), crew)} kg of fuel.`)