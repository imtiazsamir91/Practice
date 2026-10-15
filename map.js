//1
//map method is used to create a new array from an existing array by applying a function to each element of the original array.
const number =[1,2,3,4,5,6];
const doubleNumbers=number.map(num=>num*3);
//console.log(doubleNumbers);

//2
//celsious to fahrenheit
const celsious=[22,33,40,42,50];
const fahrenheit=celsious.map(c=>c*9/5+32);
//console.log(fahrenheit);

//3
const users=[{id:1,name:'John'},{id:2,name:'Jane'},{id:3,name:'Jack'}];
const usernames=users.map(user=>user.name);
//console.log(usernames);