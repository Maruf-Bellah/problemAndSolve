// convert radian to degree

function radian_to_degree(radian) {
  let pi = Math.PI;
  return radian * (180 / pi);
}

// console.log(radian_to_degree(0.7853981633974483));

let programingLanguage = ["PHP", "Rubi", "JavaScript", "Python", "C#", "C++"];

function checkLanguag(programingLanguage) {
  for (let i = 0; i < programingLanguage.length; i++) {
    let check = programingLanguage[i];
    if (check === "JavaScript") {
      console.log(check);
    }
  }
}

// checkLanguag(programingLanguage);
// console.log(show);

let isBesFriend = {
  name: "Tom",
  friend: "John",
};

let isBesFriend2 = {
  name: "John",
  friend: "Rock",
};

console.log(isBesFriend.friend === isBesFriend2.name);

function test() {
  if (isBesFriend.friend === isBesFriend2.name) {
    console.log(isBesFriend);
  }
}
test();

// for(let i = 50; i > 0; i--){
//     console.log(i);
// }

for (let i = 0; i <= 10; i++) {
//   console.log(i);
}

