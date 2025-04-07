/*String Declaration : 
1. String Literal
2. Object Literal

String Literal : ' ', " ", ` `
let firstName = "Saranya";
let userName = "Saranya"; -->no memory allocation is processed for two different variabels since both are holding the same values

Strign Object
let firstName = new String ("Saranya");
let userName = new String ("Saranya"); */

let firstName = "Saranya";
let userName = "Saranya";
console.log(firstName===userName);
console.log(typeof firstName);

let firstName1 = new String ("Saranya");
let userName1 = new String ("Saranya");
console.log(firstName1===userName1);
console.log(typeof firstName1);

//Escape Sequence
let testType = 'It\'s a regression testing';
console.log(testType);
let stringType = "Hello, this is a \"Good session\"";
console.log(stringType);

//Concatenation = concat() method can also be used
let testCaseName = "Create a new lead";
let testCaseID = 100;
let result = testCaseName+"-"+testCaseID+":passed the execution";
console.log(result);
/*let result1 = testCaseName.concat(testCaseID).toString;
//concat(testCaseID).toString;
console.log(result1);*/

//Template literal

let testCases = 100;
let output = `There are ${testCases} testcases`;
console.log(output);

//String methods
//length
let courseName = "Playwright";
console.log(`The length of the coursename is ${courseName.length}`);

//charAt
console.log(`The first character of the string is ${courseName.charAt(0)}`);

//indexof
console.log(`The index of the string is ${courseName.indexOf("l")}`);

//includes - o/p will true or false
console.log(`${courseName.includes('Play')}`);
console.log(`${courseName.includes('slay')}`);

//slice
let outputMessage = courseName.slice(2,5);
console.log(outputMessage);

//substring

let outputMessage1 = courseName.substring(0,4);
console.log(outputMessage1);

//split
let companyName = "Maybank Malaysia MBB Labs Pvt Ltd";
let array = companyName.split("");
console.log(array);
