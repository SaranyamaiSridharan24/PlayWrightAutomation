const browserName = "Chrome";// global declaration

function getBrowserVersion()
{
    let browserVersion;
     //function scope
    if(browserName.startsWith("Safari"))
    {
        browserVersion = "V3.0"; //block scope
        console.log("The browser version is : "+browserVersion);
    }
    else
    {
        let browserVersion = "V24.0";
        console.log("The browser version is : "+browserVersion);
    }
    

    console.log("The browser name is : "+browserName);
    
        
       
}
getBrowserVersion();
