// Assignment Code -
var generateBtn = document.querySelector("#generate");

function generatePassword(
  passwordLength, includeSpecial, includeNumeric,
  includeLowercase, includeUppercase)
  {
    let characterOptions = [];
    let lowercase = "abcdefghijklmnopqrstuvwxyz".split("");
    let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    let special = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~".split("");
    let numeric = "123456789".split("");

    if (includeSpecial) {
      characterOptions = characterOptions.concat(special);
    }

    if (includeUppercase) {
      characterOptions = characterOptions.concat(uppercase);
    }

    if (includeLowercase) {
      characterOptions = characterOptions.concat(lowercase);
    }

    if (includeNumeric) {
      characterOptions = characterOptions.concat(numeric);
    }

    let res = ""
    console.log(characterOptions);

    for (i=0; i<passwordLength; i++) {
      let randomIndex = Math.floor(Math.random() * characterOptions.length);
      res += characterOptions[randomIndex];
    }
    
    return res;
}

// Write password to the #password input
function writePassword() {
  let passwordLength = window.prompt("Enter Length:");
  let includeSpecial = window.confirm("Include Special Characters?");
  let includeNumeric = window.confirm("Include Numeric Values?");
  let includeLowercase = window.confirm("Include lowercase letters?");
  let includeUppercase = window.confirm("Include uppercase letters?");

    var password = generatePassword(
      passwordLength, includeSpecial, includeNumeric, 
      includeLowercase, includeUppercase
    );
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


/*button to generate password prompt
prompt screen for pw criteria
prompt screen for length of char. (8-128)
promp screen for character types (lowercase, uppercase, numeric, special char.)
pw is written to page */
