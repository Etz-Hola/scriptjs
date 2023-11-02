console.log("Yello");

//************************************ TERNARY OPERATOR (? :) ***************************************
const age = 18;

if (age >= 18) {
    console.log('You can drive');
}


const age2 =18

age2 >= 18 ? console.log("You can drive") : console.log("you are an underage");


//******************* EXAMPLE 2 *********************
const gender = "male";

if (gender === "male") {
    console.log("Ola is a boy");
} else {
    console.log('Bola is a girl');
}


const gender2 = "male";

gender2 ==="male" ?console.log('Muaz is a boy') : console.log("Muaiza is a girl");



//************************************* LOOP **************************************

//******* WHILE LOOP
let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}

let loading = 0 ;
while (loading < 150) {
    console.log('Website is still loading');
    loading ++;
}


// *****************FOR LOOP
for (let kanaz = 2; kanaz < 30; kanaz+=3) {
    console.log(kanaz);;
}



// ********EXAMPLES
// for ... of 
const cohorts = ['Kenny', 'Ola', 'Ola1', 'Muhammed', 'Rocco', 'Kanaz']

for(cohort of cohorts) {
    console.log(`Hello Mr ${cohort}`);
}


for (cohort of cohorts) {
    if (cohort === 'Ola') {
        console.log(`Ola is in the list`);
    }
}


for (cohort of cohorts) {
    if (cohort === 'Rocco') {
        console.log(`${cohort} is here with the cohorts`);
    }
}


// ********ANOTHER EXAMPLE
let name = 'Director';
for (let index = 0; index < name.length; index++) {
    console.log(name.charAt(index));;     //(To write out character at a certain position)
}

/////////////////////////////////////////
const class$ = "Primary"
console.log(class$.charAt(0));
console.log(class$[0]);
console.log(class$[class$.length-7]);

