//concat a string with another string
const str1 = "Hello ";
const str2 = "world!";

function concatStrings(str1, str2) {
    return str1 + str2;
}   

const result = concatStrings(str1, str2);
console.log(result); // Output: "Hello, world!"