// একটা string থাকবে এই string এর মধ্যে অক্ষর কয় করে আছে তা দেখাতে হবে 

let shawon = 'amr sonar bangla';

let emtyObj = {};
for(let show of shawon){
    // console.log(show);

    if(emtyObj[show]){
        emtyObj[show]++
    }else {
        emtyObj[show] = 1
    }
    delete emtyObj[' '];
}
console.log(emtyObj);