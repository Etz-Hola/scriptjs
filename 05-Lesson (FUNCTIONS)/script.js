
console.log('Hello World');


// *********************************************************************** FUNCTIONS *****************************************************************************
function name(params) {
    statement
}


//FUNCTION DECLARATION
function sum(number) {
    return number * number;
}


//FUNCTION CALLED
const result = sum(5);
console.log(result);


// *********************DECLARATION AND INVOKING FUNCTION***************************
// *******EXAMPLE*******
function sum2(numb) {
    return numb + numb;
}

const result2= sum2(15);
console.log(result2);


// ******EXAMPLE*********
function sum3() {
    return 9 + 5;
}
console.log(sum3());


// ********************* DECLARATION AND INVOKING FUNCTION***************************

// /**** 1. FUNCTION DECLARATION (ES5)
function name() {
    // statement
}

// /*****  2. FUNCTION EXPRESSION (ES5)
const name2 = function() {
    // statement 
}


//******  3. ARROW FUNCTION  (ES6)
const name3 = () => {
    // statement 
}



// /***************** A. FUNCTION DECLARATION (ES5)
// **************EXAMPLE 1
function sayHi(name) {
    console.log(`Hello ${name}`);
}

sayHi("Quadri");
sayHi("Supreme");
sayHi("Bola");
sayHi("Jude");
sayHi("When");
sayHi("Rice");


// **************EXAMPLE 2
function add(a, b) {
    return a + b;
}

const sum4 = add(5,6);
console.log(sum4);


// **************EXAMPLE 3
function test() {
    return true;
}
const bool = test();
console.log(bool);



// **************EXAMPLE 4
function sum2(num1, num2) {
    return num1 + num2;
}
console.log(sum(7, 2));

        // OR

function sum2(num1, num2 = 2) {
    return num1 + num2;
}
console.log(sum(7));

        // OR

function sum5(c, d) {
    if (d === undefined) {
        return c + c;
    }
}
console.log(sum5(8));


//******************** B. FUNCTION EXPRESSION (ES5)
//************  EXAMPLE 1
const ade = function(a, b) {
    return a + b;
}

const bobo = ade(5, 6);
console.log(bobo);


//************* EXAMPLE 2
const summed = function (x, y) {
    return x / y;
}

const answer = summed(18, 3);
console.log(answer);




// ********************** C. ARROW FUNCTION (ES6)
//********* */ EXAMPLE
const cohorts = (tutor, student) => {
    const tutor1 = 'Lagbaja';
    const tutor2 = 'Naheem';
    const student1 = 'Daodu';
    const student2 = 'Dada';
    return(`Mr. ${tutor} is the tutor, while Mr. ${student} is part of the cohorts`);
}

const fullCohorts = cohorts("Naheem", "Daodu");
console.log(fullCohorts);

                // OR

const sentence = (tutor, student) => {
    const tutor1 = 'Lagbaja';
    const tutor2 = 'Naheem';
    const student1 = 'Daodu';
    const student2 = 'Dada';
    return console.log(`Mr. ${tutor2} is the tutor, while Mr. ${student1} is part of the cohorts`);
}

sentence();


const tester = () => {
    console.log(3+5);
}

tester()

