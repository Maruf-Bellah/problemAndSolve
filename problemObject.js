// একটা object থাকবে তার মধ্যে falsy value দেখানো যাবে না, শুধু true value দেখাতে হবে ===============

let student = {
  name: "Sujon vai",
  age: 26,
  country: null,
  CGPA: 0,
};
let newObj = {};
for (let key in student) {
  if (student[key] !== null) {
    newObj[key] = student[key];
  }
}
// console.log(newObj);

const devs = [
  { name: "Nahid", id: 1001, team: "HisabNikash" },
  { name: "Sujon", id: 1002, team: "HisabNikash" },
  { name: "Akbar", id: 1003, team: "HisabNikash" }
];

// console.log(devs);
let show = {};
for(let m in devs){
  // console.log(devs[m]);
  if(devs[m].id == true){
    console.log(devs[m].name);
    // return false;
  }else if(devs[m] == true && devs[m] == true){
    console.log(devs[m].name);
  }
  // show = show + devs[m].id;
  // console.log(show);
}
// console.log(show);