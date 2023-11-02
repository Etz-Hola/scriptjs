console.log('Hello world');


// Arithmetic

const a = 4;
const b = 5;

let result = 0;
result = a + b
console.log(result)

result = a - b;
console.log(result);
    
result = a * b;
console.log(result)

// Comparisons Operators

const _a = 10;
const _b = 10;
console.log(_a >= _b)

const $a = 10;
const $b = 5;
console.log($a == $b)

const c = 5;
const d = 15
console.log(c <= d)

const _c = 15;
const _d = 15
console.log(_c != _d)


// STRICT EQUALITY (===)
console.log(5 === 5);
console.log(10 === '10');
console.log(30 === 31);
console.log(false === false);
console.log(false === "false");
console.log(true === 1);
console.log(0 === '');

// LOOSE EQUALITY  (==)
console.log(5 == 5);
console.log(10 == '10');
console.log(30 == 31);
console.log(false == false);
console.log(false == "false");
console.log(true == 1);
console.log('' == '0');
console.log(0 == '');


// STRICT NOT EQUALITY (!==)
const f =10;
const g = 10;
console.log ( f !== g)
console.log(30 !== 31);


// LOGICAL OPERATOR

// AND &&

console.log (true && true && true);
console.log (true && false);

// OR ||
console.log (false || false || false);
console.log (false || true || false);

// NOT !
console.log(!true)
console.log(!false)

// ASSIGNMENT OPERATOR (=  +=  -=  *=)
let number = 5;


number += 5;
console.log(number);

// number *= 5;
// console.log(number);

// number -= 5;
// console.log(number);

// number /= 5;
// console.log(number);



// let _number = 5;
// _number *= 5;
// console.log(_number)

// let $number = 5;
// $number -= 5;
// console.log($number)






// class work
// let _salary = 2500;
// _salary += 850;

// console.log(_salary);


let salary = 2500;
let moreSalary =850

let total = salary += moreSalary;
console.log(total);


// let year = 2023;
// let birth1 = 1910;

// let result1 = year -= birth1;
// console.log(result1);

let year = 2023;
year -= 1991;

console.log(year);


const thisYear = 2023;
const myAge = thisYear - 1910;
console.log(myAge)

const johnAge = 22;
const mother =2 * johnAge;
console.log(mother)


                 // CLASS WORK

// calculate the BMI of the two people, one name John and the other name Mark is equal the mass divided by the height raised to power of 2
// (1) the mass if John divided by the height of John
// (2) the mass of  mark divided by the hight of Mark
//  massMark=78 massJohn=92, hightMark=1.69 hightJohn=1.95
// (3) who as the higest mark 

           // MY SOLUTION    WRONG
// const mark = 92;
// const qui1 = 92 / 1.95
// console.log(qui1)

// const john =78;
// const qui2 = 78 / 1.6
// console.log(qui2)

// const markk = 47.17948717948718;
// const johnn = 48.75;
// console.log(markk >= johnn)

                            //SOLUTION
const massMark = 78;
const massJohn = 92;

const heightMaek =1.69;
const heightJohn =1.95;

const BMIMark = massMark / heightMaek **2;
const BMIJohn = massJohn / heightJohn **2;

console.log(BMIMark, BMIJohn)

const heighestBMI = BMIMark > BMIJohn
console.log(heighestBMI)
