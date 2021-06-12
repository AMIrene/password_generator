// Assignment Code
// 

var generateBtn = document.querySelector("#generate");
// console.log(generateBtn)


//Password string reference
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var num = "1234567890";
var speChar = "!#$%&'()*+-./:;<=>?@[_]`{|}~";
var allpassChar = "";




/*When user clicks on generate password button, 
user is prompted for password length*/
function generatePassword() {
  var pwdLength = prompt("Enter password length. Min 8 characters and max 128 characters.");

  if (pwdLength < 8 || pwdLength > 128 || isNaN(parseInt(pwdLength))) {
    alert("Password must be minimum 8 characters and maximum 128 characters.");

  /*If user enters password length that fits within length criteria, then user is prompted
  to select yes or no on character options*/

  } else {

  var lowCase = confirm("Would you like to include lowercase characters?");
  if (lowCase) {
      allpassChar += lowerCase;
    };
    
  var uppCase = confirm("Would you like to include uppercase characters?");
  if (uppCase){
    allpassChar += upperCase;
  };

  var numbr = confirm("Would you like to include numbers?");
  if (numbr){
    allpassChar += num;
  };

  var speChars = confirm("Would you like to include special characters?");
  if (speChars){
    allpassChar += speChar;
  };

/*If user fails to select any options, then a prompt warning user to select one 
character type pops up*/
if (
  lowCase === false &&
  uppCase === false &&
  numbr === false &&
  speChars === false
) {
  alert("You must select at least one character type.");

  //When user fails to select at least one character type, user gets prompted to enter their character length//
  generatePassword();
}
//combine all character variables//

//Random selection//
var passWrd = "";
for (var i=0; i<pwdLength; i++){
  
    // passWrd += allpassChar.charAt(Math.floor(Math.random() * 10) + 1);
  passWrd += allpassChar.charAt(Math.floor(Math.random() * allpassChar.length))
  
}
return passWrd;
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


