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
}