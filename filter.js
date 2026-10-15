//filter method is used to create a new array from an existing array by filtering out elements that do not meet a certain condition.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers=numbers.filter(num=>num%2===0);
//console.log(evenNumbers);

//২. ৫ এর চেয়ে বড় সংখ্যা: ৫০ এর চেয়ে বড় সংখ্যাগুলো ফিল্টার করো।
const numbers2 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const greaterThanFifty=numbers2.filter(number=>number>50);
//console.log(greaterThanFifty);