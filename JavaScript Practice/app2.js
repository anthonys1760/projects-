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


// const firstName = 'William';
// const lastName = 'Johnson';
// const age = 32;
// const str = 'Hello there my name is Anthony';
// const tags = 'web design, web development, programming';

// let val;

// val = firstName + lastName;

// //Concatention
// val = firstName + ' ' + lastName;

// //Append
// val = 'Brad ';
// val += 'Traversy';

// val = 'Hello, my name is  ' + firstName + ' and I am ' + age;

// //Escaping 
// val = "That's awesome, I can't wait";

// // Lenth 
// val = firstName.length;

// //Concat
// val = firstName.concat(' ', lastName);

// //Change case
// val = firstName.toUpperCase();
// val = firstName.toLowerCase();

// val = firstName[2];

// val = firstName.indexOf('l');
// val = firstName.lastIndexOf('1');

// //Char at
// val = firstName.charAt('2');
// //Get Last character
// val = firstName.charAt(firstName.length - 1);

// // Substring()

// val = firstName.substring(0, 4);

// //Slice()
// val = firstName.slice(0, 4);
// val = firstName.slice(-3);

// //split 
// val = str.split(' ');
// val = tags.split(',');

// //replace()
// val = str.replace('Anthony', 'Tony');

// //includes()
// val = str.includes('foo');


// console.log(val);



// const name = 'John';
// const age = 30;
// const job = 'Web Developer';
// const city = 'Miami';
// let html;


// // html = '<ul>' +
// //        '<li>Name ' + name + '</li>' +
// //        '<li>Age ' + age + '</li>' +
// //        '<li>Job ' + job + '</li>' +
// //        '<li>City ' + city + '</li>';

// //with template strings (es6)
// html = `
//     <ul>
//         <li>Name: ${name}</li>
//         <li>Age: ${age}</li>
//         <li>Job ${job}</li>
//         <li>City: ${city}</li>
//     </ul>
// `;


// document.body.innerHTML = html;


//Without template strings (es5)


//Create some arrays
// const numbers = [43, 56, 33, 23, 44, 36, 5];
// const numbers2 = new Array(22, 45 , 33, 76, 54);
// const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
// const mixed = [22, 'Hello', true, undefined, null, {a:1, b:1}, new Date()];

// let val;

// // Get array length
// val = numbers.length;
// //Check if is array
// val = Array.isArray(numbers);
// // Get single value
// val = numbers[3];
// val = numbers[0];
// // Insert into array
// numbers[2] = 100;
// //Find index of value
// val = numbers.indexOf(36);

// //MUTATING ARRAYS
// //Add on to end
// numbers.push(250);
// //Add on to front
// numbers.unshift(120);
// // Take off from end
// numbers.pop();
// // Take off from front
// numbers.shift();
// //Splice values
// numbers.splice(1, 3);
// //Reverse
// numbers.reverse();

//Concatenate arrays
// val = numbers.concat(numbers2);

// //Sort arrays
// val = fruit.sort();
// // val = numbers.sort();

// //Use the "compare function"
// // val = numbers.sort(function(x, y) {
// //     return x - y;
// // });

// // //Reverse sort
// // val = numbers.sort(function(x, y) {
// //     return y - x;
// // });

// // Find
// function over50(num) {
//     return num > 50;
// }

// val = numbers.find(over50);

// console.log(numbers);
// console.log(val);