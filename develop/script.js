// Assignment Code
// 

var generateBtn = document.querySelector("#generate");
// console.log(generateBtn)


//Password string reference - global const should be uppercase
const ALPHA_LOWER = "abcdefghijklmnopqrstuvwxyz";
const ALPHA_UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const NUMBERS = "1234567890";
const SPECIAL_CHARS = "!#$%&'()*+-./:;<=>?@[_]`{|}~";


/*Logic for generate password function*/
function generatePassword(passwordLength, lowercase, uppercase, numbers, specialChars) {

  let selectedPasswordChars = "";
  if (lowercase) 
    selectedPasswordChars += ALPHA_LOWER;
  if (uppercase) 
    selectedPasswordChars += ALPHA_UPPER;
  if (numbers) 
    selectedPasswordChars += NUMBERS;
  if (specialChars) 
    selectedPasswordChars += SPECIAL_CHARS;

  let generatedPassword = "";

  for (var i=0; i<passwordLength; i++) {
      const randomFloat = Math.random() * selectedPasswordChars.length;
      const rounded = Math.floor(randomFloat);
      generatedPassword += selectedPasswordChars.charAt(rounded);
  }
  return generatedPassword;
}

// Write password to the #password input
function writePassword() {

  // Inputs for the password generator function
  // number
  const passwordLength = prompt("Enter password length. Min 8 characters and max 128 characters.");
  // if not a number or not in the right range,
  // then alert and return
  if (passwordLength < 8 || passwordLength > 128 || isNaN(parseInt(passwordLength, 10))) {
    alert("Password must be a number between 8 and 128 characters.");
  
 return;
  }
 
  // true/false
  const lowercase = confirm("Would you like to include lowercase characters?");
  // true/false
  const uppercase = confirm("Would you like to include uppercase characters?");
  // true/false
  const numbers = confirm("Would you like to include numbers?");
  // true/false
  const symbols = confirm("Would you like to include special characters?");

  // if no character class selected
  // then alert and return

  if (
    lowercase === false &&
    uppercase === false &&
    numbers === false &&
    symbols === false
  ) {

    alert("Password must include at least one character type.");
  
 return;
  };
 

  var password = generatePassword(passwordLength, lowercase, uppercase, numbers, symbols);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
