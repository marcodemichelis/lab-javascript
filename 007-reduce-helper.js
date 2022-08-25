console.log("####### 'reduce' Helper #######");
console.log("### Case 1: reduce numbers, making the sum");
const numbers = [10, 20, 30];
const sum = numbers.reduce((prev, next) => prev + next, 0);

console.log(sum);

console.log("### Case 2: reduce objects");
const colors = [
    { color: "red" },
    { color: "green" },
    { color: "yellow" }
];
const stringColors = colors.reduce((prev, next) => {
    prev.push(next.color);
    return prev;
}, []);
console.log(stringColors);

console.log("### Case 3: reduce to validate");
function validateParenthesis(str) {
    return str.split("").reduce((prev, next) => {
        if (prev < 0) return prev;
        if (next === "(") return ++prev;
        if (next === ")") return --prev;
        return prev;
    }, 0) === 0;
}
console.log(validateParenthesis("((()))"));
console.log(validateParenthesis("((()"));
console.log(validateParenthesis(")((())"));
