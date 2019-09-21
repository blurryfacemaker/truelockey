$(function(){
function encrypt(input){
// input = input.replace(/\t/g, "");
// input = input.replace(/\s{2}/g, "");
// input = input.replace(/\n/g, ";");
var x = 0;
var charCodes = ""
while(x <= input.length - 1){
    charCodes += input.charCodeAt(x) + " "
    x++
}
charCodes = charCodes.split(" ");
var secured = "";
var encrypted = "eval(eval(String.fromCharCode(";
var z = 0;
while(z <= charCodes.length - 1){
    if(z >= charCodes.length - 2){
        encrypted += charCodes[z];
    }
    else if(z <= charCodes.length - 1){
        encrypted += charCodes[z] + ", "
    }
    else{
        
    }
    secured += String.fromCharCode(charCodes[z]);
    z++
}
encrypted += ")));<br />";
document.write(encrypted + "<br /><br />")
}
$("#encode").click(function(){
    encrypt($("#code").val())
});
});
