console.log("####### Destructuring #######");
var obj = { nomeDestr: "nome1", cognomeDestr: "cognome1" }
/*
var nomeDestr = obj.nomeDestr;
var cognomeDestr = obj.cognomeDestr;
*/
// From object
const { nomeDestr, cognomeDestr } = obj;
console.log(`Destructuring 01: ${nomeDestr}-${cognomeDestr}`);

// From array
var arrDestr = [ "nome1", "nome2" ];
const [arrDestrUno, arrDestrDue] = arrDestr;
console.log(`Destructuring 02: ${arrDestrUno}-${arrDestrDue}`);

// From array of objects
var objDestr = [
    { nomeDestr02: "nome1", cognomeDestr02: "cognome1" },
    { nomeDestr02: "nome2", cognomeDestr02: "cognome2" }
]
const [ { nomeDestr02, cognomeDestr02 } ] = objDestr; // 
console.log(`Destructuring 03: ${nomeDestr02}-${cognomeDestr02}`);

// Advantage od destruct: Parameters order is not important
const signUp = ({password, username, email}) => console.log(`${username}, ${password}, ${email}`);
signUp({username:"username1", email:"email1", password:"password1"});

const numbers = [1, 2, 3];

function double(numbers) {
    var [first, ...args] = numbers;
    return args.length === 0
            ? [first * 2]
            : [first * 2, ...double(args)];
}
console.log(double(numbers));