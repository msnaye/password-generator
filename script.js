// Assignment code here
var upperCaseArr =["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowerCaseArr =["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var numbersArr = ["0","1","2","3","4","5","6","7","8","9"]
var specialCharArr =[ "+", "-", "&&", "||", "!", "(", ")", "{", "}", "[", "]", "^","~", "*", "?", ":", ]

function generatePassword (){
  var passwordLength = prompt ("How many characters do you want to generate?")
  // console.log(passwordLength)
  while(passwordLength < 8 || passwordLength > 128){
    alert ("Please enter a valid password length 8-128")
   passwordLength = prompt ("Please enter how many characters you want to generate.")
  }
  var userChoiceArr = []
  var upperCaseCond= prompt ("Would you like to add uppercase letters to your password?")
  if (upperCaseCond=== "yes" || upperCaseCond=== "YES" || upperCaseCond=== "Y" || upperCaseCond=== "y" || upperCaseCond==="Yes"){
    userChoiceArr = userChoiceArr.concat(upperCaseArr)  
    // console.log (userChoiceArr)
  }
  else{
    var areYousure= prompt("Are you sure you don't want to add uppercase letters to your password?")
    if (areYousure=="yes" || areYousure=== "YES" || areYousure=== "Y" || areYousure=== "y" || areYousure==="Yes"){
      alert ("Ok, got it.")
    }
    else{
      alert ("Adding uppercase letters to your password")
      userChoiceArr = userChoiceArr.concat(upperCaseArr)  
      // console.log (userChoiceArr)
    }
  }
  var lowerCaseCond= prompt ("Would you like to add lowercase letters to your password?")
  if (lowerCaseCond=== "yes" || lowerCaseCond=== "YES" || lowerCaseCond=== "Y" || lowerCaseCond=== "y" || lowerCaseCond==="Yes"){
    userChoiceArr = userChoiceArr.concat(lowerCaseArr)  
    // console.log (userChoiceArr)
  }
    else{
     var areYousure= prompt ("Are you sure you don't want to add lowercase letters to your password?")
     if (areYousure=="yes" || areYousure==="YES"|| areYousure=== "Y" || areYousure=== "y" || areYousure==="Yes"){
      alert ("Ok, got it.")
  }
    else{
      alert ("Adding lowercase letters to your password")
     userChoiceArr = userChoiceArr.concat(lowerCaseArr)
    //  console.log (userChoiceArr)
  }
}
  var numbersCond= prompt ("Would you like to add numbers to your password?")
  if (numbersCond=== "yes" || numbersCond=== "YES" || numbersCond=== "Y" || numbersCond=== "y" || numbersCond==="Yes"){
    userChoiceArr = userChoiceArr.concat(numbersArr)  
    // console.log (userChoiceArr)
  }
    else{
      var areYousure= prompt ("Are you sure you want to add numbers to your password?")
      if (areYousure=="yes" || areYousure=== "Yes"|| areYousure=== "Y" || areYousure=== "y" || areYousure==="Yes"){
        alert ("Ok, go it.")
      }
      else{
        alert ("Adding numbers to your password")
        userChoiceArr = userChoiceArr.concat(numbersArr)
        // console.log (userChoiceArr)
      }
    }
  var specialCharCond= prompt ("Would you like to add special characters to your password?")
  if (specialCharCond=== "yes" || specialCharCond=== "YES" || specialCharCond=== "Y" || specialCharCond=== "y" || specialCharCond==="Yes"){
    userChoiceArr = userChoiceArr.concat(specialCharArr)  
    // console.log (userChoiceArr)
  }
  else {
    var areYousure=prompt ("Are you sure you don't want to add special characters to your password?")
    if (areYousure=="yes" || areYousure=== "Yes" || areYousure=== "Y" || areYousure=== "y" || areYousure==="Yes"){
      alert ("Ok, got it.")
    }
    else{
      alert ("Adding special characters to your password")
      userChoiceArr = userChoiceArr.concat(numbersArr)
      // console.log (userChoiceArr) 
    }
  }
  var generatedPassword =""
  for (var i=0; i< passwordLength; i++) {
    generatedPassword = generatedPassword + userChoiceArr[Math.floor(Math.random()*userChoiceArr.length)]
  }
  return generatedPassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
