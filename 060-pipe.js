const p = {
    name: "demichelis marco"
};

const getName = (person) => person.name;
const uppercase = (string) => string.toUpperCase();
const  get6Characters = (string) => string.substring(0, 6);
const reverse = (string) => string.split('').reverse().join('');

// pipe implementation
const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x);

var output01 = reverse(get6Characters(uppercase(getName(p))));
var output02 = pipe(
    getName,
    uppercase,
    get6Characters,
    reverse
  )(p);

console.log(output01);
console.log(output02);