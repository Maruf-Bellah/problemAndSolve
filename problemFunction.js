

// recurtion মানে একটা function এর মধ্যে ঐ function কে বার বার কল করা কে recurtion বলে ==========


function sum(i){
    if(i == 1){
        return i;
    }
    return i + sum(i-1);
  };
  
  let result = sum(6);
  // console.log(result);
  