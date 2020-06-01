//Complete the following problems:

/************************************************************* */
// Problem 1: Refactor the for() loop to be a while loop.
//

for(let i=0; i<10; i++) {
    console.log(" the value of i in the loop is : " + i);
}


//your code...

let i = 0;
while (i < 10) {
    console.log(" the value of i in the loop is : " + i);
    i++;
}


/************************************************************* */
// Problem 2:
// multiply the sum of 30 added to two by 20.  Divide the product by 10 raised to the power of 2
//use javascript to compute the value of the above statement. Each individual operation needs to be a function expression. run all the functions after defining them, and print the answer to the console.

//your code...

const addition = function(currentValue) {
    return currentValue += 30;
}
const multiplication = function(currentValue) {
    return currentValue *= 20;
}
const division = function(currentValue) {
    return currentValue /= (10 * 10) ;
}
console.log(division(multiplication(addition(2))));

/************************************************************* */
//Problem 3:
//Determine whether the following values are "truthy" or "falsy".  console.log() the value, whether the value is 'truthy' or 'falsy', along with your reasoning why using String interpolation.
// values : 
// 20
// 0
// "zero";
// const zero = 20;
// null
// "0"
// !""
// {}
// () => {console.log("hello TEKcamp!");}
// 125
// undefined
// ""

const zero = 20;
values = [20, 0, "zero", zero, null, "0", !"", {}, () => {console.log("hello TEKcamp!");}, 125, undefined, ""];

for (i = 0; i < values.length; i++) {
    if (values[i] && typeof values[i] === "string") {
        console.log(values[i] + " is truthy because it is a string.");
    } else if (values[i] && typeof values[i] === "number") {
        console.log(values[i] + " is truthy because it is a number.");
    } else if(values[i] && values[i] === !"") {
        console.log(values[i] + " is truthy because the bang operator reverses the value of the following boolean operator.");
    } else if(values[i] && typeof values[i] === "object") {
        console.log(values[i] + " is truthy because all objects are truthy, even empty ones.");
    } else if(values[i] && typeof values[i] === "function") {
        console.log(values[i] + " is truthy because all functions are truthy, even empty ones.");
    } else if (values[i]) {
        console.log(values[i] + " is truthy.");
    } else if (values[i] === undefined) {
        console.log(values[i] + " is falsy because it is undefined.");
    } else if (!values[i] && typeof values[i] === "string") {
        console.log(values[i] + " is falsy because it is an empty string.");
    } else if (!values[i] && values[i] === 0) {
        console.log(values[i] + " is falsy because it is 0.");
    } else if (!values[i] && values[i] === null) {
        console.log(values[i] + " is falsy because it is null.");
    } else {
        console.log(values[i] + " is falsy.")
    }
}



/************************************************************* */
// Problem 4:
// Refactor the following code using a switch statement:

const day = "friday";

if(day === "monday") {
    console.log("we got a long week ahead of us...");
} else if(day === "tuesday") {
    console.log("tuesday's are still beterr than mondays, but LONG way to go still");
} else if (day === "wednesday") {
    console.log("We are smack dab in the middle of the week");
} else if (day === "thursday") {
    console.log("Thursday night... the mood is right");
} else if (day === "friday") {
    console.log("TGIF.  Friday truly is the best day of the week!")
} else {
    console.log("It's a weekend!")
}


switch(day) {
    case "monday":
        console.log("we got a long week ahead of us...");
        break;
    case "tuesday":
        console.log("tuesday's are still beterr than mondays, but LONG way to go still");
        break;
    case "wednesday":
        console.log("We are smack dab in the middle of the week");
        break;
    case "thursday":
        console.log("Thursday night... the mood is right");
        break;
    case "friday":
        console.log("TGIF.  Friday truly is the best day of the week!");
        break;
    default:
        console.log("It's a weekend!");
}


/************************************************************* */
// Problem 5: Refactor the following functions to use a ternary expression:
const age = 10;
if (age > 21) console.log("adult"); else {
    console.log("minor");
}

if (age > 13 && age < 19) console.log('teen'); else {
    console.log("not a teenager");
};

if (age > 65) console.log("retired"); else {
    console.log("still working...");
}

age > 21 ? console.log("adult") : console.log("minor");

age > 13  && age < 19 ? console.log("teen") : console.log("not a teenager");

age > 65 ? console.log("retired") : console.log("still working...");

/************************************************************* */
// Problem 6: Create an object literal that represents yourself.  set it to a variable that appropriately describes the object.  Include the following properties:
/*
-name
-age
-gender
-hobbies
-profession
-education

-add a method on your object, named learn. the learn method should print the value of the name property using the 'this' keyword.

-add another method on your object of any action you want to perform, using some property that exists on your object, making sure to utilize the 'this' keyword.
*/

//your code...

var abigailSwigert = {
    name: "Abigail Swigert",
    age: 24,
    gender: "female",
    hobbies: ["reading", "playing video games", "cooking"],
    profession: "Graphic Designer",
    education: "Bachelor's Degree",
    learn: function() {
        console.log(this.name);
    },
    changeProfession: function() {
        this.profession = "Full Stack Developer";
        console.log(this.name + " is now a " + this.profession);
    }
}


/************************************************************* */
// Problem 6: Create an object literal that represents any object in the real world that you like.  Try to come up with a realistic set of properties and methods that would accurately describe that object.  In at least one of your methods, use the this keyword to refer back to one of the properties you defined on this object literal.  

//your code...

var classicCar = {
    make: "Ford",
    model: "Thunderbird",
    year: 1967,
    color: "Blue",
    doesRun: false,
    paintJob: function() {
        this.color = "White";
        console.log("Your " + this.year + " " + this.make + " "  + this.model + " is now " + this.color + "!");
    },
    engineRebuild: function() {
        this.doesrun = true;
        console.log("Your " + this.model + " is up and running again!")
    }
}

/************************************************************* */
//Problem 7: create a function that outputs your 3 favorite data types, with a message explaining why you like that data type.

//your code...

function favDataTypes() {
  console.log("Strings- because they are useful and simple.");
  console.log("Numbers- because I love doing math.");
  console.log("Objects- because they are fun to make.");
}

/************************************************************* */
//Bonus assignments:

//1. Create a Higher Order Function called multiple(x) that takes a single parameter.  This HOF should return another function fn(y) that takes another single parameter y.  This inner function should compute the product of it's parameter with the parameter passed into multiple.  Use this returned "first-class" function to compute triples of any given number.

//your code...

function multiple(x) {
  function fn(y) {
    return x * y;
  };
  return fn(3);
}

// 2. Write an outer function called stockGain that has cost basis (basis) as a parameter; declare a variable called message that holds " is how much the stock has increased".  Return an inner function with years (yrs) as a parameter and declare a variable for growth rate (r) of 5%. Console log your calculation.

// Once finished, declare a variable called futureValue that holds your stockGain function and enter any amount for the cost basis and a number for the number of years.  Run the function returned by the higher order function to display the future value of the stock.  

//your code...

function stockGain(basis, yrs) {
  const message = " is how much the stock has increased.";
  let newValue = basis;
  this.timePassed = function(yrs) {
    while (yrs > 0) {
      r = 0.05;
      newValue += newValue * r;
      yrs--;
    };
    return(newValue);
  }
  this.timePassed(yrs);
  let gain = newValue - basis;
  console.log(gain + message);
}
const futureValue = new stockGain(400,8);
futureValue.timePassed();
