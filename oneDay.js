// addition ===========================

let maruf = 10;
let kawser = 30;

let thereAddition = maruf + kawser;
// console.log(thereAddition +" " + "Addition");

// subtraction ==========================

let sakil = 50;
let rumon = 20;

let thereSubtraction = sakil - rumon;
// console.log(thereSubtraction + ' ' + 'subtraction');


// multiplication ====================================

let shawon = 5;
let rasel = 15;

let thereMultiplication = shawon * rasel;
// console.log(thereMultiplication + ' ' + 'Multiplication');


// Division ===================================

let fatema = 50;
let pinky = 20;

let thereDivision = fatema / pinky;
// console.log(thereDivision + ' ' + 'thereDivision');


// Modulus ======================================

let rajjak = 60;
let sujon = 32;

let thereModulus = rajjak % sujon;
// console.log(thereModulus + ' ' + 'Modulus');





// ====================================================================================
// function addition 
// =====================================================================================

function additionFunction(a, b) {
    let show = a + b;
    return show;
}
// console.log(additionFunction(5,5) + ' ' + 'Addition');

function subtractionFunction(a, b) {
    let show = a - b;
    return show;
}
// console.log(subtractionFunction(10,5)+ ' ' + 'Subtraction');

function multiplicationFunction(a, b) {
    let show = a * b;
    return show;
}
// console.log(multiplicationFunction(5,9) + ' ' + 'multiplication');


function divisionFunction() {
    let a = 50;
    let b = 5;
    let c = a / b;
    return c;
}
// console.log(divisionFunction() + ' ' + 'division');


function modulusFunction(show) {
    return show;
}
let show = modulusFunction(8 % 3)
// console.log(show + ' ' + "modulus");



// dimer condition ===========================================


// let dim = 90;
// if (dim === 100) {
//     console.log("vai dimer dam onek beshi ");
// } else if (dim <= 80) {
//     console.log("vai 2 hali dim kinmu ");
// } else {
//     console.log("vai taka nai pore kinmu");
// }


// bisti te vejar condition ======================================

let age = 28;

if (age === 18 && age > 17) {
    console.log('Vai ami choto bisti te vijte parbo na ');
} else {
    console.log("ami 18 er upore vijte parbo ");
}


// boolian condition ===========================================================

let isTrue = false;

if (isTrue === true) {
    console.log('this is a true');
} else {
    console.log('this is a false');




// array ===============================================================


// sum er vitore sob array er jog fol guli 

let myArray = [1, 2,3,4,5,6,7,8,9,10];

let sum = 0;
for(let a = 0; a < myArray.length; a++){
    sum = sum + myArray[a];
}
console.log(sum);


let test = 0;
for(let i = 0; i < myArray.length; i++){
    test = test + myArray[i]
    // console.log(show);
}
console.log(test);



// ============================================================
// condition chara ekta lop chalabe and tar moddhe sob guli bejor sonkha hobe 
// =============================================================
for(let i = 0; i <= 50; i = i + 2 ){
    console.log(i);
}

