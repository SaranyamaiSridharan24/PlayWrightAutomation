function greetEveryone(name, call1, call2)
{
    console.log("Hello " + name);
    call1();
    call2();

}

function displayThanks1()
{
    console.log("Thanks for learning with TestLeaf");
}
function displayThanks2()
{
    console.log("Thanks for working with TestLeaf");
}
greetEveryone("Saranya", displayThanks1, displayThanks2)

function checkAvailability(movieName, callback)
{
    console.log(`Checking the movie name`);
    setTimeout (() =>
    {
        console.log(`Movie ${movieName} is available`);
        callback();
    }, 5000);
}
function playMovie()
{
    console.log(`Now playing movie`);
}
checkAvailability("Spiderman", playMovie)