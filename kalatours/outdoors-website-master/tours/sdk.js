// code to convert the first letter of user input 

var name = prompt ("what is your name?");


var firstChar = name.slice(0,1);  // access the first the letter
var uppercaseFirstchar = firstChar.toUppercase(); // the first letter to the uppercase
var RestofName = name.slice(1,name.length); //isolating the rest letters

RestofName = RestofName.toLowercase ; //restofname to lowercase
var firstChar_RestofName = uppercaseFirstchar +  RestofName ; // concatenate the first char and the rest of the name

alert("Hello" + firstChar_RestofName);

// return Hello  Tawab

