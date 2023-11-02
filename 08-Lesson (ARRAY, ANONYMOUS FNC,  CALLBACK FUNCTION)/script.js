// *************************************ARRAY****************************************************
// console.log("Here we go");

const nested2 = [[1,2], [3,4], [5,6]]
const newArr = nested2[0][1]
console.log(newArr);
console.log(nested2.length);

const cohorts = [
  "Ola",
  "ShallyPoppy",
  "Kanaz",
  "Supreme",
  "Muaz",
  "Rocco",
  "Muhammads",
];

// console.log(cohorts);
// console.log(typeof cohorts);

// To view/select element at position 2
// console.log(cohorts[2]);

// To replace element at position 1
const replaceEl = (cohorts[1] = "Nasihudeen");
console.log(replaceEl);
console.log(typeof replaceEl);

//To add new element to last index of an array.
cohorts[7] = "Lagbaja";
console.log(cohorts);

// Total count of elements in an array (.length PROPERTY)
console.log(cohorts.length);

// Array can store elements of any data type
const arr = [
  "Banana",
  10000,
  { name: "Bala Blu", age: 80 },
  function name() {
    alert("Boooooooooooooom 😉😉");
  },
];

console.log(arr);


// To LOOP through an array  (ES5 Method)
for (let i = 0; i < cohorts.length; i++) {
    console.log(i, cohorts[i]);
}

// OR  

// (ES6 Method)
for (const cohort of cohorts) {
    console.log(cohort);
}


cohorts.forEach((names) => {
  console.log(names.toUpperCase());
})

//***************************************************************************** */
const student = ['Yemi', 'Sola', 'Grace', 'Maryam', 'Femi', 'Bola'];
console.log(student);


// ***********************push() METHOD ***************************
// To add a new element to the end of an array 
const pushed = student.push('Biola', 'Dada');

console.log(pushed); //To bring the new array length
console.log(student);


// *************************pop() METHOD ***************************
// To remove the last element of an array 
const number = [3, 5, 2, 1, 9, 0, 6];
console.log(number);

const popped = number.pop(); // To save the removed element in a variable
console.log(popped);  //To view the removed element
console.log(number);

student.push(popped); //Pushing the popped element from an array to a different array
console.log(student);


// ***********************shift() METHOD //inverse of pop()***************************
//To remove the first element of an array
const colors = ['Blue', 'Yellow', 'Black', 'Green']
console.log(colors);

const remEl = colors.shift(); // To save the removed element in a variable
console.log(colors);
console.log(remEl);//To view the removed element


//************************** unshift() //inverse of push()***************************
//To add a new element to the beginning position of an array
const parties = ['PDP', 'APGA', 'ACCORD', 'APC'];
console.log(parties);
const newL = parties.unshift('LP'); //To save the new array length in a variable

console.log(parties);
console.log(newL); 


//************************** splice() method ***************************
//It allows to add element or values into array
//It usually take 3 parameters.
//The first parameter determines where the new elements are placed
//The second parameter determines the number of elements you want to delete after the new element has been placed
//The third parameter represents the element you wish to add

const foods = ['Rice', 'Beans', 'Amala', 'Semo', 'Eba', 'Iyan'];
console.log(foods);   //['Rice', 'Beans', 'Amala', 'Semo', 'Eba', 'Iyan']
foods.splice(3, 0, 'Tuwo', 'Yam')
console.log(foods);   //['Rice', 'Beans', 'Amala', 'Tuwo', 'Yam', 'Semo', 'Eba', 'Iyan']

// (When 1 Parameter is used)
//To remove all the elements starting from an index position 
const wears = ['Gucci', 'D&G', 'Amani', 'Versace', 'Nike']
console.log(wears);   //['Gucci', 'D&G', 'Amani', 'Versace', 'Nike']
wears.splice(2);
console.log(wears);   // ['Gucci', 'D&G']

// (When 2 Parameters are used)
//To remove elements starting from an index position and number of elements to delete altogether
const places = ['Oyo', 'Osun', 'Ibadan', 'Lagos', 'Ilorin']
console.log(places);    //['Oyo', 'Osun', 'Ibadan', 'Lagos', 'Ilorin']
places.splice(2, 1);
console.log(places);    //['Oyo', 'Osun', 'Lagos', 'Ilorin']




// ********************* slice() ***************************
// It returns a new array that contains elements from a certain point (excluding element at the position of the 2nd parameter input)
//First parameter is important for where to start from
//Second parameter is where to end but excluding element at the index position (When not used, it slices the rest of the elements)
const male = ['Daodu', 'Gbojita', 'Gbogunmi', 'Ogundiji', 'Baba Amoye', 'Afunnimawobe'];
console.log(male);    //['Daodu', 'Gbojita', 'Gbogunmi', 'Ogundiji', 'Baba Amoye', 'Afunnimawobe']

const newString = 'Adeyemi'
console.log(newString.length);
const slicedString = newString.slice(1,4)
console.log(slicedString);

const warriors = male.slice(1, 4);
console.log(warriors);  //['Gbojita', 'Gbogunmi', 'Ogundiji']

const stakeHolders = male.slice(4);
console.log(stakeHolders);  //['Baba Amoye', 'Afunnimawobe']
        // OR (Using negative parameter)
const stakeHolders2 = male.slice(-2); //Start counting from the last element(-1)
console.log(stakeHolders2);   //['Baba Amoye', 'Afunnimawobe']




// ******************* .toString() METHOD ---- CONVERT ARRAY TO STRING 
const string = male.toString();
console.log(string);    //Daodu,Gbojita,Gbogunmi,Ogundiji,Baba Amoye,Afunnimawobe




// **************************** .includes()
// Used to return boolean value to check if it includes an element 
const blean1 = male.includes("Dadu")
console.log(blean1); //false
const blean2 = male.includes("Gbogunmi")
console.log(blean2); //true




// *********************** .sort()
//It sorts the elements of an array and returns the sorted array in alphabetical order
male.sort();
console.log(male);




// ************************ .indexOf()
// It is used to search or find the index of the first occurence of a specified element in an array. 
//It searches the array from the beginning to the end and returns the first occurence of the specified element
//If the element is not found, it returns -1

//It takes 2 parameters.
//The first parameter is element you want to search
//The second parameter is at which index position you want to start from
const numb = [1, 2, 4, 9, 1, 4, 2, 9, 8, 7, 12, 20, 11, 1, 2];
console.log(numb);

const index1 = numb.indexOf(2,8)
console.log(index1);



// **************************** .lastIndexOf()
//It starts searching from the end to the beginning
const lstIndex = numb.lastIndexOf(4, numb.length);
console.log(lstIndex);
const lstIndex2 = numb.lastIndexOf(41, numb.length);
console.log(lstIndex2);





// *************** forEach FUNCTION/METHOD *****************
//It is the most used method of array. 
//It performs an action for each elements of an array.
//You can use forEach() to either console.log() sth, or change sth, or sum sth up or do sth when you don't need the array back
//We use it when we want to do sth on each elements of the array.
//It allows a callback function that will allow it to change the original array

const names = ['Shola', 'Bola', 'Tola'];

// ES6 for of loop METHOD 
for (const name of names) {
  console.log(name);
}

// ES5 for loop METHOD 
for (let i = 0; i < names.length; i++) {
  console.log(i, names[i]);
}


//******************ANONYMOUS FUNCTION ************
// forEach() syntax
//It contains an anonymous function----- () => {}

names.forEach(function() {});
  // OR 
names.forEach(() => {});


names.forEach((value, i, arr) => {  //The 'i' and 'arr' are optional. Any of the two can be used with value or altogether
  console.log(value);
  // console.log(i);
  // console.log(arr);
}); 



//******************CALLBACK FUNCTION *************
/* A callback function is a function passed into another function as an argument, 
 which is then invoked inside the outer function to complete some kind of routine or action. */
const fnc = (value, i, arr) => {  //The 'i' and 'arr' are optional. Any of the two can be used with value or altogether
  console.log(value);
  // console.log(i);
  // console.log(arr);
}; 
names.forEach(fnc);

// EXAMPLE
let totalVal = 0;
const trns = [42, 45, 26, 4, 13, 16];
trns.forEach((trn) => {
  console.log(totalVal, (totalVal += trn), trn)
  //  totalVal+=trn
});

console.log(totalVal);
//EXAMPLE
names.forEach((name) => console.log(`Congratulations ${name}, you will be representing the team in the UK next month`));




// ************************* MAP METHOD ********************
// It is similar to forEach method. Also accepts up to 3 arguments
// It allocates memory in all data stored and returns values
//forEach method allows a callback function that will allow it to change the original array, whereas MAP method will instead return a new array while the original one is still in its state or intact


// EXAMPLE
const inventory = [
  {name: 'Rice', price: 4200},
  {name: 'Beans', price: 5200},
  {name: 'Small Chop', price: 1000},
  {name: 'Yam', price: 500},
  {name: 'Garri', price: 1200}
];

// inventory.map((value) => {
//   // console.log(value.price);
//   // console.log(value.name);
// });

const prices = inventory.map((value) => {
  return value.price
});
console.log(prices);    //[4200, 5200, 1000, 500, 1200]

const commodities = inventory.map((value) => value.name);
console.log(commodities); // ['Rice', 'Beans', 'Small Chop', 'Yam', 'Garri']


const arrTests = [3, 5, 6, 7, 9]

const solvedArr = arrTests.map((arrTest) => {
  return arrTest + 5
})
console.log(solvedArr);


//****************** filter() METHOD  ******************
//Shows the output in arrays
//Filter the positive from negative
const numbers = [-20, -45, 43, 30, -1, 23, 34, -50, 44, -75];
const negative = numbers.filter((number) => number < 0);
console.log(negative);  // [-20, -45, -1, -50, -75]

const positive = numbers.filter((number) => number > 0);
console.log(positive);  //[43, 30, 23, 34, 44]

//          OR 
// CLASSWORK (It is complex with for loop)

let negNums = [];

for (let i = 0; i<numbers.length; i++) {
  if(numbers[i]<0) {
    negNums.push(numbers[i]);
  }
} 
console.log(negNums);

// EXAMPLE 
//Employees that are greater than 60 and spent over 35yrs in  service should retire
const employeesData = [
  {name: "Adekola", age: 2023-1960, yearsSpent: 23},
  {name: "Wale", age: 2023-1970, yearsSpent: 10},
  {name: "Otedola", age: 2023-1980, yearsSpent: 20},
  {name: "Dangote", age: 2023-1963, yearsSpent: 15},
  {name: "Akosi", age: 2023-1980, yearsSpent: 35},
  {name: "Mutula", age: 2023-1981, yearsSpent: 10},
];

const toRetire = employeesData.filter((employee) => {
  if (employee.age >= 60 || employee.yearsSpent >= 35) {
    return (employee);
  }
})
console.log(toRetire); //All emploeesData to retire     //[{name: "Adekola", age: 63, yearsSpent: 23}, {name: "Dangote", age: 60, yearsSpent: 15}, {name: "Akosi", age: 43, "yearsSpent": 35}]

const employeesToRetired = toRetire.map (employee => employee.name)  //To save the names in an array

//To console.log the employees to retire in an array stored
console.log(employeesToRetired);

employeesToRetired.forEach((retiredEmployee) => {
  console.log(`Hey ${retiredEmployee}, congratulations on your retirement, yopur pension will begin asap.`)
});




// ****************** find() METHOD 
//It returns the first value that satisfies the condition and it also takes callback function

//EXAMPLE
const num = [1, 2, 4, 2, 5, 6, 3, 10, 5];
const lessThan3 = num.find((value) => value < 3); //First value that is less than 3
console.log(lessThan3);     //1


// EXAMPLE
const animals = ['Cat', 'Dog', 'Cow', 'Ram', 'Goat', 'Lizard', 'Giraffe', 'Donkey', 'Duck'];
const rslt = animals.find((animal) => animal.startsWith('D')); //First animal that starts with 'D'
console.log(rslt);    //Dog

// EXAMPLE 
const rslt2 = animals.find((animal) => {
  return animal.startsWith('R')
});
console.log(rslt2);   //Ram




//****************** some() METHOD
//It also takes callback function
//It tests whether at least one element passes the test implemented by the provided function.
//It returns boolean value and cannot modify the array.

const array = [1, 2, 3, 4, 5];
console.log(array.some((el) => el > 3));    //true




// *********** every()
//It checks if all the elements passes the test provided in the function
console.log(array.every(el => el > 5)); //false




//************** reduce()
//This iterates all the elements in an array and computes them into a single value
//It takes 2 arguments.
/*First argument is the callback function
    The callback function contains the accumulator and current value
    Accumulator is same as initial value 
    current value is each element in the array*/
//Second argument is the initial value


//******Syntax

/* 
let initialValue = 0;

array.reduce((accumulator, currentValue) => {
  return accumulator += currentvalue
}, initialValue); 
*/

// EXAMPLE
let initVal = 5;
const priceList = [200, 400, 100, 350, 1040, 450];

// const total = priceList.reduce((accm, currVal) => {
//   return accm += currVal
// }, 0)

// console.log(total);

const total = priceList.reduce((accm, curVal) => {
  // console.log(accm);
  // console.log(curVal);
  return accm += curVal;
}, initVal);

console.log(total);


// EXAMPLE
const nums = [-20, -45, 43, 30, -1, 23, 34, -50, 44, -75];
const totalTrns = nums.reduce((accum, currentVal) => {
  return accum += currentVal;
}, 0);

console.log(totalTrns);




//*********** concat
//It joins array together
const alphabet = ['A', 'B', 'C', 'D'];
const numbers$ = [1, 2, 3, 4, 5];

const numb$alpha = alphabet.concat(numbers$);
console.log(numb$alpha);

const numbnAlph = [...alphabet, ...numbers$]
console.log(numbnAlph);

///////////////////////////////////////////************************* */
const theCalledFn = () => {
  console.log('callback Function Test');
}

const fn2 = (calledBack) => {
  return calledBack()    //theCalledFn()
}

fn2(theCalledFn)
// console.log(var1);


// const fn2 = ()=> {

// }
