console.log("Hello Array In Details");

const cohorts = [
  "Ola",
  "Kanas",
  "Supreme",
  "KennyMas",
  "Muhaz",
  "Roco",
  "Muhammad",
];

console.log(cohorts.length);

console.log(cohorts);
console.log(typeof cohorts);
console.log(cohorts[2]);

// replacement of element in array
const replaceEl = (cohorts[1] = "ShallyPoppy");
console.log(replaceEl);
console.log(typeof replaceEl);

// Add a new element but here it is only possible at the last index position
cohorts[7] = "Lagbaja";
console.log(cohorts);

// the total c0unt of element in array is called lenght

// array can stor elements/data of any type
const arr = [
  "Banana",
  10000,
  { name: "Bala Blu", age: 80 },
  function () {
    alert: "Booooooooooom😀";
  },
];

console.log(arr);

// for (let i =0; i < cohorts.length; i++){
// console.log(i, cohorts[i]);
// }

for (const cohort of cohorts) {
  console.log(cohort);
}
// ARRAY method
// Push()
// Push will help to add to the last list of element of an array
//  it mutable, it work at the end of the element
const students = ["Titi", "Lola", "Busola", "Kola", "Fola", "Shola"];
console.log(students);

console.log(students.push("dada", "Latifa"));

const psh = students.push("dada", "Latifa");
console.log(psh);

// pop()
// pop will help to remove from the last list element of an array
//it mutable
const numbers = ["10", "20", "30", "40", "50"];
console.log(numbers);

const removedEl = numbers.pop();

console.log(numbers);
console.log(removedEl);

students.push(removedEl);
console.log(students);

//shift()
// shift work like pop, but it will remove from start and re arange them acordingly
const colors = ["Yellow", "blue", "Black", "Green"];
console.log(colors);
const remEl = colors.shift();
console.log(colors);
console.log(remEl);

//unshift()
//it like a sister to push, IT IS USE TO ADD A NEW ELEMENT TO THE BIGINING OF AN ARRAY and re arange them accordinglly
const parties = ["PDP", "APGA", "ACCORD", "APC"];
console.log(parties);

const newL = parties.unshift("LP");
console.log(parties);

//splice()
//splice allow to add new element or new value in an array, and it take 3 paramiter,
//the 1st paramiter determing where the new element are place,
//the 2nd paramiter determing how many element you want to dellet after the new element as been place
//the 3rd paramiter will be the element you want to add, the 3r element repricent the condition

const foods = ["Eba", "Iyan", "Semo", "Amala", "Beans", "Rice"];
console.log(foods);
foods.splice(3, 1, "Tuwo", "Yam");
console.log(foods);

const wears = ["Gucci", "D&G", "Amani", "Versace", "Nike"];
console.log(wears);
wears.splice(1, 3);
console.log(wears);

//slice()
//it retun a new array that contain element from a certain point
//it can take two parameter and the second parameter is optional
const male = [
  "Daodu",
  "Ogundiji",
  "Gbotija",
  "Gbogunmi",
  "Baba Amoye",
  "Afunnimawobe",
];
console.log(male);
const warriors = male.slice(1, 4);
console.log(warriors);

//it extractin from somewhere with no endin
const elite = male.slice(1);
console.log(elite);

const stakeholders = male.slice(-2);
console.log(stakeholders);

//to string
//this to covert array to string
const string = male.toString();
console.log(string);

//includes
//it is use to check the boolean value
const blean1 = male.includes(1);
console.log(blean1); // false

const blean2 = male.includes("Daodu");
console.log(blean2); // True

//SORT()
//it will sort the element of an array , and return the sorted array in alphabetical other
male.sort();
console.log(male);

//indexOf()
//this is use to serch or find the index of (the end to the begining) the first occurrence of a specified element in an array.
//it serch the array from the beginig to the end and return the first ocurent of the specified element.
//if the element is not found, it will return negative 1 (-1)
//it  take 2 parameter, the 1st parameter is thr serch element (the element we want to serch), the 2nd identify from which index you want to start from
const number = [1, 2, 4, 9, 1, 4, 2, 9, 8, 7, 12, 20, 11, 1];
console.log(number);
const search = number.indexOf(2, 0);
console.log(search);

//lastIndexOf
//this is use to serch or find the index from (the end to the begining) of the last occurrence of a specified element in an array.
//it serch the array from the end to the begining and return the first ocurent of the specified element.
//if the element is not found, it will return negative 1 (-1)
//it  take 2 parameter, the 1st parameter is thr serch element (the element we want to serch), the 2nd identify from which index you want to start from
const Is1 = number.lastIndexOf(4, number.length);
console.log(Is1);

const Is = number.lastIndexOf(41, number.length);
console.log(Is);

//forEach()
//this forEach methord, is the most use method in array, it perform an action for each element in an array.

const names = ["Shola", "Bola", "Tola"];

//ES6 for loop
// for (const name of names) {
//   console.log(name);
// }

//ES5 for loop
// for (let index =0; index < names.length; index++){
// console.log(index, names[index]);
// }

//SYNTAX

// ES5 funtion
// names.forEach(function () {});

// CALL BACK FUNCTION is a funtion that is been pass as an agument for another funtion and it is exicuted after that fuction conpleted it task

const fnc = (value, i, arr) => {
  console.log(value);
  // console.log(i)
  // console.log(arr)
};

//we can use forEach method to console.log something, or change something or some something up, or do something wen you don't need array back.
//it allow a call back funtion that will allow you to change origina arry.

// const forE = names.forEach(fnc);
console.log(names.forEach(fnc));

let initBal = 0;
const trns = [42, 45, 26, 4, 13, 16];

trns.forEach((trn) => console.log((initBal += trn)));

names.forEach((name) =>
  console.log(
    `Congratulation ${name}, you will be representing the team in the UK next month`
  )
);

//MAP METHOD()
//this alocate memory in all data stord and returm value.
//this will insted return the new array while the origina one is still intact

const inventory = [
  { name: "Rice", price: 4200 },
  { name: "Beans", price: 2500 },
  { name: "Small Chop", price: 1000 },
  { name: "Yam", price: 500 },
  { name: "Garri", price: 1200 },
];

inventory.map((value, i) => {
  console.log(value.price);
  console.log(value.name);
});

const prices = inventory.map((value) => value.price);
console.log(prices);

const commodities = inventory.map((value) => value.name);
console.log(commodities);

//FILTER METHORD ()

const nums = [-20, -45, 43, 30, -1, 23, 34, -50, 44, -75];
const negNums = nums.filter((num) => num < 0);
console.log(negNums);
const posNums = nums.filter((num) => num > 0);
console.log(posNums);

//OR

//complex
for (let i = 0; i < nums.concatlenght; i++) {
  // console.log(nums[i]);
  if (nums[i] < 0) {
    let negativeNums = [];

    console.assertlog(negativeNums.push(nums[i]));
    console.log(negativeNums);
  }
}

const employeesData = [
  {name:"Adekola", age: 2023 - 1960, yearsSpent:23}, 
  {name:"Wale", age: 2023 - 1970 , yearsSpent:10}, 
  {name:"Otedola", age: 2023 - 1980, yearsSpent:20}, 
  {name:"Dangota", age: 2023 -1983, yearsSpent:15}, 
  {name:"Akosi", age: 2023 -1980, yearsSpent:35}, 
  {name:"Mutula", age: 2023 -1957, yearsSpent:10}, 
];

  const toRetire = employeesData.filter((employee) => {
    if(employee.age >= 60 || employee.yearsSpent >= 35) 
    {
      return employee;
    }
  });
  console.log(toRetire);


  const employeesToRetired = toRetire.map(employee => {
    return employee.name;
  });

  console.log(employeesToRetired);

  employeesToRetired.forEach(employee => {
    console.log(`Hey ${employee}, Congratulation you will be representing the team in the UK next month.`);
  });


  //find() method 
  //find methord return the first value that satisfy the condition and it also take call back funtion

  const _number = [1, 2, 4, 2, 5, 6, 3, 10, 5];
  
  const result = _number.find((value) => value < 3)
  console.log(result);

  const animals = ['cat', 'Dog', 'Cow', 'Ram', 'Goat', 'Lizard', 'Giraffe', 'Donkey', 'Duck'];

  const rslt = animals.find((animal) => animal.includes ('i'))
  console.log(rslt);

  const rslt2 = animals.find((animal) => {
    return animal.startsWith ('G')
  })
  console.log(rslt2);



// some()
//it also takes call back funtion, and it test maybe at list one element passes the test inplimented by the provided function
//it return boolian value and can not modify the array

const array = [1, 2, 3, 4, 5];
console.log(array.some((el) => el > 5));

//every()
//it check if all the element passes the test in the function

console.log(array.every(el => el >= 1));


//reduce()
//this iterate all the element and conpute them to a single value