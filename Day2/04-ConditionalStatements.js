//if-else statement
function getBrowser()
{
    if(browserName === "Chrome"){
        console.log("Supported browser");
    }
    else if (browserName === "Edge")
    {
        console.log("Supported browser");
    }
    else{
        console.log("Not a Supported browser");
    }
}
let browserName = "Chrome";
getBrowser();

//switch statements
function getBrowserVersion()
{
    switch(browser)
    {
        case 'Chrome':
            console.log("140");
            break;
        
        case 'Edge':
            console.log("150");
            break;

        case "Firefox":
            console.log("169");
            break;

        default:
            console.log("Unsupported browser");
            break;
        }
}
let browser = "Edge";
getBrowserVersion();