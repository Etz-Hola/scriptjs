console.log("Hello guys🎉🤳🐱‍👤✨🐱‍👓🐱‍💻🐱‍🐉😉🤦‍♂️🎁🐱‍🐉");

//***************************** if/else *********************

const eligibleAge = 6;

if (eligibleAge > 18) {
    console.log("You are eligible to vote")
} else if (eligibleAge === 18) {
    console.log("Congratulations Muhammed, you just turned 18");
} else {
    console.log("Ooops, come back next year")
}
 

//******************** EXAMPLE 2 **********************
const firstName = "Kenny";
const job = "Mechanic";

if (job === "Mechanic") {
    console.log(`${firstName} is a good ${job}`)
} else if (job === "Driver") {
    console.log(`${firstName} is an expert driver`)
} else if (job === "Teacher") {
    console.log(`${firstName} is a professional ${job}`)
} else if (job === "Carpenter") {
    console.log(`${firstName} is good and expert ${job}`)
} else if (job === "Software Engineer") {
    console.log(`${firstName} is good and expert ${job}`)
} else {
    console.log('You are a lazy man');
}


//***************** CLASSWORK *******************
const theTime = 11;

if (theTime < 10) {
    console.log("Good Morning");    
} else if (theTime > 8) {
    console.log("Good day");
} else {
    console.log("Good evening");
}


// ********************* TRUTHY AND FALSY VALUES *********************************


//**************FALSY VALUES
if (false) {
    console.log('TRUE');
} else {
    console.log('FALSE');
}

if (0) {
    console.log('TRUE');
} else {
    console.log('FALSE');
}

if ('') {
    console.log('TRUE');
} else {
    console.log('FALSE');
}

if ("") {
    console.log('TRUE');
} else {
    console.log('FALSE');
}

if (``) {
    console.log('TRUE');
} else {
    console.log('FALSE');
}

if (null) {
    console.log('TRUE');
} else {
    console.log('FALSE');
}

if (NaN) {
    console.log('TRUE');
} else {
    console.log('FALSE');
}

if (undefined) {
    console.log('TRUE');
} else {
    console.log('FALSE');
}


//***************** TRUTHY VALUES 
if ("true") {
    console.log('TRUE');
} else {
    console.log('FALSE');
}

if ("0") {
    console.log('TRUE');
} else {
    console.log('FALSE');
}

if ({}) {
    console.log('TRUE');
} else {
    console.log('FALSE');
}

if ([]) {
    console.log('TRUE');
} else {
    console.log('FALSE');
}

if (function () {}) {
    console.log('TRUE');
} else {
    console.log('FALSE');
}

if (5) {
    console.log('TRUE');
} else {
    console.log('FALSE');
}

//************************** EXAMPLE *****************
const dogs = 3;
if (dogs > "0") {
    console.log(`You have ${dogs} dogs`);
} else {
    console.log(`You have no dogs`);
}


// **************************************************** SWITCH STATEMENT ***************************************
const superHero = 'Iron Man';
switch (superHero) {
    case 'Iron Man': 
    console.log('I am Iron Man...');
        break;
    case 'Thor':
        console.log('That is my hammer');
        break;
    case 'Captain America': console.log('Never give up');
        break;
    case 'Black Widow': console.log('One shot, One kill');
        break;
    default: console.log('Enter a valid Super Hero name');
        break;
}

// ********************** CLASSWORK *************************
 const weekDays = 'gfhjk';
 switch (weekDays) {
    case 'Monday': console.log("The day is Monday");
        break;
    case 'Tuesday': console.log("The day is Tuesday");
        break;
    case 'Wednesday': console.log("The day is Wednesday");
        break;
    case 'Thursday': console.log("The day is Thursday");
        break;
    case 'Friday': console.log("The day is Friday");
        break;
    case 'Saturday': console.log("The day is Saturday");
        break;
    case 'Sunday': console.log("The day is Sunday");
        break;
    default: console.log( `${weekDays} is not among the days of the week.` );
 }


 //***************** LOGICAL OPERATORS **************************
 const age = 19;
 const isCool = true;

 if (isCool && age > 18) {
    console.log('You may enter');
 } else {
    console.log('You cannot enter...');
 }



// if-else statement 
//  const num = 7
//  if (num < 6) {
//     console.log("Less than 6");
//  } else if (num < 9) {
//     console.log("Less than 9 but greater than 6");
//  } else if (num <= 12) {
//     console.log("Equal to 12 or Less than 12 but greater than 6 and 9");
//  } else {
//     console.log(" Greater than 12");
//  }


//Ternary Operator
//  num < 6? console.log("Less than 6")
//  :(num < 9)? console.log("Less than 9 but greater than 6")
//  :(num <= 12)? console.log("Equal to 12 or Less than 12 but greater than 6 and 9")
//  : console.log(" Greater than 12");


// switch statement 
const num = 10
 switch (true) {
    case num < 6: console.log("Less than 6")
        break;
    case (num < 9 || num>11): console.log("Less than 9 but greater than 6")
        break;
    case num <= 12: console.log("Equal to 12 or Less than 12 but greater than 6 and 9")
        break;
    default:console.log(" Greater than 12");
        break;
 }