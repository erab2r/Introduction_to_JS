const sentence = 'ISRAT JAHAN ERA';
let reverse = '';

for (let i = 0; i < sentence.length; i++) {
    let letter = sentence[i];
    reverse = letter + reverse;
}

console.log(reverse);
