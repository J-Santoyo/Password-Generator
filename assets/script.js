// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = passwordGenerator();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function passwordGenerator( length ) {
    var length = (length)?(length):(13);
    var string = "abcdefghijklmnopqrstuvwxyz"; //allows it to grab all 26 letters
    var numeric = '0123456789'; //allows for selection of numbers
    var punctuation = '!@#$%^&*()_+~`|}{[]\:;?><,./-='; //grabs special characters
    var password = "";
    var character = "";
    while( password.length<length ) {
        letters = Math.ceil(string.length * Math.random()*Math.random());
        numbers = Math.ceil(numeric.length * Math.random()*Math.random());
        chars = Math.ceil(punctuation.length * Math.random()*Math.random());
        hold = string.charAt( letters );
        hold = (password.length%2==0)?(hold.toUpperCase()):(hold); //forces some selected chars to Upper
        character += hold;
        character += numeric.charAt( numbers );
        character += punctuation.charAt( chars );
        password = character;
    }
    password=password.split('').sort(function(){return 0.5-Math.random()}).join('');
    return password.substr(0,length);
    }
    console.log( passwordGenerator() );