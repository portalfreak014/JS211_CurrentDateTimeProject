// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!!


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()

  document.getElementById("display-element").innerHTML = currentDate;
}


// Write a JavaScript program to convert a number to a string.

let number = 2
let numberString = number.toString();
console.log(typeof(numberString))


// Write a JavaScript program to convert a string to the number.

let string = "2";
let stringNumber = Number(string);
console.log(typeof(stringNumber));

// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String

  function definedatatype(argument) {
    console.log(typeof(argument));
  }

// NOTE: Exclude this function while completing Part II. The Data Type will always return as a String. If you want a challenge, come back to this function and start in the console. Then see what you can make of it. Again, simply skip this function while completing Part II of this project.
  

  
// Write a JavaScript program that adds 2 numbers together.

function addTwoNumbersTogether(Num1,Num2){
  const sum = Num1 + Num2
  return sum
}

console.log(addTwoNumbersTogether(3,2))

// Write a JavaScript program that runs only when 2 things are true.

function logicProgramBothAnd(a, b) {
  if (a && b) {
    console.log("Nice")
  }
  else {
    console.log("try again")
  }
}

// Write a JavaScript program that runs when 1 of 2 things are true.

function logicProgramEitherOr(a, b) {
  if (a || b) {
    console.log("Nice")
  }
  else {
    console.log("try again")
  }
}

// Write a JavaScript program that runs when both things are not true.  

function logicProgramBothWrong(a, b) {
  if (a === false && b === false) {
    console.log("Nice")
  }
  else {
    console.log("try again")
  }
}

// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
