//Task 1: 
// Create a function named `userProfile` that takes a `name` as a parameter and logs “Hello, <name>!" to the console.
function userProfile(name)
{
    console.log("Hello "+name);

}
userProfile("Saranya");

//Task 2:
//Create an arrow function named `double` that takes a number as a parameter and returns double its value.
let double = (a) => 
{
    console.log("The value of the doubled numbers is "+a*2);
}
double(10)

//Task 3 :
//Use an anonymous function with `setTimeout` to log `"This message is delayed by 2 seconds"` after 2 seconds.

let anonymousFunction = 
        setTimeout (() =>
        {
            console.log(`message is delayed by 2000 ms`);
        }, 2000);

anonymousFunction 

//Task 4:
function getUserData(name, callback)
{
    console.log("The name is "+name);
    callback();
}

function getUserAge()
{
    const age = 30;
    setTimeout (() =>
        {
            console.log("Age is "+age);
        }, 3000);
}

getUserData("Saranya",getUserAge);        

