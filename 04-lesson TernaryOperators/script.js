console.log("Yelo")

// TERNARY OPERATORS
const age = 18;

// if (age > 18) {
//     console.log('You can drive')
// }else {
//     console.log("You are  an under age")
// }

age >= 18 ?console.log("You can drive") :console.log("You are an under ade")


const gender = "Female";

// if (gender > "male") {
//     console.log('Ola is a boy')
// }else {
//     console.log("Bola is a girl")
// }

gender === "male"? console.log("Musa is a biy ") :console.log("Lola is a girl")


// LOOPING

// WHILE LOOP
let index = 0;

while (index < 10) {
    console.log(index);
    index++;
    
}



let loaing = 0;

while (loaing < 100) {
    console.log('website is still loading');
    loaing +=3;
}



// FOR LOOP 

for (let i = 2; i < 10; i++) {
    console.log(i);
}

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }


// const cohorts = ['kenny', 'suprem', 'ola','kik', 'ola', 'mm', 'roco', 'nas']
// for (let cohort of cohorts) {
//     // console.log(`Hello Mr ${cohort}`);
//     if (cohort === 'mm') {
//         console.log(`ola`);
//     }
    
// }



const cohorts = ['kenny', 'suprem', 'ola','kik', 'ola', 'mm', 'roco', 'nas']
for (let cohort of cohorts) {
    if(cohort === "ola") {
        console.log(`hello mr ${cohort}`);
    }
    // console.log(`Hello of ${cohorts}`)  
}


