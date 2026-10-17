//১. সব সংখ্যার যোগফল: অ্যারের সব সংখ্যার যোগফল বের করো।
const numbers = [1, 2, 3, 4, 5];
const sum= numbers.reduce((acc,curr)=>acc+curr,0);
//console.log(sum);


//২. সবচেয়ে বড় সংখ্যা (Max): reduce ব্যবহার করে অ্যারের সবচেয়ে বড় সংখ্যাটি বের করো।
const numbers2 = [10, 20, 30, 40, 50];
const maxNumber=numbers2.reduce((max,curr)=>max>curr?max:curr);
//console.log(maxNumber);

//৩. শপিং কার্টের মোট দাম: কার্টের সব আইটেমের দাম যোগ করে মোট খরচ বের করো।
const cartItems = [
  { id: 1, name: "Shirt", price: 20 },
  { id: 2, name: "Pants", price: 30 },
  { id: 3, name: "Shoes", price: 50 }
];
const totalCost = cartItems.reduce((sum, item) => sum + item.price, 0);
//console.log(totalCost);

//৪. উপাদানের ফ্রিকোয়েন্সি গোনা: অ্যারেতে কোন উপাদান কয়বার আছে তার অবজেক্ট তৈরি করো।
const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
const frequency=fruits.reduce((acc,curr)=>{
    acc[curr]=(acc[curr] || 0)+1;
    return acc;
},{});
console.log(frequency);