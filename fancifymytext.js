function helloAlert()
{
	alert("Hello, world!");
}

function makeBigger() 
{
    helloAlert();
    document.getElementById("text").style.fontSize="24pt";
}

function fancify() 
{
    if(document.getElementById("fancify").checked)
	{
        alert("How fancy!");
        document.getElementById("text").style.fontWeight = "bold";
        document.getElementById("text").style.color = "blue";
        document.getElementById("text").style.textDecoration = "underline";
    } 
	else
	{
        document.getElementById("text").style.fontWeight = "normal";
        document.getElementById("text").style.color = "black";
        document.getElementById("text").style.textDecoration = "none";
    }
}

function moo() 
{
    var str = document.getElementById("text");
	str.style.textTransform = "uppercase";
    var parts = str.value.split(".");
    str.value = parts.join("-Moo.");
}
