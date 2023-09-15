// Initialize Variables below
let hyphen = "----------------------------------------------"
let date = "Monday 2019-03-18";
let time = "10:05:34 AM";
let astronautCount = 7;
let astronautStatus = "ready";
let averageAstronautMassKg = 80.7;
let crewMassKg = (astronautCount * averageAstronautMassKg);
let fuelMassKg = 760000;
let shuttleMassKg = 7842.31;
let totalMassKg = (crewMassKg + fuelMassKg + shuttleMassKg);
let maximumMassLimit = 850000;
let fuelTempCelcius = -225;
let minimumFuelTemp = -300;
let maximumFuelTemp = -150;
let fuelLevel = "100%";
let weatherStatus = "clear";
let preparedForLiftOff = true;

// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if (astronautCount <= 7) {
    console.log("There are " + astronautCount + "astronauts onboard.");
} else {
    console.log("Too many astronauts onboard!");
}
// add logic below to verify all astronauts are ready
if (astronautStatus === "ready") {
console.log("All astronauts are ready.");
} else {
    console.log("Not all astronaut are ready.");
}

// add logic below to verify the total mass does not exceed the maximum limit of 850000
if (totalMassKg < maximumMassLimit) {
    console.log("Total mass in cleared.");
} else {
    console.log("Total mass exceeds maximum mass limit!");
}
// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
if (fuelTempCelcius >= -300 || fuelTempCelcius <= -150) {
    console.log("Fuel temperature is nominal.");
} else {
    console.log("Temperature is not sufficient!");
}
// add logic below to verify the fuel level is at 100%
if (fuelLevel === "100%") {
    console.log("Fuel levels are at 100%.");
}
else {
    console.log("Fuel is not at 100%. Please add fuel.");
}
// add logic below to verify the weather status is clear
if (weatherStatus === "clear") {
    console.log("Weather is clear.");
} else {
    console.log("Weather is not clear! Stand by.");
}
// Verify shuttle launch can proceed based on above conditions
console.log("All systems are a go! Initiating space shuttle launch sequence.")

console.log(hyphen)

console.log("Date: " + date);
console.log("Time: " + time);
console.log("Astronaut Count: " + astronautCount);
console.log("Crew Mass: " + crewMassKg + " kg");
console.log("Fuel Mass: " + fuelMassKg + " kg");
console.log("Shuttle Mass: " + shuttleMassKg + " kg");
console.log("Total Mass: " + totalMassKg + " kg");
console.log("Fuel Temperature: " + fuelTempCelcius + " C");
console.log("Weather Status: " + weatherStatus);

console.log(hyphen)

console.log("Have a safe trip astronauts");