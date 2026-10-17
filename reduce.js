//১. সব সংখ্যার যোগফল: অ্যারের সব সংখ্যার যোগফল বের করো।
const numbers = [1, 2, 3, 4, 5];
const sum= numbers.reduce((acc,curr)=>acc+curr,0);
console.log(sum);