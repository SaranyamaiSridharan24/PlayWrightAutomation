var genderType = "Female";// global declaration

function printGender()
{
    let color = "Black"; //function scope
    if(genderType.startsWith("Female"))
    {
        var age = 30; 
        let color = "Purple"; //block scope
        console.log("She/Her favourite color is : "+color);
    }
    else
    {
        var age = 40;
        console.log("He/His favourite color is : "+color);
    }
    console.log(age);
}
printGender();
console.log(genderType);