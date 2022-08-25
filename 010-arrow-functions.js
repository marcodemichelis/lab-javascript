console.log("####### Arrow Functions #######");
let arrowFn = (n) => n + 10;
console.log(arrowFn(30));

// Case of return an object (use rounded brackets beacuse is an object with curly brackets)
const arrowFn2 = (nickName) => ({ nome: "pippo", age: 44, nickName});
console.log(arrowFn2("pip"));