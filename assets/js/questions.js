const questions = [
  {
    question: "What is JavaScript?",
    answer: "A programming language for client-side scripting",
    choices: [
      "A script for Java",
      "A style sheet language",
      "A markup language",
      "A programming language for client-side scripting",
    ],
  },
  {
    question: "How do you declare a variable in JavaScript?",
    answer: "let myVariable = 10;",
    choices: [
      "declare myVariable = 10;",
      "variable myVariable = 10;",
      "let myVariable = 10;",
      "inst myVariable = 10;",
    ],
  },
  {
    question: "What is the difference between 'let', 'const', and 'var'?",
    answer:
      "'let' is block-scoped, 'const' is block-scoped, and 'var' is function-scoped.",
    choices: [
      "'let' is block-scoped, 'const' is block-scoped, and 'var' is function-scoped.",
      "'let' is function-scoped, 'const' is block-scoped, and 'var' is block-scoped.",
      "'let' is block-scoped, 'const' is function-scoped, and 'var' is block-scoped.",
      "'let' is block-scoped, 'const' is block-scoped, and 'var' is block-scoped.",
    ],
  },
  {
    question: "How do you comment in JavaScript?",
    answer: "// This is a comment",
    choices: [
      "var COMMENT = This is a comment",
      "// This is a comment",
      "# This is a comment",
      "-- This is a comment",
    ],
  },
  {
    question: "Explain the concept of arrays in JavaScript.",
    answer: "A data structure for storing a list of elements",
    choices: [
      "A method for looping over objects",
      "A way to declare variables",
      "A data structure for storing key-value pairs",
      "A data structure for storing a list of elements",
    ],
  },
  {
    question: "How do you create and call a function in JavaScript?",
    answer: "function myFunction() { } / myFunction();",
    choices: [
      "function myFunction() { } / myFunction();",
      "def myFunction() {} / call myFunction();",
      "function => myFunction() {} / runFunction(function);",
      "create function myFunction() {} / invoke(myFunction);",
    ],
  },
  {
    question: "Explain the difference between '=='' and '===' in JavaScript.",
    answer:
      "'==' checks for equality, and '===' checks for strict equality (value and type).",
    choices: [
      "'==' checks for strict equality, and '===' checks for loose equality.",
      "'==' checks for equality, and '===' checks for strict equality (value and type).",
      "'==' checks for strict equality, and '===' checks for deep equality.",
      "'==' checks for loose equality, and '===' checks for equality.",
    ],
  },
  {
    question: "What is an if statement and how is it used?",
    answer: "A conditional statement for executing code based on a condition",
    choices: [
      "A loop statement for iterating over arrays",
      "A conditional statement for executing code based on a condition",
      "A statement for defining a function",
      "A statement for declaring variables",
    ],
  },
  {
    question: "How do you loop over an array in JavaScript?",
    answer: "for (item in array) {}",
    choices: [
      "loop(array) {}",
      "for (item in array) {}",
      "for Every(item => {}) on array",
      "while (array) {}",
    ],
  },
  {
    question: "What is the purpose of the 'return' statement in a function?",
    answer: "To specify the value to be returned by the function",
    choices: [
      "To change the function immediately",
      "To print a value to the console",
      "To declare a variable",
      "To specify the value to be returned by the function",
    ],
  },
  {
    question: "What is the purpose of the 'typeof' operator in JavaScript?",
    answer: "To determine the data type of a variable or expression",
    choices: [
      "To create a new variable",
      "To determine the data type of a variable or expression",
      "To check if a variable is defined",
      "To concatenate strings",
    ],
  },
  {
    question: "What is the significance of the 'this' keyword in JavaScript?",
    answer:
      "It refers to the current execution context or the object to which a function belongs",
    choices: [
      "It represents a placeholder value",
      "It is used to declare variables",
      "It refers to the current execution context or the object to which a function belongs",
      "It refers to the next iteration in a loop",
    ],
  },
  {
    question:
      "How can you prevent the default behavior of an HTML form submission in JavaScript?",
    answer: "By using the event.preventDefault() method",
    choices: [
      "By using the event.preventDefault() method",
      "By setting the form's 'action' attribute to 'none'",
      "By using the event.stopPropagation() method",
      "By removing the 'submit' event listener",
    ],
  },
  {
    question: "What is the purpose of the 'map' function in JavaScript?",
    answer:
      "To create a new array by applying a function to each element of an existing array",
    choices: [
      "To filter elements from an array",
      "To merge two arrays",
      "To reverse the order of elements in an array",
      "To create a new array by applying a function to each element of an existing array",
    ],
  },
  {
    question: "What is a closure in JavaScript?",
    answer:
      "A function bundled with its lexical environment, allowing access to outer variables",
    choices: [
      "A built-in JavaScript method",
      "A function bundled with its lexical environment, allowing access to outer variables",
      "A data type for storing multiple values",
      "A syntax error in JavaScript",
    ],
  },
  {
    question: "How do you handle asynchronous operations in JavaScript?",
    answer: "By using callbacks, promises, or async/await syntax",
    choices: [
      "By using callbacks, promises, or async/await syntax",
      "By using the 'await' keyword only",
      "By using the 'async' keyword only",
      "By using the 'defer' attribute in script tags",
    ],
  },
  {
    question:
      "What is the purpose of the 'addEventListener' method in JavaScript?",
    answer: "To attach an event handler function to an HTML element",
    choices: [
      "To create a new HTML element",
      "To attach an event handler function to an HTML element",
      "To modify the CSS of an element",
      "To remove an HTML element from the DOM",
    ],
  },
  {
    question: "What is the role of the 'let' keyword in modern JavaScript?",
    answer: "To declare block-scoped variables",
    choices: [
      "To declare global variables",
      "To declare variables with constant values",
      "To create anonymous functions",
      "To declare block-scoped variables",
    ],
  },
  {
    question: "What is the purpose of the 'fetch' function in JavaScript?",
    answer: "To make asynchronous HTTP requests and handle responses",
    choices: [
      "To create a new array from an existing array",
      "To perform mathematical operations",
      "To navigate between HTML pages",
      "To make asynchronous HTTP requests and handle responses",
    ],
  },
  {
    question: "How can you check if a variable is an array in JavaScript?",
    answer: "By using the 'Array.isArray()' method",
    choices: [
      "By using the 'Array.isArray()' method",
      "By comparing it to the string 'array'",
      "By checking its length property",
      "By doing myarray = array",
    ],
  },
  {
    question:
      "What is the output of the following code:\n\nvar x = 5;\nvar y = '5';\nconsole.log(x == y);",
    answer: "true",
    choices: ["true", "false", "undefined", "Error"],
  },
  {
    question:
      "What is the output of the following code:\n\nvar x = true;\nconsole.log(!x);",
    answer: "false",
    choices: ["true", "false", "undefined", "Error"],
  },
  {
    question:
      "What is the output of the following code:\n\nvar x = [1, 2, 3];\nconsole.log(x.length);",
    answer: "3",
    choices: ["1", "2", "3", "4"],
  },
  {
    question:
      "What is the output of the following code:\n\nconsole.log(typeof NaN);",
    answer: '"number"',
    choices: ['"number"', '"string"', '"undefined"', '"NaN"'],
  },
  {
    question:
      "What is the output of the following code:\n\nconsole.log(2 ** 3);",
    answer: "8",
    choices: ["5", "6", "8", "9"],
  },
  {
    question:
      "What is the output of the following code:\n\nvar x = 5;\nvar y = '5';\nconsole.log(x === y);",
    answer: "false",
    choices: ["true", "false", "undefined", "Error"],
  },
  {
    question:
      "What is the output of the following code:\n\nvar x = 10;\nvar y = '5';\nconsole.log(x - y);",
    answer: "5",
    choices: ["5", "10", "15", '"105"'],
  },
  {
    question:
      "What is the output of the following code:\n\nvar x = [1, 2, 3];\nvar y = [...x];\nconsole.log(y);",
    answer: "[1, 2, 3]",
    choices: ["[1, 2, 3]", "[3, 2, 1]", "[1, 2]", "Error"],
  },
  {
    question:
      "What is the output of the following code:\n\nconsole.log(Math.random());",
    answer: "A random number between 0 and 1",
    choices: ["0", "0.5", "1", "A random number between 0 and 1"],
  },
  {
    question:
      "What is the output of the following code:\n\nconsole.log('5' + 5);",
    answer: '"55"',
    choices: ['"10"', "10", '"55"', "Error"],
  },
];

export default questions;
