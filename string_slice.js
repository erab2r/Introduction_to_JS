const address = 'Muradpurctg';
const part = address.slice(2,6);
console.log(part);

const sentence = 'I am Israt Jahan Era';
console.log(sentence.split());
console.log(sentence.split(''));
console.log(sentence.split(' '));

const friends = 'Era,Habib,Kadiza,Mohima,Robin';
const frnd = friends.split(',');
console.log(frnd);
const fnd = [ 'Era', 'Habib', 'Kadiza', 'Mohima', 'Robin' ] 
const frndss = fnd.join();
const fr = fnd.join('|');
const f = fnd.join('-');
console.log(frndss);
console.log(fr);
console.log(f);