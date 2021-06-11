// Assignment Code
// 

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
//Password string reference
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var num = "1234567890";
var speChar = "!#$%&'()*+-./:;<=>?@[_]`{|}~";
var allChar = "";



/*When user clicks on generate password button, 
user is prompted for password length*/
function generatePassword() {
  var pwdLength = prompt("Enter password length. Min 8 characters and max 128 characters.");
  if (pwdLength < 8 || pwdLength > 128 || isNaN(parseInt(pwdLength))) {
    alert("Password must be minimum 8 characters and max 128 characters.");

  /*If user enters password length that fits within length criteria, then user is prompted
  to select yes or no on selection criteria*/

  } else {

  var lowerCase = confirm("Would you like to include lowercase characters?");
  if (lowerCase) {
      allChar += lowerCase;
    };
    
  var upperCase = confirm("Would you like to include upperCase characters?");
  if (upperCase){
    allChar += upperCase;
  };

  var num = confirm("Would you like to include numbers?");
  if (num){
    allChar += num;
  };

  var speChar = confirm("Would you like to include special characters?");
  if (speChar){
    allChar += speChar;
  };

}
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

