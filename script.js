// Assignment code here
// Get references to the #generate element
let generateBtn = document.querySelector("#generate");

function passwordLength (){ 
    let passwordLength = prompt("How long would you like your password to be?", "Enter length.");
    passwordLength = parseInt(passwordLength);
    if (!passwordLength) {
      alert("ooops try again!");
      return null;
    } else if (passwordLength < 8) {
      alert("Password must have at least 8 characters");
      return null; 
    } else if (passwordLength > 128) {
      alert("Password cannot contain more than 128 characters");
      return null; 
    } console.log (passwordLength);
    
    if (passwordLength== null) {
      return null;
    }

    return passwordLength;
  } 

function passwordInfo () {
  let hasUppercase = confirm("Do you want to use uppercase letters?");
  let hasLowercase = confirm("Do you want to use lowercase letters?");
  let hasNumbers = confirm("Do you want your password to have numbers?");
  let hasCharacters = confirm("Do you want your password to have special characters?");

if (!hasUppercase && !hasLowercase && !hasNumbers && !hasCharacters) {
  alert("Must choose at least one credential.");
  return null;
}

return [hasUppercase, hasLowercase, hasNumbers, hasCharacters];
} 

function generatePassword (int, array) {
  let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lowercase = "abcdefghijklmnopqrstuvwxyz";
  let characters = "!@#$%^&*()";
  let numbers = "0123456789";
  let usableCharacters = "";
  let actualPassword = "";
  let charactersArray = [uppercase, lowercase, characters, numbers];
  
  for (let i=0; i<charactersArray.length; i++){
    if (array[i]){ 
      usableCharacters = usableCharacters.concat(charactersArray[i]);
    }
  }
  for (let i=0; i<int; i++) {
    actualPassword += usableCharacters.charAt(Math.floor(Math.random() * usableCharacters.length));
  }
   return actualPassword;
}


function writePassword() { 
  let passwordText = document.querySelector("#password");
  
  let passwordLength = passwordLength(); 
  console.log (passwordLength);
  if (passwordLength ==null) {
    return;
  } 
  console.log("test");
  let finalArray= passwordInfo ();
  if (passwordInfo ==null) {
    return;
  } 
  let password = generatePassword(passwordLength, finalArray); 

  passwordText.value = password; 

}

// Add event listener to generate button
generateBtn.addEventListener("click", passwordLength);


