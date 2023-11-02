//*******************************OBJECT IN DETAILS************************************/
//An object is a common data structure that hold key/value pairs.

//To create an object, we need to open a set of curly braces and assign it to a variable. That is in the form of an object
//Inside object, we have key and value
// Key and value are separated by column
//Propertiers are separated by commas
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 21
}
console.log(person);

const supreme = {
    firstName: 'Olamide',
    lastName: 'Abiodun',
    profession: 'Caterer',
    isMarried: true,
    gender: 'Male'
}
console.log(supreme);

const director = {
    firstName: 'Aliu',
    lastName: 'Musa',
    age: 40,
    gender: 'Male',
    isMarried: true,
    car1: {
        carName: 'Lexus',
        year: '2022',
        color: 'Ash'
    },
    car2: {
        carName: 'Toyota',
        year: '2015',
        color: 'gray'
    }
}
console.log(director);


//VARIABLES AS VALUES IN AN OBJECT
//We can also have variables as values in objects
const firstName = "Rokeeb";
const lastName = "Yusuf";

const person2 = {
    firstName: firstName,
    lastName: lastName 
}
console.log(person2);

//********** OR **************

const person3 = {
    firstName,
    lastName
}
console.log(person3);

//CLASSWORK
const player = {
    firstName: 'Silva',
    lastName: 'Thiago',
    age: 38,
    team: {
        clubName: 'Chelsea',
        location: 'England',
        manager: 'Pochettino'
    },
    jerseyNumber: 6
}
console.log(player);


//ACCESSING, ADDING AND UPDATING PROPERTIES OF AN OBJECT
// ->   Dot Notation .
// ->   Square Bracket []

// ************************* DOT NOTATION *******************************
// It is used to access, add or update a properties of an object
//It allows us to retrieve some values from an object
console.log(player.team.clubName);
console.log(player['team']['clubName']);


// ****************************SQUARE BRACKET ************************
//It allows us to access properties of an object
console.log(player['firstName']);


const bola = 'age';
console.log(player[bola]);




//***************** BUILT IN METHOD ************************
// Is a property containing a function declaration



const myObject = {
    myMethod1: () => { },             //Arrow function
    myMethod2: function() {  },       //function expression
    myMethod3() {  }                //function declaration

}


//EXAMPLE
const dog = {
    name: 'Fluffy',
    age: 2,
    bark: () => {
        console.log('woof woof!');
    }
}

console.log(dog.name);
dog.bark();


// *********************** OBJECT METHODS ************************************
// Object.keys()
// Object.values()
// Object.entries()
// Object.freeze()
// Object.seal()



// ************* Object.keys()
//It creates/returns an array containing the keys of an object
const employees = {
    boss: 'Michael',
    secretary: 'John',
    sales: 'Jimmy',
    accountant: 'Oscar'
}

const employeesInfo = Object.keys(employees);
console.log(employeesInfo);


//************** Object.values()
// It creates/returns an array containing the values of an object
const session = {
    id: 1,
    date: '5-September-2023',
    device: 'Mobile',
    browser: 'Chrome'
}

const sessionValue = Object.values(session);
console.log(sessionValue);


//*********** Object.entries()
//It creates a nested array of the key and value pairs of an object
// EXAMPLE
const sessionEntries = Object.entries(session);
console.log(sessionEntries);    // [['id', 1], ['date', '5-September-2023'], ['device', 'Mobile'], ['browser', 'Chrome']]

// EXAMPLE
const operatingSystem = {
    name: 'Linux',
    version: 18.04,
    license: 'Open Source'
}

const operatingSystemInfo = Object.entries(operatingSystem);
console.log(operatingSystemInfo);


//*********** Object.freeze()
//It prevents modification of existing properties and prevents properties from being added or removed
const user = {
    userName: 'John',
    password: 123123
}
// user.userName = 'Ade'
// console.log(user);


const userInfo = Object.freeze(user);
userInfo.userName = 'Ade'
console.log(userInfo);

userInfo.userName = 'Supreme'  //Try to change the Username but it won't change
console.log(userInfo);


//*********** Object.seal()
//It prevents new properties from being added or removed to an object.
const user1 = {
    userName: 'John',
    password: 123123
}
// user1.age = 32
// console.log(user1);

const userInfo1 = Object.seal(user1);
userInfo1.userName = 'bola'
userInfo1.age = 32
console.log(userInfo1);



// ****************************************************************************************************************************
const person4 = {
    name: 'Soliu',
    age: 10
}
console.log(person4)

let x

const person5 = {
    name: 'Ali',
    age: 20,
    isAdmin: true,
    address: {
        street: '12, Unity and Peace',
        city: 'Ilorin', 
        state: 'Kwara'
    },
    hobbies: ['Music', 'Sport',]
}

x = person5.name
console.log(x);

//Accessing an array inside object
x = person5.hobbies[0];
console.log(x);

//Updating a property
person5.name = 'Soliu';
console.log(person5);

person5["isAdmin"] = false;
console.log(person5);


//*************** DELETE A PROPERTY
// To delete a property in an object, we use 'delete' keyword

// delete person5.age;
delete person5.address.state;
console.log(person5);


//************* ADD A PROPERTY
person5.hasChildren = true;
console.log(person5);


// ADDING FUNCTION IN AN OBJECT 
person5.greet = function() {            //This can only be done with function expression
    console.log(`Hello, my name is ${this.name}`);
};

person5.greet();


// CLASSWORK
person5.fnAge = function() {
    console.log(`Soliu is ${this.age} years old`)
};

person5.fnAge();


//EXAMPLE TO ADD PROPERTY
let b
const todo = {};
todo.id = 1
b = todo;
console.log(b);

//***************I************** CONSTRUCTOR IN AN OBJECT ****************************************
//To create new object
const todo1 = new Object()   //SYNTAX

todo1.id = 1
todo1.name = 'Buy milk'
todo1.completed = false

b = todo1;
console.log(todo1);


//***************I******************************************************
//TESTING MODE:
const firstName1 = 'Soliu';
const lastName1 = 'Ahmad';

const naming = {
    firstName1,
    lastName1
}
console.log(naming);


