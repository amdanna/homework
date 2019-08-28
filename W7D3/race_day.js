let raceNumber = Math.floor(Math.random() * 1000);

let registeredEarly = true;

let runnerAge = 18;

if (registeredEarly === true && runnerAge > 18) {raceNumber += 1000};

if (registeredEarly === true && runnerAge > 18) {console.log(`You will race at 9:30. Your number is ${raceNumber}.`);
} else if (registeredEarly === false && runnerAge > 18) {console.log(`Late adults run at 11:00 am. Your number is ${raceNumber}.`);
} else if (runnerAge < 18) {console.log(`Youth registrants run at 12:30 pm (regardless of registration). Your number is ${raceNumber}.`);
} else {console.log('See the registration desk.');
}


