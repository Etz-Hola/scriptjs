console.log("OLA HOW FAR NOW %%%%")

// if/else
// const eligibleAge = 18;

// if (!eligibleAge >= 18) {
//     console.log('You are eligibible to vote')
// }else if (!eligibleAge === 18) {
//     console.log('Congratulation Ola you just turn out 18')
// }else {
//     console.log('Oops come back next year')
// }




const firstName = 'Qadir';
const job = "Software Engineer"

if (job === "Mechanic"){
    console.log(`${firstName} is good ${job}`)
}else if ( job === "driver") {
    console.log(`${firstName} is expert driver`)
}else if (job === "teacher" ){
    console.log(`${firstName} is a professional ${job}`)
}else if (job === "Carprnter" ){
    console.log(`${firstName} is good and expert ${job}`)
}else if (job === "Software Engineer"){
    console.log(`${firstName} is good and expert ${job}`)
}else {
    console.log('You are a lazy man')
}





// if time is less than 10am, create a "good morning", 
// if not but time is greaterthan than 8am, create a "good day" greething. 
// otherwise a "good evening"


let time = 8;
if (time < 10) {
    console.log ('goog morning');
}else if (time < 8) {
    console.log('good day');
    
}else {
    console.log ('goog evening');
}




/* TRUTHEY AND FALSY VALUES */

// TRUTHY VALUE
// if (true) {
//     console.log('TRUE');
// }else {
//     console.log('FALSE');
// }

// if ('0') {
//     console.log('TRUE');
// }else {
//     console.log('FALSE');
// }


// if ({}) {
//     console.log('TRUE');
// }else {
//     console.log('FALSE');
// }

// if ([]) {
//     console.log('TRUE');
// }else {
//     console.log('FALSE');
// }

// if (Function (), {}) {
//     console.log('TRUE');
// }else {
//     console.log('FALSE');
// }



// // FALSY VALUE
// if (0) {
//     console.log('TRUE');
// }else {
//     console.log('FALSE');
// }
// if ('') {
//     console.log('TRUE');
// }else {
//     console.log('FALSE');
// }

// if (null) {
//     console.log('TRUE');
// }else {
//     console.log('FALSE');
// }

// if (NaN) {
//     console.log('TRUE');
// }else {
//     console.log('FALSE');
// }

// if ( undefined) {
//     console.log('TRUE');
// }else {
//     console.log('FALSE');
// }


// const dogs = 5;
// if (dogs < 0) {
//     console.log(`You have ${dogs} dogs`)
// }else {
//     console.log(`You have no dog`)
// }

// const dogs = 5;
// if ('0') {
//     console.log(`You have ${dogs} dogs`)
// }else {
//     console.log(`You have no dog`)
// }




// SWITCH STATEMENT 
// const superHero = 'Iron Man'
// switch(superHero) {
//     case 'Iron Man': console.log('I am Iron Man...');
//     break;
//     case 'Thor': console.log('That is my hammer');
//     break;
//     case 'Captain American': console.log('Never give upr');
//     break;
//     case 'Black widow': console.log('One shot, One kill');
//     break
//     default: console.log('Enter a valid superhero name');
// }


const daysOfTheWeek = 'Friday'
switch(daysOfTheWeek) {
    case 'Monday': console.log('Let work');
    break;
    case 'Tuesday': console.log('let move forword');
    break;
    case 'Wednesday': console.log('leaning is very inportant');
    break;
    case 'Thursday': console.log('just want to be working');
    break
    case 'Friday': console.log('Thank God is Friday');
    break
    case 'Saturday': console.log('Let check my work for the past day');
    break
    case 'Sunday': console.log('Gonna rest for today');
    break
    default: console.log('You have entered a wrong week day..');
}


// LOGICAL OPERATORS
const age = 19
const isCool = true;

if (isCool && age > 18) {
    console.log('You may enter')
}else{
    console.log('you cannot enetr...')
}
