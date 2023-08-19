
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
  console.log(newObj);
  