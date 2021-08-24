"use strict";
exports.__esModule = true; // exports the module
//var spaceLocation_1 = require("./SpaceLocation");
// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 

// Part 1: Declare (5) Variables With Type
let spacecraftName: string = "Determination";
let speedMph: number = 17500;
let kilometersToMars: number = 225000000;
let kilometersToTheMoon: number = 384400;
let milesPerKilometer: number = 0.621;

// Part 2: Print Days to Mars
let milesToMars: number =  kilometersToMars * milesPerKilometer;
let hoursToMars: number = milesToMars / speedMph;
let daysToMars: number = hoursToMars / 24;

// Code an output statement here (use a template literal):
console.log(`${spacecraftName} would take ${daysToMars} days to get to Mars.`);

// Part 3: Create a Function ("getDaysToLocation")
let getDaysToLocation = function(kilmetersAway:Number):Number  {
    let milesAway: number = kilmetersAway * milesPerKilometer;
    let hoursToLocation: number = milesAway/speedMph;
    return hoursToLocation/24;
}

// Move your output statement from part 2 here. Update the template literal to call
// the function and print the outputs for a Mars trip and a moon trip.

console.log(`${getDaysToLocation(kilometersToMars)} and ${spacecraftName}`);
console.log(`${getDaysToLocation(kilometersToTheMoon)} and ${spacecraftName}`);

// Part 4: Create a Spacecraft Class
let  Spacecraft = /** @class */ (function () {
        function Spacecraft(name, speedMph){
            this.milesPerKilometer = 0.621;
            this.name = name;
            this.speedMph = speedMph;
        }

        Spacecraft.prototype.getDaysToLocation = function(kilometersAway:Number):Number{
            let milesAway = kilometersAway * this.milesPerKilometer;
            let hoursToLocation = milesAway / speedMph;
            return hoursToLocation / 24;
        }

    return Spacecraft;
});

// Create an instance of the class here:
//let spaceShuttle = new Spacecraft("Determination", 17500);

// Move your output statements from part 3 here. Update the template literals use the
// instance of the class.
//console.log(`${spaceShuttle.getDaysToLocation(kilometersToMars)} and ${spaceShuttle.name}`);
//console.log(`${spaceShuttle.getDaysToLocation(kilometersToTheMoon)} and ${spaceShuttle.name}`);
//console.log(`${spaceShuttle.getDaysToLocation(kilometersToTheMoon)}${spaceShuttle.name}`);
// Part 5: Export and Import the SpaceLocation Class
// Add the required import statement BEFORE the part 1 concent.

// Add the printDaysToLocation function to the Spacecraft class.
//spaceShuttle.printDaysToLocation(new SpaceLocation('Mars', kilometersToMars));
//spaceShuttle.printDaysToLocation(new SpaceLocation('the Moon', kilometersToTheMoon));

function kilometersAway(kilometersAway: any, Number: NumberConstructor) {
    throw new Error('Function not implemented.');
}
// Paste in the code from step 6 here:

