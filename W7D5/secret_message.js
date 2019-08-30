let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 
'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 
'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];


secretMessage.pop();
secretMessage.push('to', 'Program');
let idx = secretMessage.indexOf('easily');
secretMessage[idx] = 'right';
secretMessage.shift();
secretMessage.unshift('Programming');
secretMessage.splice(6,5,'know');

console.log(secretMessage.join(' '));
/*
function addWords() {
    secretMessage.push('to', 'Program');
}

let idx = secretMessage.indexOf('easily');
secretMessage[idx] = 'right';

console.log(secretMessage.length);
removeLastString(secretMessage);
addWords(secretMessage);
console.log(secretMessage);
*/