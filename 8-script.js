/* let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Matilda";
console.log(firstName);
console.log(firstName);
console.log(firstName);

//variable name conventions
let jonas_matilda = "JM"
let $function = 27;

let person = "jonas"

let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);

let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "Jonas");

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);


let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;

// const job;

var job = "Programmer";
job = "Teacher"

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas*2, ageJonas/10, 2**3);

// 2**3 means 2 to the 3rd power or 2*2*2

const firstName = "Jonas"
const lastName = "Schmedtmann"
console.log(firstName + " " + lastName);

let x = 10+5; //15
x += 10; //25
x *= 4; //100
x++;
x--;
x--;
console.log(x);

console.log(ageJonas > ageSarah);

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(ageJonas > ageSarah);

let firstName = "Jonas";
let job = "teacher";
const birthYear = 1991;
let year = 2037;

let jonas = "I'm " + firstName + " a " + (year - birthYear) + " year old " + job + ".";
console.log(jonas);

let jonasNew = `I'm ${firstName}, a ${year-birthYear} year old ${job}.`;
console.log(jonasNew);

console.log(`just a regular string`);

console.log(`String with \n\ multiple \n\ lines`);

console.log(`string
  multiple
  lines`);

let age = 15;

if(age >= 18) {
  console.log("You are old enough to drive 👌");
} else {
  let yearsLeft = 18 - age;
  console.log(`You are too young. Wait another ${yearsLeft} years. :)`);
}

let birthYear = 1991;
let century = 21;

if(birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);

let inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

console.log(`I am ` + 23 +  ` year's old`);

console.log('23' - 10 - 3);

let n = '1' + 1;
n = n + 1;
console.log(n);

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

let money = 50;
if(money) {
  console.log(`Don't spend it all!`);
} else {
  console.log(`Time to get a job!`);
}

let height = 1;

if(height) {
  console.log(`Yay! Height is defined!`);
} else {
  console.log(`Height is undefined`);
}

let age = `18`
if(age === 18) console.log(`You just became an adult! (strict)`);
if(age == 18) console.log(`You just became an adult! (loose)`);

18 === 18 //true
18 === 19 //false
`18` == 18 //true
`18` === 18 //false
*/

let favorite = Number(prompt("What's your favorite number?"))
console.log(favorite);
console.log(typeof favorite);

if(favorite === 831) {
  console.log(`831 is an amazing number`);
} else if(favorite === 23) {
  console.log(`23 is also cool`);
} else {
  console.log(`That number is ok.`);
};
