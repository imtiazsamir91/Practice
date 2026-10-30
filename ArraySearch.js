//Array indexOf()
const fruits = ["apple", "banana", "orange", "grape"];
//indexOf() method returns the index of the first occurrence of a specified element in an array. If the element is not found, it returns -1.
const index = fruits.indexOf("banana");
//console.log(index); // Output: 1

//Array lastIndexOf()
const numbers = [1, 2, 3, 4, 5, 3, 2, 1];   
const lastIndex = numbers.lastIndexOf(3);
//console.log(lastIndex); // Output: 5 

//includes() method is used to check if an array contains a certain element. It returns true if the element is found, otherwise false.
const colors = ["red", "green", "blue"];
const hasGreen = colors.includes("green");
console.log(hasGreen); // Output: true
