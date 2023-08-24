// সংখ্যা দিয়ে একটা ত্রিতুজ ===================================================

/* 
 1
 12
 123
 1234
 121345
 */

//  var n = 1;
//  for(var i = 1; i <= n ; i ++ ){
//     var m = " ";
//     for(var j = 1; j <= n + 4; j++){
//         m += j;
//         console.log(m);
//     }
//  }



// ============================================================
// condition chara ekta lop chalabe and tar moddhe sob guli bejor sonkha hobe
// =============================================================
for (let i = 1; i <= 50; i = i + 2) {
  // console.log(i);
}


function sum(i){
  if(i == i){
      return i;
  }
  return i + sum(i+1);
};

let result = sum(5);
// console.log(result);





// function great(name, callMe, amr){
//   console.log("Hi" + ' ' + name);
//   callMe()
//   amr()
// }

// function callMe(){
//   console.log("I am callBack Function");
// }

// function amr(){
//   console.log('amr sonar bangla');
// }

// great('Mauruf', callMe, amr);


// function hello() {
//   console.log(arguments[0] + arguments[1]);

// }

// hello(1,4);

// function add1(a, b) {
  
//   let add = a + b;
//   let sub = a - b;
//   add6(add, sub)
//   add5(add, sub)
  
// }
// function add2(a, b) {
  
// }
// function add3(a, b) {
  
// }
// function add4(a, b) {
  
// }
// function add5(add, sub) {
//   console.log(add, sub);
// }
// function add6( a, b) {
//   // add1(add)
//   console.log(a+b)

  
// }



// add1(10,20)

// function sawon(friend){
//   let sum = 5 + 10;
//   return friend(sum)
// };

// sawon(maruf)

// function maruf(peram){
//   console.log(peram);
// }



function addfriend(friend){
  let add = 15 + 20;
  return friend(add)
};

addfriend(akbarVai);

function akbarVai(perams){
  console.log(perams);
}