// convert radian to degree


function radian_to_degree(radian){
    let pi = Math.PI;
    return radian * (180/pi);
}

// console.log(radian_to_degree(0.7853981633974483));

let programingLanguage= ['PHP', 'Rubi', 'JavaScript','Python', 'C#' , 'C++'];

function checkLanguag(programingLanguage){
    for(let i = 0; i < programingLanguage.length; i++){
        let check = programingLanguage[i];
        if(check === "JavaScript"){
            console.log(check);
        }
    }
}

checkLanguag(programingLanguage);
// console.log(show);