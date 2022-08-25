console.log("####### Generators #######");
// For each
const forOfArray = ["red", "yellow", "green"];
for (let color of forOfArray) {
    console.log(color);
}
// Generators
function *shopping() {
    // stuff on the sidewalk
    // walking down the sidewalk 
    // we go into the store with cash
    const stuffFromStore = yield "cash";
    // walking to laundry place
    const cleanClothes = yield "laundry";

    // walking back home
    return [stuffFromStore, cleanClothes];
}

// stuff in the store
const gen = shopping();
console.log(gen.next());                // leaving our house
// walked into the store
// walking up and down the aisles...
// purchase our stuff
console.log(gen.next("groceries"));     // leaving the store with groceries
console.log(gen.next("clean clothes"));

// version 1
function* colors() {
    yield "red";
    yield "green";
    yield "blue";
}
for (let color of colors()) {
    console.log(color);
}

// version 2
const team1 = {
    teamName: "team1",
    members: 10,
    [Symbol.iterator]: function* () {
        yield this.teamName;
        yield this.members;
    }
}
for (let teamProp of team1) {
    console.log(teamProp);
}

// version 3
const team2 = {
    teamName: "team2",
    members: 20,
    subteam: team1,
    [Symbol.iterator]: function* () {
        yield this.teamName;
        yield this.members;
        yield* this.subteam;
    }
}
for (let teamProp of team2) {
    console.log(teamProp);
}

// version 4
class Node
{
    constructor(name, childNodes) {
        this.name = name;
        this.childNodes = childNodes;
    }
    *[Symbol.iterator]() {
        yield this.name;
        for (let child of this.childNodes) yield* child;
    }
}
const children = [
    new Node("node01", []),
    new Node("node02", []),
    new Node("node03", []),
]
const root = new Node("nodeRoot", children);
for (let n of root)
    console.log("" + n);