//const extendHex = (shortHex) => {
  // write your code here
//};

// Do not change the code below.
//const shortHex = prompt("Enter Short Hex.");
//alert(extendHex(shortHex));
function extendHex(shortHex) {
    // Remove '#' if present and convert to uppercase
    shortHex = shortHex.replace(/^#/, '').toUpperCase();

    // Handle short hex codes with only one character per color
    if (shortHex.length === 3) {
        shortHex = shortHex.split('').map(char => char + char).join('');
    }

    // Ensure the resulting hex code has 6 characters
    while (shortHex.length < 6) {
        shortHex += shortHex.charAt(shortHex.length - 1);
    }

    // Add '#' prefix and return the extended hex code
    return '#' + shortHex;
}

// Examples
console.log(extendHex("#abc"));  // expected output: "#aabbcc"
console.log(extendHex("abc"));   // expected output: "#aabbcc"
console.log(extendHex("#AbC"));  // expected output: "#AABBCC"
console.log(extendHex("#f09"));  // expected output: "#ff0099"
