'use strict';

console.log(true + "Hi"); //trueHi
console.log("Hi" + "man"); //Himan
console.log("Hi" + 90); //Hi90
console.log(90 + "Hi"); //90Hi
console.log(90 + true); //91

console.log(true * "Hi"); //NaN
console.log("Hi" * "man"); //NaN
console.log("Hi" * 90); //NaN
console.log(90 * "Hi"); //NaN
console.log(90 * true); //90

console.log(true / "Hi"); //NaN
console.log("Hi" / "man"); //NaN
console.log("Hi" / 90); //NaN
console.log(90 / "Hi"); //NaN
console.log(90 / true); //90

console.log(true - "Hi"); //NaN
console.log("Hi" - "man"); //NaN
console.log("Hi" - 90); //NaN
console.log(90 - "Hi"); //NaN
console.log(90 - true); //89

console.log(Boolean("heee"));
console.log(String(90));
console.log(Number("90"));
console.log(Number(true));