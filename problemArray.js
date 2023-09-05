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
// console.log(show);

// sujon vaiyer problem 18 and 18 er niche jara ace tader dekhate hobe 
/* 
let obj = [
  {
      "name": 'maruf',
      "age": '12',
      "address": 'khulna',
      "status": 'marride',
  },
  {
      "name": 'sima',
      "age": '32',
      "address": 'khulna',
      "status": 'marride',
  },
  {
      "name": 'sakil',
      "age": '7',
      "address": 'khulna',
      "status": 'marride',
  },
  {
      "name": 'sawan',
      "age": '18',
      "address": 'khulna',
      "status": 'marride',
    }
];

let nabaleg = obj.filter(person => (person.age) <= 18);
console.log(nabaleg);

let showAge = nabaleg.map(person => person.name);
console.log(showAge);
 */



// সুজন ভাইয়ের প্রবলেম সলব করা হয়েছে 


let units = [
  {
      id:1,
      name:'ton',
  },
  {
      id:2,
      name:'box',
  },
  {
      id:3,
      name:'pice',
  }
]

let products = [
  {
      id:1,
      name:'Elsa Luxury Digital Printed Unstiched Kurti',
      unitId: 3,
      price: 10
  },
  {
      id:2,
      name:'Sunehri Luxury Printed 3pcs',
      unitId: 2,
      price: 30
  },
  {
      id:3,
      name:'Sunehry VOL-6 Digital Printed Unstitched 3pcs',
      unitId: 2,
      price: 50,
  },
  {
      id:3,
      name:'Sunehry VOL-6 Digital Printed Unstitched 3pcs',
      unitId: 1,
      price: 0,
  }
]

// const obj ={};

// for(const key of units){
//   const show = key;
//   console.log(show);
// }




// i want this products to transformation products list example


// let result = [
//   {
//       id:1,
//       name:'Elsa Luxury Digital Printed Unstiched Kurti',
//       unitInfo: {
//           id:3,
//           name:'pice',
//       },
//       price: 10
//   },
//   {
//       id:2,
//       name:'Sunehri Luxury Printed 3pcs',
//       unitInfo: {
//           id:2,
//           name:'box',
//       },
//       price: 30
//   },
//   {
//       id:3,
//       name:'Sunehry VOL-6 Digital Printed Unstitched 3pcs',
//       unitInfo: {
//           id:2,
//           name:'box',
//       },
//       price: 50
//   },
//   {
//       id:3,
//       name:'Sunehry VOL-6 Digital Printed Unstitched 3pcs',
//       unitInfo: {
//           id:1,
//           name:'ton',
//       },
//       price: 0
//   }
// ]



let result = products.map((product) => {
  // Find the corresponding unit information for the product
  const unitInfo = units.find((unit) => unit.id === product.unitId);
  console.log(unitInfo);

  // Create a new object with the desired structure
  return {
    id: product.id,
    name: product.name,
    unitInfo: {
      id: unitInfo.id,
      name: unitInfo.name,
    },
    price: product.price,
  };
});

// console.log(result);