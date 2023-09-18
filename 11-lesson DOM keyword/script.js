console.log('JS DOM');

//JS DOOM
//  Documrnt object model: is a program interface for web development. it represent the structure of an HTML or XML as a free like a structure
//   Document: it represent the entire HTML webpage.
//   Dom manipulateion: It allow us to manipulate the DOM by adding, remove or modifying element and their attributes.






// const el1 = document.getElementsByClassName('heading1');
// const el2 = document.getElementById('heading1');
// const header = document.getElementsByTagName('h1')
// const lastHead = document.getElementsByTagName('heading');




const menuItem = document.getElementsByClassName('menu-item');

const menuClicked = (currEl) => {
    for (let i = 0; i < menuItem.length; i++) {
        menuItem[i].classList.remove('active');
    }
    currEl.classList.add('active');
}





const button = document.querySelector('button')
button.addEventListener('click', () => {
    alert('welcome back')
})




//remove element 
// this is to remove element in HTML
const favSub = document.querySelector(".fav-subject")

favSub .remove()


//NEW KEYWORD
//this is to create new object 


const arr2 = [1, 2, 3];
    console.log(arr2);
const arr3 = new Array(1, 2, 3)
    console.log(arr3);

const state = {}

const state1 = new Object()

state.bestState = 'Lagos'
    console.log(state);
state1.bestState = 'Abuja'
    console.log(typeof state1);



//date is a special object beilt on javascript , thta is why we need new key word
const myDate = new Date ('september 8, 2023')
    console.log(myDate.getFullYear());

    console.log(Array);
    console.log(Object);
    console.log(Number);
    console.log(Date);

const myNumber = new Number (100.23);
    console.log(myNumber.toFixed(0));



        //KEYWORDS
//(1) THIS KEYWORD
//(2) CLASS


//THE "this" KEYWORD
//This keyword is use to refrence the object that is exicuting the curent function.
// in other word, every function as a reference  to it current execution context 

//only fuction diclerration can take "This" keyword
function sentence(words) {
    this.words = words;

    console.log(this);
}
 const firtString = new sentence('Hello, we are learning about this keyword');

console.log(firtString);


const car1 = {
    color: 'green',
    brand: 'Chevrolet',
    wheels: 4
}

console.log(car1);


function car(color, brand, wheels) {
    this.color = color;
    this.brand = brand;
    this.wheels = wheels

    console.log(this);
}

const blueCar = new car('blue', 'BMW', 4);
const redCar = new car('Red', 'Ferrari', 4);




////CLASS WORK

function player (name, age, team, jerseyno) {
    this.name = name;
    this.age = age;
    this.team = team;
    this.jerseyno = jerseyno;

    console.log(this);
};

const playerInfo = new player('Drogba', '23', 'Bacelona', 9);
const playerInfo2 = new player('ronaldo', '38', 'Al-nassr', 7);
const playerInfo3 = new player('sterling', '28', 'chelsea', 7);


//write a javascript program called minMax. that take in an array of number and return an object with the menimum and maximum number in the array.

//Hint
//1. you can math.min() and math.max to get the main and max of the list number
//2. you can use the spread operator to spreat the value of an arrsy in to seperate argument
// exoected result: 1, 5 

        //SOLUTION
function minMax(arr) {
    const min = Math.min(...arr);
    const max = Math.max(...arr);

    return{min, max};
};
console.log(minMax([1, 2, 3, 4, 5]));



//CLASSES KEYWORLD
// a class keyworld is scheem for an object that can save many value
//class is blu print for creating property....
//in class variable name start with capital leter

//constructor is special function that create and initialise an object instact in a class

//sinters
// class name{
//     constructor()
// }



class Person {
    constructor(name, age, isworking) {
        this.name = name;
        this.age = age;
        this.isworking = isworking;

        console.log(this);
    }
}
const personInfo = new Person('Supreme', 30, true);



class Car {
    constructor(year, color, brand, wheels) {
        this.year = year;
        this.colo = color;
        this.brand = brand;
        this.wheels = wheels;

        console.log(this);
    }
}

const carDetails = new Car(2023, 'black', 'benz', 4);

class Player {
    constructor(name, age, team, jerseyno) {
        this.name = name;
        this.age = age;
        this.team = team;
        this.jerseyno = jerseyno;

        console.log(this);
    }   
};
const playerDetail = new Player('Drogba', 23, 'toyota', 9);


// const createPerson = (name, age, isActive) => {
//     const usereSchema = {
//         name: name,
//         age: age,
//         isActive: isActive,
//     }
//     return usereSchema
// }
// const user7 = createPerson("Kenny", 300, true)

// console.log(user7);


const createPerson = (name, age, isActive) => {

    return {name, age, isActive}
}
const user7 = createPerson("Kenny", 300, true)
const user8 = createPerson("Qadir", 60, true)

console.log(user7);
console.log(user8);








                //STARTIC KEY WORD
// this belong to the class not the object property.
//it is usefull for caches, fit for configoration method
// it usefull for utility function.


class Motor{
    numberOfCars = 0;
    constructor(model) {
        this.model = model
        this.numberOfCars +=2
    }

    static startRace() {
        console.log("3...2...1...Go!");
    }
}

const car01 = new Motor("Toyota");
const car02 = new Motor("Volvo");
const car03 = new Motor("Benz");

console.log(car01.numberOfCars);
console.log(car02.numberOfCars);
console.log(car03.numberOfCars);

Motor.startRace()



            //INHERITACE
//a child class can inherit all the methord and property from another class 

class Animal {
    alive = true;

    eat() {
        console.log(`this ${this.name} can eat`);
    }

    sleep() {
        console.log(`this ${this.name} can sleep`);
    }
}


class Rabbit extends Animal {
    name = "Rabbit"

    run() {
        console.log(`this ${this.name} can run`);
    }

}


class Fish extends Animal {
    name = "fish"

    swim() {
        console.log(`this ${this.name} can swim`);
    }

}


class Chicken extends Animal {
    name = "chicken"

    fly() {
        console.log(`this ${this.name} can fly`);
    }

}


const rabbit = new Rabbit();
const fish = new Fish();
const chicken = new Chicken();


console.log(rabbit.alive);
console.log(fish.alive);
console.log(chicken.alive);


rabbit.eat()
rabbit.sleep()
rabbit.run()

fish.eat()
fish.sleep()

chicken.eat()
chicken.fly()



            //GETTER AND SETTER
//getter...
//get binds an object property to a function wen that property is acces.

//setter...  
//setter bind and object property to a funtion wen that property is assing to a value.



class Buss {
    constructor(power) {

        this._gas = 25
        this._power = power
    }

    get power(){
        return `${this._power}hp`;
    }

    get gas(){
        return `${this._gas}L (${this._gas / 50 * 100} %)`
    }
    set gas (value) {

        if(value > 50) {
            value = 50
        }else if(value < 0) {
            value = 0
        }

        this._gas = value
    }
   
}


let buss = new Buss(400)
buss.gas = 500

console.log(buss.power);
console.log(buss.gas);









         //WEB STORRAGE API
//It is use fir storing  and retrievng data in the browser, there are two type of storge 
//(1). local srorage
//(2). session srorage

//(1). local srorage provide acesse to local storage for a perticuler website, it allow you to store, read, and add 
//local storage has two method.
//(a). set item method. (b). Get items method

//(a) set items method store the data items in the storage
//it take a name and value as parameter

//(B). Get items method, it retrieves data items from the storage, it takes a name as parameter




//(2). session srorage
// this is identicall to the locall object, 
//(2). session srorage provide acesse to local storage for a perticuler website, it allow you to store, read, and add 
//local storage has two method.
//(a). set item method. (b). Get items method

//(a) set items method store the data items in the storage
//it take a name and value as parameter

//(B). Get items method, it retrieves data items from the storage, it takes a name as parameter

            //WEB STORAGE
localStorage.setItem('name', 'John Doe');
let result = document.getElementById('result')
.innerText = localStorage.getItem('name');
console.log(result);

sessionStorage.setItem('name', 'Qadir');
let demo = document.getElementById('demo')
.innerText = sessionStorage.getItem('name');
console.log(demo);



