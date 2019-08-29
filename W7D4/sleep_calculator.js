const getSleepHours = day => {
    day = day.toLowerCase();
   switch (day) {
       case 'monday':
           return 8;
        case 'tuesday':
            return 7;
        case 'wednesday':
            return 3;
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

const getIdealSleepHours = () => {
    const idealSleepHours = 8;
    return idealSleepHours * 7;
}

const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours) {
        console.log('You got the perfect amount of sleep');
    } else if (actualSleepHours < idealSleepHours) {
        console.log('You did not get enough sleep');
    } else {
        console.log('You got more sleep than is needed');
    }
}
   

calculateSleepDebt();