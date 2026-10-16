//filter method is used to create a new array from an existing array by filtering out elements that do not meet a certain condition.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers=numbers.filter(num=>num%2===0);
//console.log(evenNumbers);

//২. ৫ এর চেয়ে বড় সংখ্যা: ৫০ এর চেয়ে বড় সংখ্যাগুলো ফিল্টার করো।
const numbers2 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const greaterThanFifty=numbers2.filter(number=>number>50);
//console.log(greaterThanFifty);

//৩. সক্রিয় ইউজার (Active Users): যাদের isActive: true শুধু তাদের ফিল্টার করো।
const Users=[
  { id: 1, name: "Alice", isActive: true },
  { id: 2, name: "Bob", isActive: false },
  { id: 3, name: "Charlie", isActive: true },
  { id: 4, name: "David", isActive: false }
];
const activeUsers=Users.filter(user=>user.isActive);
//console.log(activeUsers);

//৪. ছোট শব্দগুলো বাদ দেওয়া: যে শব্দগুলোর দৈর্ঘ্য ৫ এর বেশি, শুধু সেগুলো রাখো।
const words = ["apple", "banana", "kiwi", "grape", "orange", "pear"];
const longWords=words.filter(w=>w.length>5);
//console.log(longWords);