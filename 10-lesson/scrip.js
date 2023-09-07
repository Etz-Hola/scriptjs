console.log('jgc');

//VALUE AND REFRENS


//copying numbers
let X =1
let Y = X
    X = 2
    console.log(X);
    console.log(Y);


//copying Strings
let firstPerson = 'Mark'
let secondPerson = firstPerson
    firstPerson = 'Austin'

     console.log(firstPerson);
    console.log(secondPerson);


//copying Complex value
let animals= ['goat', 'rat', 'cat']
animals.push('sheep')
    console.log(animals);

//Copying complex value object
const person = {
    firstName: 'John',
    lastName: 'sam'
}
const otherPerson = person 

person.firstName = ('Seyi')
console.log(person);


// EQUALITY
const person1 = {firstName: 'Soliu'}
const otherPerson1 = {firstName: 'Bolakale'}
console.log(person1 === otherPerson1);

const  otherPerson3 = person1
console.log(person1 === otherPerson3);


//SHALLOW CLONING OR SPREAD OPERATOR
//The spread (...) syntax allows an iterable, such as an array or string, to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected. In an object literal, the spread syntax enumerates the properties of an object and adds the key-value pairs to the object being created.

//Spread syntax looks exactly like rest syntax. In a way, spread syntax is the opposite of rest syntax. Spread syntax "expands" an array into its elements, while rest syntax collects multiple elements and "condenses" them into a single element. See rest parameters and rest property.


const color = ['red', 'blue', 'green','black'];
console.log(...color);


const copiedColor = color
    console.log(color === copiedColor);


//FIRST WAY : SPREAD OPERATOR
const spreadOperator = {
    firstName: 'Boo',
    university: 'Unilag'
}

    const otherSp = {...spreadOperator}
    console.log(otherSp);



const obj1 = {a: 1, b: 2};
const obj = {c: 3, d: 4};
console.log(obj1, obj);

const obj3 = {...obj1, ...obj}
console.log(obj3);


const array1 = ['titi', 'shola', 'lola', 'tola']
const array2 = ['yes', 'no']
console.log(array1, array2);

const names = [...array1, ...array2]
    console.log(names);


const A= {gender: 'male', age: 20};
const Z= {name: 'Shola', location: 'ogun State'}
console.log(A, Z);
const AZ = {...A, ...Z};
console.log(AZ);


               //shallow cloning

const number = [1, 2, 3, 4, 5];
const newNumber = [...number]

console.log(...number);
console.log(newNumber);



const number2 = [1, 2, 3, 4, 5] //123ed
const copiedNumber = number2 //123ed

const newNumber2 = [...number2]  //shallow clone
number2.push(8)

console.log(number2);
console.log(copiedNumber);
console.log(newNumber2);

console.log(number2 === copiedNumber);
console.log(number2 === newNumber2);



const numbs = [1, 2, 3, 4, 5, 6, 7,]
const copyNumbs = numbs;

const newNumbs = numbs.slice();

numbs.push(8);

console.log(numbs);
console.log(newNumbs);
console.log(copyNumbs);


const person0 = {
    name: 'John',
    age: 20
}

const otherPerson0 = {...person0}

person0.age = 30
console.log(person0);
console.log(otherPerson0);


const myGuy = {
    name: 'Kanas',
    color: 'Red',
    age: 20
}
const newRealG = Object.assign({}, myGuy)
myGuy.name = "Muaz"

console.log(myGuy);
console.log(newRealG);


//DEEP CLONING
//jasson is text format that is completely language independent 
//it is use to send and recive data in array languages 

const details = {
    firstName: 'rocco',
    car:{
        brand: 'Benz',
        color: 'Blue',
        wheel: 4
    }
}

const newDetails = {...details}
newDetails.firstName = 'Roqib'
newDetails.car.color = 'white'

console.log(details);
console.log(newDetails.car);


//JSON.stringify()
// The JSON.stringify() static method converts a JavaScript value to a JSON string, optionally replacing values if a replacer function is specified or optionally including only the specified properties if a replacer array is specified.

const myPeople = {
    fullName: 'Adelo Adebo',
    car: {
        brand: 'volvo',
        door: 2,
        color: 'Yellow'
    }
}
const newPeople1= JSON.stringify(myPeople);
console.log(newPeople1);



// const newPeople = JSON.parse(newPeople1);
// console.log(newPeople);



const myObj = {
    name: 'Muhammed',
    hobbies: ['Eat', "Sllep", 'Travel'],
    hello: function() {
        console.log("yoga !");
    }
}
console.log(typeof myObj);
console.log(typeof myObj.name);
myObj.hello()

const send = JSON.stringify(myObj)
console.log(typeof send);
// console.log(send.name);


const receive = JSON.parse(send)
console.log(receive);

