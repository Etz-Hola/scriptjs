console.log("Helo world");

// FUNCTIONS DECLERATION

function sum(number) {
    // console.log('we are here today');
    return number * number
}

// FUNCTIONS CALL
const result = sum(5)
console.log(result);



function sum2(numb) {
    return numb + numb
}
const result2 = sum2(15);
console.log(result2);


function sum3() {
    return 9 +10
}
console.log(sum3()); 






// FUNCTION AND INVOKING



// FUNCTION DECLARATION
function name(){
    // statement
}

// Example 1
function sayHi(name) {
    console.log(`Hello ${name}`);
}
sayHi("Qadir")
sayHi("Suprem")
sayHi("kojj")
sayHi("Ali")
sayHi("Mutakabiru")
sayHi("S O J")

// Example 2
function add(a,b) {
    return a + b
}
const sum6 = add(5,6)
console.log((sum6));


// Example 3
function test() {
    console.log(3);
    return true
}
const bool = test()
console.log( (bool));


// Example 4
function sum2(num1,num2 = 0) {
    return num1 + num2
}
console.log(sum2 (7));

// OR

function sum3(c, d) {
    if (d === undefined) {
        return c + c;
    }
}
console.log(sum3(8));






// function expression
const name2 = function() {
    // statement
}


const divided = function(f, g) {
    return f / g
}  
const result3 = divided(50, 10)
console.log(result2)





// Arrow functions
const name3 = () => {
    // statement
}

// const yes = (tutor, student) 
//     tutor("Mr Nahim", "is thr tutor")
//     student("mr Daodu", "part of thr cohort") => {
//          return tutor + student
//     }
//     cons
     
const sentence = (tutor, student) => {
const tutor1 = "naheam" ;
const tutor2 = "lagbaja" ;
const student1 = "Daodu" ;
const student2 = "Dada" ;
return  `Mr ${tutor1} is the tutor, while mr.${student2} is part of the cohort`;
}
console.log (sentence());
