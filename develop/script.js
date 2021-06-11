// Assignment Code
// 

var generateBtn = document.querySelector("#generate");


//Password string reference
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var num = "1234567890";
var speChar = "!#$%&'()*+-./:;<=>?@[_]`{|}~";
var passChar = "";
var passWrd = "";



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
      passChar += lowerCase;
    };
    
  var upperCase = confirm("Would you like to include upperCase characters?");
  if (upperCase){
    passChar += upperCase;
  };

  var num = confirm("Would you like to include numbers?");
  if (num){
    passChar += num;
  };

  var speChar = confirm("Your password is looking pretty good, but would you like to include special characters?");
  if (speChar){
    passChar += speChar;
  };

/*If user fails to select any options, then a prompt warning user to select one 
character type pops up*/
if (
  lowerCase === false &&
  upperCase === false &&
  num === false &&
  speChar === false
) {
  alert("You must select at least one character type.");

  //User gets prompted to enter their character length//
  generatePassword();
}

//Random selection//

for (var i = 0; i < pwdLength; i++) {
  // passWrd = passChar[Math.floor(Math.random() * 10) + 1];
  passWrd += passChar.charAt(Math.floor(Math.random() * 10) + 1);
}
return passWrd
}
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

