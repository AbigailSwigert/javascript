//Complete the following problems: 

// Problem 1:
// Part 1: Write a JavaScript function that converts the current temperature from Fahrenheit to Celsius. Declare a variable for the current temperature then store the Celsius temperature into a variable. Console log the variable.

// Part 2: Write another function that converts the Celsius temperature back to Fahrenheit. 

//your code...


function convertFromFahrenheit(currentFahrenheit) {
    console.log("It is currently " + (currentCelsius = (currentFahrenheit - 32) * (5 / 9)) + " degrees Celsius.");
}

function convertFromCelsius(currentCelsius) {
    console.log("It is currently " + (currentFahrenheit = (currentCelsius * (9 / 5) + 32)) + " degrees Fahrenheit.");
}



/************************************************************* */
// Problem 2:
// Write a JavaScript function to determine if someone is old enough to vote. Declare a variable for age and write a conditional statement for whether that age is old enough to vote. Console log "yes" or "no"

//your code...


function canVote(age) {
    if (age >= 18) {
        console.log("yes");
    } else {
        console.log("no");
    }
}


/************************************************************* */
// Problem 3:
// Write a JavaScript function that converts a string to an array. Declare a string variable with "The five boxing wizards jump quickly." Use the split() method to turn the string into an array of strings. (Be sure you separate the string into words, not characters.) After you have finished, use the join() method to change the array back into a string.

//your code...


function convertString(){
    var myString = "The five boxing wizards jump quickly."
    return myString.split(" ").join(" ");
}


/************************************************************* */
// Problem 4:
// Write a JavaScript function with a function that reverses your telephone number. Use the split() and join() methods from the previous problem as well as the toString() method to convert a number into a string and reverse() method to reverse an array in place.

//your code...

function reverseNumber(phoneNumber) {
    return phoneNumber.toString().split("").reverse().join("");
}


/************************************************************* */
// Problem 5:
// Write a JavaScript function that creates a car object using information about your car. Include the make, model, year, and color. Write a function to get the year, color, make, and model in that order.

//your code...


function getCarInfo(carYear, carColor, carMake, carModel) {
    return car = {year:carYear, color:carColor, make:carMake, model:carModel};
}



/************************************************************* */
// Problem 6:
// Write a JavaScript function with a loop that will iterate from 0 to 15. Each iteration, the for loop will check if the current number is odd or even and display the output.


//your code...


function evenOrOdd() {
    for (x = 0; x <= 15; x++) {
        if (x % 2 === 0) {
            console.log(x + " is even");
        } else {
            console.log(x + " is odd");
        }
    }
}


/************************************************************* */
// Problem 7:
// Write a JavaScript function that iterates the integers from 1 to 100. For multiples of 3 print "TEK" instead of the number and for multiples of 5, print "camp." For numbers that are multiples of both 3 and 5, print "TEKcamp."

//your code...

function tekCamp() {
    for (x = 1; x <= 100; x++) {
        switch(true) {
            case x / 3 === 0 && x / 5 === 0:
                console.log("TEKcamp");
                break;
            case x / 3 === 0:
                console.log("TEK");
                break;
            case x / 5 === 0:
                console.log("camp");
                break;
            default:
                console.log(x);
        }
    }
}


/************************************************************* */
// Problem 8:
const nums = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
// Write a "for" loop that console.log()'s the first
// value in the nums array, and every 3rd number, i.e. 0, 3, 6,
// and 9: the zeroth, third, sixth, and ninth values.

//your code...


for (x = 0; x < nums.length; x += 3) {
    console.log(x);
}


// Problem 9:
const foodArray = [ 'potatoes', 'tamales', 'lemon','strawberries','chocolate', 'pudding', {school : 'TEKcamp'} ];
//access the value of the last element of the array and set it to a variable called school.  print the school variable to the console.

const adjectiveArray = [ 'salty', 'spicy', 'sour', 'sweet', 'rich','creamy','amazing'];
// Using both the foodArray and the adjectiveArray, make a
// "for" loop that console.log()'s a sentence for each
// corresponding value in the arrays. Add the word "is" or "are" depending on if the food is singular or plural.  "Potatoes are salty", "Lemon is sour".

const school = "TEKcamp";
foodArray[foodArray.length - 1] = school;
console.log(foodArray[foodArray.length -1]);


for (x = 0; x < foodArray.length; x++) {
    var plural = foodArray[x].endsWith("s");
    if (plural === true){
        verb = " are ";
    } else {
        verb = " is ";
    };
    console.log(foodArray[x] + verb + adjectiveArray[x]);
}

/************************************************************* */
// Bonus Assignment: Create 4 mathematical function expressions, add,subtract,multiply,divide.  put them in an array, and create a doMath() function that randomly does one of the 4 operations whenever it is run.  the doMath() function should print out what mathematical function was carried out.  The doMath() function should return the computed value of any operation performed.
const operations = ["add", "subtract", "multiply", "divide"];
function doMath(x,y) {
    randomExpression = Math.floor(Math.random() * 4);
    switch(true) {
        case operations[randomExpression] === "add":
            console.log(x + " + " + y + " = " + (x += y));
            break;
        case operations[randomExpression] === "subtract":
            console.log(x + " - " + y + " = " + (x -= y));
            break;
        case operations[randomExpression] === "multiply":
            console.log(x + " * " + y + " = " + (x * y));
            break;
        case operations[randomExpression] === "divide":
            console.log(x + " / " + y + " = " + (x / y));
            break;
    }
};



