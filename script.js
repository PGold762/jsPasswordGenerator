// Array of numbers to be in the password
var numberCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of special characters to be in the password
var specialCharacters = [
  '!',  '@',  '#',  '$',  '%',  '^',  '&',  '*',  '(',  ')',  '-',  '_',  '+',  '}',  '{',  ']',  '[',  ':',  "'",  '?',  '/',  ',',  '.',  '~'
];

// Array of lower case letters to be in the password
var lowerCharacters = [
  'a',  'b',  'c',  'd',  'e',  'f',  'g',  'h',  'i',  'j',  'k',  'l',  'm',  'n',  'o',  'p',  'q',  'r',  's',  't',  'u',  'v',  'w',  'x',  'y',  'z',
];

// Array of capital letters to be in the password
var upperCharacters = [
  'A',  'B',  'C',  'D',  'E',  'F',  'G',  'H',  'I',  'J',  'K',  'L',  'M',  'N',  'O',  'P',  'Q',  'R',  'S',  'T',  'U',  'V',  'W',  'X',  'Y',  'Z',
];

// Function for user to be prompt
function passwordPrompt() {
  // Variable to store password length
    var passwordLength = parseInt(
        prompt('Input the amount of characters you would like for the password'),
        10
    );

    // Conditional to check for the length of the password being a number & prompts user if it is not
    if (Number.isNaN(passwordLength)) {
      alert('Length of password must be a number')
      return null;
    }

    // Conditional to check if password is at least 8 characters long & prompts user if it is not
    if (passwordLength < 8) {
      alert('Password must be at least 8 characters')
      return null;
    }

    // Conditional to check if password is 128 characters or less & prompts user if it is not
    if (passwordLength > 128) {
      alert('Password must be no more than 128 characters')
      return null;
    }

    // Variable to store special characters
    var storeSpecialCharacters = confirm(
      'Click OK to accept using special characters.'
    )

    // Variable to store number characters
    var storeNumberCharacters = confirm(
      'Click OK to accept using numbers.'
    )

    // Variable to store lowercase letters
    var storeLowercaseCharacters = confirm(
      'Click OK to accept using lowercase letters'
    )

    // Variable to store capital letters
    var storeUpperCharacters = confirm(
      'Click OK to accept using captial letters.'
    )


    // Checks to ensure the user selected a character type
    if (
      storeSpecialCharacters === false &&
      storeNumberCharacters === false &&
      storeLowercaseCharacters === false &&
      storeUpperCharacters === false
    )
    {
      alert('You must select a character type')
      return null;
    }

    //Variable to store the user's options
    var passOptions = {
      passwordLength: passwordLength,
      storeUpperCharacters: storeUpperCharacters,
      storeLowercaseCharacters: storeLowercaseCharacters,
      storeNumberCharacters: storeNumberCharacters,
      storeSpecialCharacters: storeSpecialCharacters,
    };

    return passOptions;

} // closing tag for passwordPrompt

// Pick a random element for the password creation
function passwordRandomizer(arr) {
  var randomizerMath = Math.floor(Math.random() * arr.length);
  var randomizerItem = arr[randomizerMath];

  return randomizerItem;
} // closing tag for passwordRandomizer

// Function to create the password
function passwordCreate() {
  var passwordCreateOptions = passwordPrompt();

  // Stores password
  var passwordCreateItems = [];

  // If PasswordCreateOptions exists already, stop the function
  if (!passwordCreateOptions) return null;

  // Conditional combining numbers into the passwordCreateItems
  if (passwordCreateOptions.storeNumberCharacters) {
    passwordCreateItems = passwordCreateItems.concat(numberCharacters);
  }

  // Conditional combining uppercharacters into the passwordCreateItems
  if (passwordCreateOptions.storeUpperCharacters) {
    passwordCreateItems = passwordCreateItems.concat(upperCharacters);
  }

  // Conditional combining lowercharacters into the passwordCreateItems
  if (passwordCreateOptions.storeLowerCharacters) {
    passwordCreateItems = passwordCreateItems.concat(lowerCharacters);
  }

  // Conditional combining specialcharacters into the passwordCreateItems
  if (passwordCreateOptions.storeSpecialCharacters) {
    passwordCreateItems = passwordCreateItems.concat(specialCharacters);
  }

  // Generate the password
  var password = '';
  for (var i = 0; i < passwordCreateOptions.passwordLength; i++) {
    var randomChar = passwordRandomizer(passwordCreateItems);
    password += randomChar;
  }

  return password;
}  //closing tag for passwordCreate


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = passwordCreate();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
