const getSleepHours = day => {
    day = day.toLowerCase();
   switch (day) {
       case 'monday':
           return 8;
        case 'tuesday':
            return 9;
        case 'wednesday':
            return 8;
        case 'thursday':
            return 9;
        case 'friday':
            return 5;
        case 'saturday':
            return 8;
        case 'sunday':
            return 10;
   }
}

const getActualSleepHours = () =>
    getSleepHours('monday') +
    getSleepHours('tuesday') +
    getSleepHours('wednesday') +
    getSleepHours('thursday') +
    getSleepHours('friday') +
    getSleepHours('saturday') +
    getSleepHours('sunday')
;

const getIdealSleepHours = (idealSleepHours) => {
    return idealSleepHours * 7;
}

const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours(8);
    if (actualSleepHours === idealSleepHours) {
        console.log(`You got ${actualSleepHours} hours of sleep this week. That's the perfect amount of sleep!`);
    } else if (actualSleepHours < idealSleepHours) {
        console.log(`You got ${actualSleepHours} hours of sleep this week. You did not get enough sleep!`);
    } else {
        console.log(`You got ${actualSleepHours} hours of sleep this week. You got more sleep than is needed!`);
    }
}
   
calculateSleepDebt();