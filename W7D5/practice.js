// The scope of `random` is too loose 



const getRandEvent = () => {
    const random = Math.floor(Math.random() * 3);
    if (random === 0) {
      return 'Marathon';
    } else if (random === 1) {
      return 'Triathlon';
    } else if (random === 2) {
      return 'Pentathlon';
    }
};
  
  // The scope of `days` is too tight 
const getTrainingDays = event => {
      let days = 0;
    if (event === 'Marathon') {
      days = 50;
    } else if (event === 'Triathlon') {
      days = 100;
    } else if (event === 'Pentathlon') {
      days = 200;
    }
  
    return days;
};
  
  // The scope of `name` is too tight 
  
const logEvent = (name, event) => {
    
    console.log(`${name}'s event is: ${event}`);
};
  
  
const logTime = (name, days) => {
    console.log(`${name}'s time to train is: ${days} days`);
};
const name = 'Nala';
const event = getRandEvent();
const days = getTrainingDays(event);
  // Define a `name` variable. Use it as an argument after updating logEvent and logTime 
  
  
logEvent(name, event);
logTime(name, days);
  
const event2 = getRandEvent();
const days2 = getTrainingDays(event2);
const name2 = 'Warren';

logEvent(name2, event2);
logTime(name2, days2);
  
const objectives = ['Learn a new languages', 'Read 52 books', 'Run a marathon'];

console.log(objectives.length);

const chores = ['wash dishes', 'do laundry', 'take out trash'];


chores.push('clean floors', 'wipe windows');

console.log(chores);

const chores = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];


chores.pop();
console.log(chores);

const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift();
groceryList.unshift('popcorn');
console.log(groceryList.slice(1,4));
console.log(groceryList);
const pastaIndex = groceryList.indexOf('pasta');
console.log(pastaIndex);

const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
  arr[3] = 'MUTATED';
}

changeArr(concept);
console.log(concept);

function removeElement(newArr){
  newArr.pop();
}

removeElement(concept);
console.log(concept);

const numberClusters = [[1,2],[3,4],[5,6]];
const target = numberClusters[2][1];

const vacationSpots = ['Bali', 'Paris', 'Tulum'];

// Write your code below
for (let i = 0; i < vacationSpots.length; i++){
  console.log('I would love to visit ' + vacationSpots[i]);
}

// Write your code below
const bobsFollowers = ['Amy', 'Joe', 'Jack', 'John'];
const tinasFollowers = ['Joe', 'Suzie', 'Amy'];
const mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
};

const cards = ['diamond', 'spade', 'heart', 'club'];

// Write your code below

let currentCard = '';
while (currentCard !== 'spade') {
  currentCard = cards[Math.floor(Math.random() * 4)]; console.log(currentCard);
}

// Write your code below
let cupsOfSugarNeeded = 0;
let cupsAdded = 0;


do {
  cupsAdded++
} while (cupsAdded < cupsOfSugarNeeded);

const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

// Write you code below
for (let i = 0; i < rapperArray.length; i++){
  console.log(rapperArray[i]);
  if (rapperArray[i] === 'Notorious B.I.G.'){
    break;
  }
}

console.log("And if you don't know, now you know.");