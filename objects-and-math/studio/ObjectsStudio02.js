
// Candidate data & crew array.
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
 
 let crew = [candidateA,candidateC,candidateE];

 // Code your orbitCircumference function here:
let orbitRad = 2000
function circumference(alt) {
  circ = Math.PI * 2 * (orbitRad);
  circ = Math.round(circ);
  return circ;
}

//console.log(circumference(orbitAlt));
// Code your missionDuration function here:

function missionDuration(orbits, orbitRad, orbitSpeed) {
  let distance = circumference(orbitRad) * orbits
  time = distance / orbitSpeed;
  time = Math.round(time*100)/100;
  console.log(`The mission will travel ${distance} km around the planet, and it will take ${time} hours to complete.`);
  return time
}
//console.log(missionDuration(5, 2000, 28000))

// Copy/paste your selectRandomEntry function here:

//function selectRandomEntry(arr) {
//  let num = Math.floor(Math.random()*arr.length);
//  return arr[num];
//}

function pickCrewMember(crew) {
  let indexOfMinO2Use = 0;

  for (let i = 0; i < crew.length; i++) {
    if (crew[i].o2Used(5) < crew[indexOfMinO2Use].o2Used(5)) {
      indexOfMinO2Use = i;
    }
  }

  return crew[indexOfMinO2Use];
}

// Code your oxygenExpended function here:
candidate = pickCrewMember(crew);

function oxygenExpended(candidate, radius, speed) {
  hrs = missionDuration(3, radius, speed);
  o2expended = candidate.o2Used(hrs); 
  o2expended = Math.round(o2expended * 1000)/1000;
  msg = `${candidate.name} will perform the spacewalk, which will last ${hrs} hours and require ${o2expended} kg of oxygen.`;
  return msg
}
console.log(oxygenExpended(candidate, 5000, 35000));
 