let levelUp = 10;
let powerLevel = 9001;
let multiplyMe = 32;
let quarterMe = 1152;

// Use the mathematical assignments in the space below:
levelUp += 5;
powerLevel -= 100;
multiplyMe *= 11;
quarterMe /= 4;




// These console.log() statements below will help you check the values of the variables.
// You do not need to edit these statements. 
console.log('The value of levelUp:', levelUp); 
console.log('The value of powerLevel:', powerLevel); 
console.log('The value of multiplyMe:', multiplyMe); 
console.log('The value of quarterMe:', quarterMe);

let gainedDollar = 3;
let lostDollar = 50;

gainedDollar ++;
lostDollar --;

let favoriteAnimal = 'cat';
console.log('My favorite animal: ' + favoriteAnimal);

let myName = 'Amanda';
let myCity = 'New York City';

console.log(`My name is ${myName}. My favorite city is ${myCity}.`)

let newVariable = 'Playing around with typeof.';
console.log(typeof newVariable);
newVariable = 1;
console.log(typeof newVariable);

let sale = true;
sale = false;
if(sale) {
    console.log('Time to buy!');
} else {console.log('Time to wait for a sale.');
}

let hungerLevel = 7;
if (hungerLevel > 7) {console.log('Time to eat!');
} else {console.log('We can eat later!');
}

let mood = 'sleepy';
let tirednessLevel = 6;
if (mood ==='sleepy' && tirednessLevel > 8) {console.log('time to sleep');
} else {console.log('not bed time yet');
}


let wordCount = 1;

if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}


let favoritePhrase = '';

if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}
        
let tool = '';

// Use short circuit evaluation to assign  writingUtensil variable below:
let writingUtensil = tool || 'pen';

console.log(`The ${writingUtensil} is mightier than the sword.`);

//Ternary operators

let isLocked = false;

isLocked ? console.log('You will need a key to open the door.') : console.log('You will not need a key to open the door.');


let isCorrect = true;

isCorrect ? console.log('Correct!') : console.log('Incorrect!');

let favoritePhrase = 'Love That!';

favoritePhrase === 'Love That!' ? console.log('I love that!') : console.log("I don't love that!");

////
let season = 'summer';

if (season === 'spring') {
  console.log('It\'s spring! The trees are budding!');
} 
else if (season === 'winter') {console.log('It\'s winter! Everything is covered in snow.');
}
else if (season === 'fall') {console.log('It\'s fall! Leaves are falling!');
}
else if (season === 'summer') {console.log('It\'s sunny and warm because it\'s summer!');
}
else {
  console.log('Invalid season.');
}


//Switch statement

let athleteFinalPosition = 'first place';

switch (athleteFinalPosition) {
  case 'first place':
    console.log('You get the gold medal!');
    break;
  case 'second place':
    console.log('You get the silver medal!');
    break;
  case 'third place':
    console.log('You get the bronze medal!');
    break;
  default:
    console.log('No medal awarded.');
    break;
}

//Functions

function getReminder() {console.log('Water the plants.');}

function greetInSpanish() {console.log('Buenas Tardes.');}

function sayThanks() {
    console.log('Thank you for your purchase! We appreciate your business.');
}
  
sayThanks();

function sayThanks(name) {
    console.log('Thank you for your purchase '+ name + '! We appreciate your business.');
}
  
sayThanks('Cole');

function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs'){
    console.log(`Remember to buy ${item1}`);
    console.log(`Remember to buy ${item2}`);
    console.log(`Remember to buy ${item3}`);
}

function monitorCount(rows, columns){
    let amount = rows * columns;
    return amount;
}
  
const numOfMonitors = monitorCount(5,4);
  
console.log(numOfMonitors);

function monitorCount(rows, columns) {
    return rows * columns;
}
  
function costOfMonitors(rows, columns) {
    return monitorCount(rows, columns) * 200;
}
  
const totalCost = costOfMonitors(5,4);
  
console.log(totalCost);

const plantNeedsWater = function(day){
    if (day === 'Wednesday') {
      return true;
    } else {return false;
    }
};
  
plantNeedsWater('Tuesday');
console.log(plantNeedsWater('Tuesday'));

// arrow function version

const plantNeedsWater = (day) => {
    if (day === 'Wednesday') {
      return true;
    } else {
      return false;
    }
};

//refactored
const plantNeedsWater = day => day === 'Wednesday' ? true : false;

/* 
Zero params 
const functionName = () => {};

One Param
const functionName = paramOne => {};

More than one
const functionName = (paramOne, paramTwo) => {};*/


