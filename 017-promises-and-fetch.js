const canFetch = typeof globalThis.fetch === 'function';
console.log(canFetch);

const fetch = require("node-fetch");

console.log("####### Fetch and Promises #######");

const promise = new Promise(() => {
});
console.log(promise);

console.log("####### Case 1 #######");
const promise1 = new Promise((resolve, reject) => {
    resolve("ciao");
});
promise1
    .then((s) => console.log("finally finshed!! - " + s))
    .then(() => console.log("I was also ran!!"))
    .catch(() => console.log("oh oh!"));

console.log("####### Case 2 #######");
const promise2 = new Promise((resolve, reject) => {
    reject();
});
promise2
    .then(() => console.log("finally finshed 2!!"))
    .then(() => console.log("I was also ran 2!!"))
    .catch(() => console.log("oh oh 2!"));

console.log("####### Case 3 #######");
const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(), 4000);
});
promise3
    .then(() => console.log("finally finshed 3!!"))
    .then(() => console.log("I was also ran 3!!"))
    .catch(() => console.log("oh oh 2!"));

console.log("####### Case 4 #######");
const urlToFetch = "https://jsonplaceholder.typicode.com/posts";
const promiseFetch = fetch(urlToFetch);
console.log(promiseFetch);
promiseFetch
    //.then(response => console.log(response))
    .then(response => response.json())
    //.then(responseJson => console.log(responseJson));

console.log("####### Case 5 #######"); // Fetch doesn't raise "reject" for 404, it is the only ajax framework that behaves in this way
const urlToFetch404 = "https://jsonplaceholder.typicode.com/posts123456/";
const promiseFetch404 = fetch(urlToFetch404);
promiseFetch404
    .then(response => console.log(response))
    .catch(error => console.log("BAD", error));

console.log("####### Case 6 #######"); // here it raises error, then catch
const urlToFetchNotFound = "https://jsonplaceholder.typicode12345.com/posts/";
const promiseFetchNotFound = fetch(urlToFetchNotFound);
promiseFetchNotFound
    .then(response => console.log(response))
    .catch(error => console.log("BAD", error));
