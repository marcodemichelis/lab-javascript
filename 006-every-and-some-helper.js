console.log("####### 'every' and 'some' Helper #######");
var users = [
    { id: 21, hasSubmitted: true },
    { id: 62, hasSubmitted: false },
    { id: 4, hasSubmitted: true }
  ];
console.log(`'every' sample: ${users.every(function(item){ return item.hasSubmitted })}`);
console.log(`'some' sample: ${users.some(function(item){ return item.hasSubmitted })}`);
// with arrow functions
console.log(`'every' sample: ${users.every((item) => item.hasSubmitted )}`);
console.log(`'some' sample: ${users.some((item) => item.hasSubmitted)}`);