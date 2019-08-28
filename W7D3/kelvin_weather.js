//Setting kelving temp to constant.
const kelvin = 293;
//convert kelvin to celsius.
let celsius = kelvin - 273;
//convert to fahrenheit. rounded down.
let fahrenheit = (Math.floor(celsius * (9/5) + 32));
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)

newton_scale = (Math.floor(celsius * (33/100)));
console.log(`The temperature is ${newton_scale} degrees in Newton.`)