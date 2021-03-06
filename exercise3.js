//Complete the following problems: 

/************************************************************* */

// Problem 1:
// Write a JavaScript function that determines whether a string is empty. If the string is empty, the output should be true, otherwise it should return false. 



//your code...

function checkEmpty(str) {
  if (str) { //checks to see if str is true (because empty strings are false, but all others are true)
    console.log(false); // because str === true and therefore the string is not empty
  } else {
    console.log(true); // because str !== true and therefore the string is empty
  }
}


/************************************************************* */

// Problem 2:
// Declare a variable that holds a string (e.g., ‘Learning JavaScript is fun!’). Replace a word so that the output uses the new word instead (e.g., ‘Learning JavaScript is cool!). 



//your code...

const lies = 'Learning JavaScript is fun!';

const truth = lies.replace('fun', 'stressful'); //reaching into lies to replace "fun" with "stressful"


/************************************************************* */
// Problem 3:
// Write a function that declares an array of numbers from one to five and returns another array with the squared value of each number from the first array. Use an arrow function and one of the built-in array methods. 



//your code...

function squareNums() {
  const numsArray = [1, 2, 3, 4, 5]; // creating array of numbers
  const squaredArray = []; // creating empty array to hold numbers from numsArray after they have been squared
  numsArray.forEach(n => squaredArray.push(n**2)); // reaching into each item in numsArray multiplying it by itself, and pushing it into squaredArray
  return squaredArray; // returning now filled squaredArray
}



/************************************************************* */
// Problem 4:
// Now declare another array of numbers that has the following numbers: 1, 3, 5, 7, 9, 1, 3, 5. Write a JavaScript program that returns an array of the numbers that are greater than 3. Use an arrow function and one of the built-in array methods.



//your code...

const numsArray2 = [1, 3, 5, 7, 9, 1, 3, 5];
const greaterThan3 = [];

numsArray2.forEach(n => { // reach into each item in numsArray2
  if (n > 3) { // check to see if the itme is grater than 3
    greaterThan3.push(n); // push it into greaterThan3 array
  };
  return greaterThan3;
});

/************************************************************* */
// Problem 5:
// Now declare another array of numbers that has any 5 numbers. Write a JavaScript program that returns the sum of those numbers. Use an arrow function and one of the built-in array methods. 



//your code...

const randomArray = [9, 0, 2, 10, 378];
let randomArraySum = 0;

randomArray.forEach(n => randomArraySum += n);


/************************************************************* */
// Problem 6:
// DNA is made up of base pairs where every G is paired with a C and every T is paired with an A. 

// Write a function that takes in a DNA string as a parameter and returns an array with the complementary strand. For example, a string of "GCTA" would return an array of ["C", "G", "A", "T"].  



//your code...

function stringOfDNA(str) {
  compDNA = str.split('');
  for (x = 0; x < compDNA.length; x++) {
    if (compDNA[x] === 'G') {
      compDNA.splice(x, 1, 'C');
    } else if (compDNA[x] === 'C'){
      compDNA.splice(x, 1, 'G');
    } else if (compDNA[x] === 'A'){
      compDNA.splice(x, 1, 'T');
    } else if (compDNA[x] === 'T'){
      compDNA.splice(x, 1, 'A');
    };
  };
  return compDNA;
}

/************************************************************* */
// Problem 7:

// 7.a - Write a function to find the maximum numerical value of the given array.  Get rid of any non numerical values.  Convert the strings that are numbers to an actual number data type.  ("one" => 1) ("1" => 1).  Use array methods to perform this task.  
const numbers = [2,23,1,2,1,1,1,2,2.5,20,200,2000,,{k:1},20000,19999,1878,140,23,4,"sk",true,true,"true-dat","nice","one","two","three","3","tea",[]];

function maxNumber(numbers) {
  //your code...
  const truthys = numbers.filter(el => el);
  const primitives = truthys.filter(n => typeof n != 'object');
  const noBools = primitives.filter(p => typeof p != 'boolean');
  const numStrings = ["zero","one","two","three"];
  const numWithStrings = noBools.map(nb => numStrings.includes(nb) ? numStrings.indexOf(nb) : nb);
  const numWithStrings2 = numWithStrings;
  numWithStrings2[24] = Number(numWithStrings[24]);
  const nums = numWithStrings2.filter(n => typeof n != 'string');

  return Math.max(...nums);
};

// 7.b -Write a function that sorts the given numbers array.  Allow the function to sort the array in descending order

function sortNums(numbers,desc=false) {
  //your code...
  return numbers.sort().reverse();
};



/************************************************************* */
// Problem 8:
//add an example of at least 5 JavaScript data types to the given mapObj.  The key is the example data type, and the value is the name of the data type.  An object data type has already been set as the 1st key / val pair.

const mapObj = new Map();
mapObj.set({company : "TEKsystems"},"object");
Object.defineProperty(mapObj, 2, {
    value: 'number',
    enumerable: true
});
Object.defineProperty(mapObj, 'Hello', {
    value: 'string',
    enumerable: true
});
Object.defineProperty(mapObj, true, {
    value: 'boolean',
    enumerable: true
});
Object.defineProperty(mapObj, [1,2,3], {
    value: 'array',
    enumerable: true
});
Object.defineProperty(mapObj, function() {}, {
    value: 'function',
    enumerable: true
});

console.log(mapObj.has({company : "TEKsystems"}));
console.log("When you set and object to another object key, the key object is stringified to [object Object]")
//The above console.log() statmeent returns false.  Write another console.log() statement explaining why this line of code prints false.  Refactor the code on line 106, so you can successfully check to see if {company : "TEKsystems"} exists in the mapObj.

//your code...
var company = {company : "TEKsystems"};
mapObj.set(company,"object");
console.log(mapObj.has(company));

//loop through the mapObj and create a new array of only the data types, leaving out the example keys of the mapObj.  Use array methods to do this.  Example output : ['string',number','boolean',array','object']

const typesArray = Object.values(mapObj);

/************************************************************* */
//Problem 11:

let ones = [1,11,111,1111,11111,111111,1111111,11111111,111111111,1111111111];
//reverse the array, without modifying the ones array.

const reverseOnes = ones.slice().reverse();

/************************************************************* */
//Problem 12:
//create a function called performer(cb) that takes in a callback function and runs that callback function.  It should return the output of the callback function.

function performer(cb) {
    //code goes here
    cb();
};

function cb() {
  console.log('This is a callback function.')
};


/************************************************************* */
//Bonus assignment:
//research a new feature of ES6+ and create an example of it's use case here.  Be sure to write comments explaining what the feature is and why it is useful.

// Template literals 
// These make it much easier and faster to not only make, but read strings that have variables passed into them.

// Here are some variables to put in a string.
const firstName = "Abigail";
const lastName = "Swigert";
const birthYear = 1996;
const age = (2020 - birthYear);

// Here is the console log of the long string wiht multiple variables passed into it, without template literals
console.log("My name is " + firstName + " " + lastName + ". I was born in the year " + birthYear + ", which makes me " + age + " years old.")

// Here is is written with template literals
console.log(`My name is ${firstName} ${lastName}. I was born in the year ${birthYear}, which makes me ${age} years old.`)
// This is far easier to type and read, and makes you less likely to miss a space, or plus sign somewhere