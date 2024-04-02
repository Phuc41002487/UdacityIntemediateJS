
// Create Dino Constructor
function Dino(dinoData) {
    this.species = dinoData.species;
    this.weight = dinoData.weight;
    this.height = dinoData.height;
    this.diet = dinoData.diet;
    this.where = dinoData.where;
    this.when = dinoData.when;
    this.fact = dinoData.fact;
};

    // Create Dino Objects
const fs = require('fs');
// Read the JSON file
const rawData = fs.readFileSync('dino.json');
const data = JSON.parse(rawData);

let dino1 = new Dino(data.Dinos[0]);
let dino2 = new Dino(data.Dinos[1]);
let dino3 = new Dino(data.Dinos[2]);
let dino4 = new Dino(data.Dinos[3]);
let dino5 = new Dino(data.Dinos[4]);
let dino6 = new Dino(data.Dinos[5]);
let dino7 = new Dino(data.Dinos[6]);
let dino8 = new Dino(data.Dinos[7]);

console.log(dino1);

// Create Human Object

// Use IIFE to get human data from form
const humanData = {
    name: document.getElementById('name').value,
    height: document.getElementById('feet').value*12 + document.getElementById('inches').value,
    weight: document.getElementById('weight').value,
    diet: document.getElementById('diet').value,
};

// Create Dino Compare Method 1
// NOTE: Weight in JSON file is in lbs, height in inches. 
function weightCompare(dino, human) {
    if (dino.weight > human.weight) {
        return `${dino.species} is ${dino.weight/human.weight} heavier than you!`;
    } else if (dino.weight < human.weight) {
        return `You are heavier than ${dino.species}!`;
    } else {
        return `You and ${dino.species} weigh the same!`;
    }
}

// Create Dino Compare Method 2
// NOTE: Weight in JSON file is in lbs, height in inches.
function heightCompare(dino, human) {
    if (dino.height > human.height) {
        return `${dino.species} is ${dino.height/human.height} taller than you!`;
    } else if (dino.height < human.height) {
        return `You are taller than ${dino.species}!`;
    } else {
        return `You and ${dino.species} are the same height!`;
    }
}

// Create Dino Compare Method 3
// NOTE: Weight in JSON file is in lbs, height in inches.
function dietCompare(dino, human) {
    if (dino.diet === human.diet) {
        return `You and ${dino.species} have the same diet!`;
    } else {
        return `You are ${human.diet} and ${dino.species} are ${dino.diet}!`;
    }
}

// Generate Tiles for each Dino in Array

    // Add tiles to DOM

// Remove form from screen


// On button click, prepare and display infographic
