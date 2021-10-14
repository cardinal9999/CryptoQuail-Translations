function charCodeAt(input){ // Function to convert a character to a number
  var keys = " 1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!#%&()*^$@`~-_=][+{\ }|</>,.;:'\"" ; // Set character data
  var values = [];
  for (var k = 0; k < keys.length; k++){ // Generate numbers data
    values.push(k);
  }
  for (var i = 0; i < keys.length; i++){
    if (keys[i] === input){return values[i]} // Check if the input character matches the character iterating through the keys variable
  }
}
function fromCharCode(input){ // Convert a number to a character
  var keys = " 1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!#%&()*^$@`~-_=][+{\ }|</>,.;:'\"" ;
  var values = [];
  for (var k = 0; k < keys.length; k++){
    values.push(k);
  }
  for (var i = 0; i < keys.length; i++){
    if (values[i] === input){return keys[i]}
  }
}
function encode(string) { // Function to get a hash of a string.
    var number = "0x";
    var length = string.length;
    for (var i = 0; i < length; i++){
        number += charCodeAt(string[i]).toString(16);}
    return number;
}
function crypt(input, key) { // Encryption begins here
    var key = key.split(''); // Turn the key into a list
    var output = [];
    int1 = encode(key) % 20; // Generate a constant
    for (var i = 0; i < input.length; i++) { // Loop to encrypt every character
        var charCode = charCodeAt(input[i]) ^ charCodeAt(key[i % key.length]) ^ int1; // Use XOR to encrypt
        output.push(fromCharCode(charCode));
        }
    return output.join("");
}
