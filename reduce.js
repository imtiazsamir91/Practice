//১. সব সংখ্যার যোগফল: অ্যারের সব সংখ্যার যোগফল বের করো।
const numbers = [1, 2, 3, 4, 5];
const sum= numbers.reduce((acc,curr)=>acc+curr,0);
//console.log(sum);


//২. সবচেয়ে বড় সংখ্যা (Max): reduce ব্যবহার করে অ্যারের সবচেয়ে বড় সংখ্যাটি বের করো।
const numbers2 = [10, 20, 30, 40, 50];
const maxNumber=numbers2.reduce((max,curr)=>max>curr?max:curr);
//console.log(maxNumber);