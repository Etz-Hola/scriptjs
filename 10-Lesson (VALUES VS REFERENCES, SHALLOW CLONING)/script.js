console.log('Testing');

// ************************** VALUES VS REFERENCE *********************************
//COPYING NUMBERS
let x = 1;
let y = x
x = 2;
console.log(x);
console.log(y);

//COPYING STRINGS
let firstPerson = 'Mark';
let secondPerson = firstPerson;
firstPerson = 'Austin';

console.log(firstPerson);
console.log(secondPerson);

//COPYING COMPLEX VALUES (ARRAY)
const animal = ['Goat', 'Cat', 'Ram'];
animal.push('Sheep');
console.log(animal);


//COPYING COMPLEX VALUES (OBJECT)
const person = {
    firstName: 'John',
    lastName: 'Sam'
}

const otherPerson = person;

person.firstName = 'Seyi'
console.log(person);
console.log(otherPerson);


//EQUALITY
const person1 = {
    firstName: 'Soliu'
}

const otherPerson1 = {
    firstName: 'Soliu'
}

console.log(person1 === otherPerson1);   //false

const otherPerson3 = person1;
console.log(person1 === otherPerson3);


//***************** SHALLOW CLONING OR SPREAD OPERATOR(...) ***************************
const color = ['red', 'blue', 'green', 'black'];
console.log(...color);  //red blue green black

const numbersArr = [0, 2, 1, 5, 3, 7, 4]
console.log(...numbersArr); 

const copiedColor = color;
console.log(color === copiedColor);


// EXAMPLE
//FIRST WAY: SPREAD OPERATOR
const spreadOperator = {
    firstName: "team",
    university: "Umilag",
  };
  
  const otherSp = { ...spreadOperator };
  console.log(otherSp);


// EXAMPLE
const obj1 = {a: 1, b: 2};
const obj2 = {c: 3, d:4}

console.log(obj1, obj2);

const obj3 = {...obj1, ...obj2};
console.log(obj3);

//EXAMPLE
const obj4 = {name: 'Yemi', age: 20};
const obj5 = {name: 'Supreme', location:''}

console.log(obj4, obj5);

// EXAMPLE
const names1 = ['Ade', 'Kemi', 'Bola'];
const names2 = ['Yemi', 'Biola'];
const names3 = [...names1, ...names2];
console.log(names3);

// ******************************************** SHALLOW CLONING ******************************************

// ***************** WITH SPREAD OPERATOR [...] *******************
//For both ARRAY and OBJECT

const number = [1, 2, 3, 4, 5];
const newNumber = [...number];

console.log(...number);     // 1 2 3 4 5
console.log(newNumber);     // [1, 2, 3, 4, 5]


const number2 = [1, 2, 3, 4, 5];    //Memory ID: 123ed
const copiedNumber = number2;       //Memory ID: 123ed

const newNumber2 = [...number2];    //Shallow Clone

console.log(number2 === copiedNumber);  //true
console.log(number2 === newNumber2);    //false


// ********* EXAMPLE (FOR ARRAY [])
const number5 = [1, 2, 3, 4, 5];
const copiedNumber5 = number5;

const newNumber6 = [...number5]; 
number5.push(8)       
copiedNumber5.push(6)              

console.log(number5);       // [1, 2, 3, 4, 5, 8, 6]
console.log(copiedNumber5);
console.log(newNumber6);

//********* EXAMPLE  (FOR OBJECT {})
const person5 = {
    name: 'John',
    age: 20
}
const otherPerson5 = {...person5}
person5.age = 25

console.log(person5);
console.log(otherPerson5);


// ********************* WITH .slice() ************************
//Only for array []

// ********** EXAMPLE
const numbs = [1, 2, 3, 4, 5, 6, 7];
const cpyNumbs = numbs;

const newNumbs = numbs.slice();     //Shallow Clone
numbs.push(8);

console.log(numbs);
console.log(cpyNumbs);
console.log(newNumbs);


// ******************* WITH Object.assign() ************************
//Only works for Object {}

const myGuy = {
    name: 'Kanas',
    color: 'red',
    age: 20
}
const newRealG = Object.assign({}, myGuy);
myGuy.name = "Muaz";

console.log(myGuy);
console.log(newRealG);




//******************************************** DEEP CLONING ******************************************
//Testing for nested object which changes for shallow cloning
const details = {
    firstName: 'Rocco',
    car: {
        brand: 'Benz',
        color: 'blue',
        wheel: 4
    }
}

const newDetails = {...details};  //With shallow Clone
newDetails.firstName = 'Roqib';
newDetails.car.color = 'white'  //It changes the the nested object

console.log(details);
console.log(newDetails);


// *************** EXAMPLE  (DEEP CLONING) ***********************
const myPeople = {
    fullName: 'Adelo Adebo',
    car: {
        brand: 'Volve',
        door: 2, 
        color: 'yellow'
    }
}

const stringified = JSON.stringify(myPeople);   //FIRST STEP
console.log(stringified);

const newPeople = JSON.parse(stringified);      //SECOND STEP (CLONED SUCCESSFULLY)
console.log(newPeople);


// EXAMPLE
const myObj = {
    name: 'Muhammad',
    hobbies: ['Eat', 'Sleep', 'Travel'],
    hello: function() {
        console.log('Yoga!');
    }
}

console.log(myObj);
console.log(typeof myObj.name);
myObj.hello();

const send = JSON.stringify(myObj);
console.log(send);

const receive = JSON.parse(send);
console.log(receive);




