// Assignment Code
const generateBtn = document.querySelector("#generate");
//arrays used to generate PW
const alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const special = ["!", '"', "#", "%", "&", "'", "(", ")", "*", "+", "," ,"-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~"];

// main function to generate the random password
const generatePassword = () => {
  

// get the password length
const passwordLength = getPasswordLength();

if(passwordLength) {
// get the password criteria
  const passwordCriteria = getPasswordCriteria();
//test if user input is a number and within the correct parameters
  if(passwordCriteria.length === 0){
      alert("Password length must be a number between 8-128.")

  }  
    if(Number.isNaN(passwordLength)) {
      alert("Incorrect value, please choose a valid number.");
      }else{

      // create random password
     const password = createRandomPassword(passwordLength, passwordCriteria);
      return password;
      };

      }else{
          // when user input is incorrect 
      alert("Please try again.")
      }
      };

// get password length
const getPasswordLength = () => {
  //ask user how long password should be
  const passLength = prompt("Please choose password length between 8 and 128.", "18");

  const determinePassLength = parseInt (passLength, 10);

  if (determinePassLength >=8 && determinePassLength <= 128){
} else {
    alert ("Password length must be a number between 8-128.");
    return false;
}
return determinePassLength;
};


//password options, array is created based on answers and saved
const getPasswordCriteria = () => {
 
 const confirmLower = confirm("Would you like your password to include lowercase letters?");
 
 const confirmUpper = confirm("Would you like your password to include uppercase letters?");
 
 const confirmNumbers = confirm("Would you like your password to include numbers?");
 
 const confirmSpecial = confirm("Would you like your password to include special characters?");
 
 let passwordOptions = [];

 if (confirmLower) {
   passwordOptions = [...alphaLower];
 }

 if (confirmUpper) {
   passwordOptions = [...passwordOptions, ...alphaUpper];
 }

 if (confirmNumbers) {
   passwordOptions = [...passwordOptions, ...numbers];
 }

 if (confirmSpecial) {
   passwordOptions = [...passwordOptions, ...special];
 }
//if you don't select anything, reload page to start again
 if (
  !confirmLower &&
  !confirmUpper &&
  !confirmNumbers &&
  !confirmSpecial
) {
  alert("At least one of these options must be selected in order to create a password, please try again.");
  location.reload
}

return passwordOptions;
};

//
const createRandomPassword = (passwordLength, passwordOptions) => {
  const passwordArray =[];
  for(let i = 0; i < passwordLength; i+=1){
  // select random categories from the array
  const randomCategoryElement = Math.floor(Math.random() * passwordOptions.length);
  // getting random categories 
  const randomCategory = passwordOptions[randomCategoryElement];
  // getting random element
  const randomElement = Math.floor(Math.random() * randomCategory.length);
  // getting random character
  const randomCharacter = randomCategory.charAt(randomElement)
  passwordArray.push(randomCharacter);
  }
  return passwordArray.join("");
};

// Write password to the #password input
const writePassword = () => {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);