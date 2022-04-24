// Assignment Code
const generateBtn = document.querySelector("#generate");
//arrays used to generate PW
const alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const special = ["!",'"',"#","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~"];

//start of code
const getPasswordLength = () => {
  //ask user how long password should be
  const passwordLength = prompt("Please choose password length between 8 and 128.", "18");
  //test if user input is a number and within the correct parameters, if not, discard and stop
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Incorrect value, please choose a valid number.");
    return null;
  };
  //if user input is within specified parameters, save in storage
  return parseInt(passwordLength);
};

//password options, array is created based on answers
const getPasswordCriteria = () => {
 
 const alphaLower = confirm("Would you like your password to include lowercase letters?");
 const alphaUpper = confirm("Would you like your password to include uppercase letters?");
 const numbers = confirm("Would you like your password to include numbers?");
 const special = confirm("Would you like your password to include special characters?");
 const passwordOptions = [];

 if (alphaLower) {
   passwordOptions.push(alphaLower);
 }
 if (alphaUpper) {
   passwordOptions.push(alphaUpper);
 }
 if (numbers) {
   passwordOptions.push(numbers);
 }
 if (special) {
   passwordOptions.push(special);
 }
 return passwordOptions;
};

const createRandomPassword = () => {
  return "kdUE28(@d0";
};

// main function to generate the random password
const generatePassword = () => {
  // get the password length
  const passwordLength = getPasswordLength();

  // get the password criteria
  const passwordCriteria = getPasswordCriteria();

  // create random password
  const password = createRandomPassword(passwordLength, passwordCriteria);

  return password;
};

// Write password to the #password input
const writePassword = () => {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);