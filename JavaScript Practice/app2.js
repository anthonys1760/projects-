// let val;

// // Number to string
// val = String(555);
// val = String(4 + 4);
// val = String(true);
// val = String(new Date());
// //Array to string
// val = String([1, 2, 3, 4]);

// //toString()
// val = (5).toString();
// val = (true).toString();

// //String to number
// val = Number('5');
// val = Number(true);
// val = Number(false);
// val = Number(null);
// val = Number('hello');
// val = Number([1, 2, 3, 4]);

// val = parseInt('100.30');
// val = parseFloat('100.30');


// // //output
// // console.log(val);
// // console.log(typeof val);
// // //console.log(val.length);
// // console.log(val.toFixed(2));

// const val1 = String(5);
// const val2 = 6;
// const sum = val1 + val2;

// console.log(sum);
// console.log(typeof sum);

// const num1 = 100;
// const num2 = 50;
// let val;

// //Simple Math with numbers
// val = num1 + num2;
// val = num1 * num2;
// val = num1 - num2;
// val = num1 / num2;
// val = num1 % num2;

// //Math Object
// val = Math.PI;
// val = Math.E;
// val = Math.round(2.4);
// val = Math.ceil(2.4);
// val = Math.floor(2.8);
// val = Math.sqrt(64);
// val = Math.abs(-3);
// val = Math.pow(8, 2);
// val = Math.min(2, 33, 4, 1, 55, 6);
// val = Math.max(2, 33, 4, 1, 55, 6);
// val = Math.random(Math.floor() * 20 + 1);



// console.log(val);


const firstName = 'William';
const lastName = 'Johnson';
const age = 32;
const str = 'Hello there my name is Anthony';
const tags = 'web design, web development, programming';

let val;

val = firstName + lastName;

//Concatention
val = firstName + ' ' + lastName;

//Append
val = 'Brad ';
val += 'Traversy';

val = 'Hello, my name is  ' + firstName + ' and I am ' + age;

//Escaping 
val = "That's awesome, I can't wait";

// Lenth 
val = firstName.length;

//Concat
val = firstName.concat(' ', lastName);

//Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[2];

val = firstName.indexOf('l');
val = firstName.lastIndexOf('1');

//Char at
val = firstName.charAt('2');
//Get Last character
val = firstName.charAt(firstName.length - 1);

// Substring()

val = firstName.substring(0, 4);

//Slice()
val = firstName.slice(0, 4);
val = firstName.slice(-3);

//split 
val = str.split(' ');
val = tags.split(',');

//replace()
val = str.replace('Anthony', 'Tony');

//includes()
val = str.includes('foo');


console.log(val);

