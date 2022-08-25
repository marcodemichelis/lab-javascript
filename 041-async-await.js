// ### Case 1: first sample of async/await with setTimeout ###
console.log("### Case 1: first sample of async/await ###");
function doubleAfter2Seconds(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x * 2);
        }, 2000);
    });
}

async function addAsync(x) {
    const a = await doubleAfter2Seconds(10);
    const b = await doubleAfter2Seconds(20);
    const c = await doubleAfter2Seconds(30);
    return x + a + b + c;
}

console.log("calculating...");
addAsync(10).then((sum) => {
    console.log(sum);
});

// ### Case 2: Promise.all ###
console.log("### Case 2: Promise.all ###");
async function addAsync2(x) {
    const results = await Promise.all(
        [
            doubleAfter2Seconds(10),
            doubleAfter2Seconds(20),
            doubleAfter2Seconds(30)
        ]
    );
    return x + results.reduce((prev, next) => prev + next);
}
addAsync2(1000)
    .then((total) => console.log(`Promise.all: ${total}`));

// ### Case 3: error ###
console.log("### Case 3: error ###");
const fnErrorAsync = async () => { throw new Error(404); };

async function addAsyncWithError() {
    try {
        await fnErrorAsync();
    } catch (error) {
        throw new Error(`catched an error @@[${error}]@@ and generated a new error!`);
    }
}
addAsyncWithError()
    .then(() => console.log(`success!`))
    .catch((err) => console.error(err));


