function charCodeAt(input){ // Function to convert a character to a number
  var keys = " 1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!#%&()*^$@`~-_=][+{\ }|</>,.;:'\"\n\t\v" ; // Set character data
  var values = [];
  for (var k = 0; k < keys.length; k++){ // Generate numbers data
    values.push(k);
  }
  for (var i = 0; i < keys.length; i++){
    if (keys[i] === input){return values[i]} // Check if the input character matches the character iterating through the keys variable
  }
}
function fromCharCode(input){ // Convert a number to a character
  var keys = " 1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!#%&()*^$@`~-_=][+{\ }|</>,.;:'\"\n\t\v" ;
  var values = [];
  for (var k = 0; k < keys.length; k++){
    values.push(k);
  }
  for (var i = 0; i < keys.length; i++){
    if (values[i] === input){return keys[i]}
  }
}
/////////////////////////// Transposition cipher

String.prototype.trans_encrypt = function(rows = 3) {
    rows = rows || 3
    let fence = [];
    for (let i = 0; i < rows; i++) fence.push([])
    let rail = 0;
    let change = 1;

    for (let char of this.split("")) {
        fence[rail].push(char)
        rail += change

        if (rail === rows - 1 || rail === 0) change = -change
    }

    let r = '';
    for (let rail of fence) r += rail.join("")

    return r
}
String.prototype.trans_decrypt = function(rows = 3) {
    rows = rows || 3
    let fence = [];
    for (let i = 0; i < rows; i++) fence.push([])
    let rail = 0;
    let change = 1;

    this.split("").forEach(char => {
        fence[rail].push(char)
        rail += change

        if (rail === rows - 1 || rail === 0) change = -change
    })

    const rFence = [];
    for (let i = 0; i < rows; i++) rFence.push([])

    i = 0
    let s = this.split("")
    for (r of fence) {
        for (let j = 0; j < r.length; j++) rFence[i].push(s.shift())
        i++
    }

    rail = 0
    change = 1
    var r = ""
    for (var i = 0; i < this.length; i++) {
        r += rFence[rail].shift()
        rail += change

        if (rail === rows - 1 || rail === 0) change = -change
    }

    return r
}


///////////////////////////
function encode(string) { // Function to get a hash of a string.
    var number = "0x";
    var length = string.length;
    for (var i = 0; i < length; i++){
        number += charCodeAt(string[i]).toString(16);}
    return number;
}
function encrypt(input, key) { // Encryption begins here
    var key = key.split(''); // Turn the key into a list
    var output = [];
    int1 = encode(key) % 20; // Generate a constant
    for (var i = 0; i < input.length; i++) { // Loop to encrypt every character
        var charCode = charCodeAt(input[i]) ^ charCodeAt(key[i % key.length]) ^ int1; // Use XOR to encrypt
        output.push(fromCharCode(charCode));
        }
    var int2 = encode(key) % key.length;
    return output.join("").trans_encrypt(int2 + 2);
}

function decrypt(input, key) {
    var int2 = encode(key) % key.length;
    var input = input.trans_decrypt(int2 + 2).split(''); 
    var output = [];
    int1 = encode(key) % 20; // Generate a constant
    for (var i = 0; i < input.length; i++) { 
        var charCode = charCodeAt(input[i]) ^ charCodeAt(key[i % key.length]) ^ int1; // Use XOR to decrypt
        output.push(fromCharCode(charCode));
        }
    
    return output.join("");
}
