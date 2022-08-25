console.log("####### Rest and Spread Operators #######");
const restOperatorFn = (firstParam, ...strs) => strs.reduce((prev, next) => `${prev}|${next}`, "-->>");
console.log(restOperatorFn("param1", "stringa01","str02","string03","strN"));
console.log(restOperatorFn());

const arr1 = ["uno", "due", "tre"];
const arr2 = ["quattro", "cinque", "sei"];
const spreadOperatorWithArray = ["manual_dieci", "manual_undici", ...arr1, ...arr2];
console.log(spreadOperatorWithArray);

console.log("[### case: multiply x 2 each array item using recursion, spread and destructuring ###]")
const numbers = [1, 2, 3];
function double(numbers) {
    var [first, ...args] = numbers;
    return args.length === 0
            ? [first * 2]
            : [first * 2, ...double(args)];
}
console.log(double(numbers));