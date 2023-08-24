// একটা array কে অন্য একটা variable এর মধ্যে এনে ঐ variable এর যোগফল দেখাও ===============

/* 

let myArray0 = [1, 2, 3];

let sum = 5;
for(let i = 0; i < myArray0.length ; i++){
    sum = sum / myArray0[i];
}
console.log(sum);
 */

// array এর মধ্যে ২০ নাম্বার টা কি আছে কি নাই =============================

/*
let a = 50;

let myArray = [50, 60, 30, 70, 84, 90, 64, 98, 81, 67];

for (let i = 0; i < myArray.length; i++) {
    if (a === myArray[i]) {
        console.log('Yeah you are right');
        return true;
    } else {
        console.log('You are not right');
        return false;
    }

} 

*/

// array এর মধ্যে শুধু even number এবং তার সাথে যোগফল দেখাও =================================

// var arr = [1, 8, 6, 9, 7, 5, 64, 1, 2, 3, 6, 7, 9, 41, 5, 63, 1, 58];
// var sum = 0;

// for (var i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 1) {
//     sum = sum + arr[i]
//     // console.log(arr[i]);
//   }
// }
// console.log(sum);


// =======================================================================================

let myArray6 = [2, 12, 5, 6, 7, 70, 8];
let sobThakeBoro = 0;

for (let i = 0; i < myArray6.length; i = i + 1) {
  if (sobThakeBoro < myArray6[i]) {
    sobThakeBoro = myArray6[i];
  }
  // console.log(sobThakeBoro);
}

// console.log(10 > 2);

// ====================================================================================

// যদি একই নামে এক নামে থাকে তাহলে এক্টাই যাবে আর বাকি ডুবলিগেট নাম বাদ যাবে 

const names = [
  "abul",
  "babul",
  "abul",
  "babul",
  "cabul",
  "dabul",
  "ebul",
  "gabul",
  "abul",
  "babul",
  "gabul",
  "habul",
  "jabul",
  "mokbul"
];


function removeDublicate(names){
  const unique =[];
  for(let i = 0; i < names.length; i++){
    const name = names[i];

    if(unique.includes(name) === false){
      unique.push(name)
    }
  }
  return unique;
}
const show = removeDublicate(names)
console.log(show);