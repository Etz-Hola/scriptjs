console.log("OBJECT IN DETAILS ")

//object is  common data structure that hold key/ value pairs


// what are object, why do we need them and how can we declare them?
//In simple words, object is an undered callection of ralated data in form of key value pairs

const person = {
    firsName:'John',
    lastName: 'Doe',
    age: 21
}

console.log(person);

const supreme = {
    firsName: 'Olamide',
    lastName: 'Abiodun',
    profession: 'Caterer',
    isMarried: true,
    gender: 'male'
}

console.log(supreme)



//to create an object, we need to opon a set curlimg braces and assing it in a variable, that is form of Key and value are seperated by colum (:), why property are seperated by comer (,)

const director = {
    firsName: 'Aliu',
    lastName: 'Musa',
    age: '40',
    gender: 'male',
    isMarried: 'true',
    car: {
        carName: 'Lexus',
        year: '2022',
        color: 'Ash'
    },
    car2: {
        carName: 'Toyota',
        year: '2019',
        color: 'Gray'
    }
};

console.log(director);


//VARIABLES AS VALUES IN AN OBJECT
const firstName = "Rokeeb";
const lastName = "Yusuf";

const person2 = {
    // firstName: firstName,
    // lastName: lastName
    firstName,
    lastName
}
console.log(person2)



const player = {
    firsName: 'Messi',
    lastName: 'Lionel',
    gender: 'male',
    age: '20',
    team: {
        country:'Argentine',
        club: 'Barcelona'
    },
    jerseyNum: '10',
};

console.log(player);

//Accessing, Adding and Updating Properties of an Object.
//Dot Notation. (.)
//Squarebracket. ([])

//Dot Notation. (.)
//This is use to acces Add or Update a property of an object
//it allow us to retrive some value from an object.

const plaYer = {
    firsName: 'Messi',
    lastName: 'Lionel',
    gender: 'male',
    age: '20',
    team: {
        country:'Argentine',
        club: 'Barcelona'
    },
    jerseyNum: '10',
};

console.log(plaYer.team);


//Squarebracket. ([])
//this allow us to acces prooerty of an object

const plaYer2 = {
    firsName: 'Qadir',
    lastName: 'Adesoye',
    gender: 'male',
    age: '20',
    team: {
        country:'Argentine',
        club: 'Barcelona'
    },
    jerseyNum: '10',
};

console.log(plaYer2['firsName']);


const bola = 'jerseyNum';
console.log(plaYer2[bola])








//BUIT IN METHOD
//this is a property containing a function declaration

const myObj = {
     myMethood1: ()=> {

    },
     myMethod2: function () {
        
     },
     myMethod3 () {

     }
}

const dog = {
    name: 'fluffy',
    sound: '2',
    bark: () => {
        console.log('woof woof!');
    }
}

console.log(dog.name);
dog.bark();


//OBJECT METHODS
//(1) Object.key()
//(2) Object.values()
//(3) Object.entries()
//(4) Object.freeze()
//(5) Object.seal()



//Object.key()
//it create/returns an array containing the key of an object.
const employees = {
    boss: 'Michael',
    secretary: 'John',
    sales: 'Jimmy',
    accountant: 'Oscar'
}

const employeesInfo = Object.keys(employees);
console.log(employeesInfo);




//Object.values()
//it create/returns an array containing the values of an objects


const session = {
    id: 1,
    date: '5-September-2023',
    device: 'mobile',
    browser: 'chrome'
}
const sessionInfo = Object.values(session);
console.log(sessionInfo);





//Object.entries()
//it creates a nested array of the key and value pairs of an object


const session2 = {
    id: 1,
    date: '5-September-2023',
    device: 'mobile',
    browser: 'chrome'
}
const session2Info = Object.entries(session2);
console.log(session2Info);





//Object.freeze()
//it prevent modification of existing property and prevents property from being added or removed

const user = {
    userName: 'John',
    password: 123123
}

const userInfo = Object.freeze(user);
userInfo.userName = 'supreme'
console.log(userInfo);


//Object.seal()
//it prevents new properties from being added to an object.

const user1 = {
    userName: 'John',
    password: 123123
}

const userInfo1 = Object.seal(user1);
userInfo1.userName = 'Bola'
console.log(userInfo1);




//object is  common data structure that hold key/ value pairs

const person3 = {
    name: 'soliu',
    age: '10'
}
console.log(person3)

let X 

const person4 = {
    name: 'Ali',
    age: 20,
    isAdmin: true,
    address: {
        street: '12 unity and peace',
        city: 'Ilorin',
        state: 'Kwara'
    },

    hobbies: ['Music', 'Sport']
}
X = person4.name
console.log(X);

X = person4.hobbies[0]
console.log(X);

//updating (the name)
person4.name = 'soliu'
console.log(person4);

person4['isAdmin'] = false
console.log(person4);

//DELETE A PROPERTY

// delete person4.age
// console.log(person4);

delete person4.address.street
console.log(person4);



//ADDING A PROPERTY
person4.hasChildren = true
console.log(person4);

//ADDING A FUNCTION IN AN OBJECT

person4.greet = function () {
    console.log(`Hello, my name is ${this.name}`)
};
person4.greet()

person4.greet = function () {
    console.log(`Hello, my age is ${this.age}`)
};
person4.greet()



let b 
const todo = {}
todo.id = 1
b = todo
console.log(b);

//contructor in an object
//The constructor method is a special method of a class for creating and initializing an object instance of that class.

const todo1 = new Object()
todo1.id = 1
todo1.name = 'buy milk'
todo1.completed = false

b = todo1
console.log(todo1);



const firstNaming = 'Soliu'
const lastNaming = 'Ahmad'

const naming = {
    firstNaming, 
    lastNaming
}
console.log(naming);

