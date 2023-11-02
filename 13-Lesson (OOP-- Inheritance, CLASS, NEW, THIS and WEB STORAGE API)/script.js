// ******** REVISION
const obj = {
    firstName: 'Roqib',
    lastName: 'Yusuf',
    hobbies: {
        hobby1: 'Eating',
        hobby2: 'Cooking',
        hobby3: 'Gaming',
        hobby4: 'Coding',
        hobby5: 'Dancing'
    }
}

console.log(obj);
console.log(obj.hobbies);
console.log(obj['hobbies']);
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));




//*********************************************************** NEW KEYWORD **************************************************************
const arr2 = [1, 2, 3]
console.log(arr2);

const arr3 = new Array(1, 2, 3)
console.log(arr3);

const state = {};                   //Method1
const state1 = new Object();        //Method2

const test = new Object()
const test2 = new Array()

console.log(test);
console.log(test2);

state.bestState = 'Lagos'
console.log(state);
state1.beststate = 'Abuja'
console.log(state1);


// **********FOR DATE *******
const myDate = new Date();  //Date is a special object built on JavaScript
console.log(myDate);
console.log(myDate.getFullYear()); //Get the year




// ********************************************************* this KEYWORD ************************************************************
function sentence(words) {
    this.words = words;
    console.log(this);
}

const firstString = new sentence('Hello, we are learning about this keyword');


//ANOTHER EXAMPLE
function car(color, brand, wheels) {
    this.color = color;
    this.brand = brand;
    this.wheels = wheels

    console.log(this);
}

const blueCar = new car('blue', 'BMW', 4 );
const redCar = new car('red', 'Ferrari', 4 );


// *********************** CLASSWORK
function player(name, age, team, jerseyNo) {
    this.name = name;
    this.age = age;
    this.team = team;
    this.jerseyNo = jerseyNo;

    console.log(this);
}

const forMbappe = new player('Kylian Mbappe', 24, 'Paris Saint German', 7);
const forMessi = new player('Messi', 36, 'Inter Miami', 10);
const forSterling = new player('Sterling', 28, 'Chelsea', 7);



// CLASSWORK
function minMax(arr) {
    const minResult = Math.min(...arr)  //Converts the array to number
    const maxResult = Math.max(...arr)

  console.log({minResult, maxResult});
}

const inputArr = [1, 2, 4, 3, 5, 8];

minMax(inputArr)




//************************************************************** CLASS KEYWORD ************************************************************
// EXAMPLE
class Person {
    constructor(name, age, isWorking) {
        this.name = name;
        this.age = age;
        this.isWorking = isWorking;

        console.log(this);
    }
}
const personInfo = new Person('Supreme', 30, true);


// EXAMPLE
class Car {
    constructor(year, color, brand, wheels){
        this.year = year;
        this.color = color;
        this.brand = brand;
        this.wheels = wheels;

        console.log(this);
    }
}

const carDetail = new Car(2023, 'black', 'benz', 4);


// EXAMPLE
class Player1 {
    constructor(name, age, team, jerseyNo) {
        this.name = name;
        this.age = age;
        this.team = team;
        this.jerseyNo = jerseyNo;
    
        console.log(this);
    }
}

const forNewMbappe = new Player1('Kylian Mbappe', 24, 'Paris Saint German', 7);


// ********************USING CONST VS USING CLASS***********************
// *********CONST VS CLASS *************

// CONST     //CAN ONLY CREATE ONE OBJECT
const person3 = {
    name: 'Muaz',
    age: 40,
    isBlack: true 
}
console.log(person3);


// ************************************************ CLASS  *************************************************************  //IS LIKE A BLUEPRINT FOR CREATING MULTIPLE OBJECTS
class Persons {
    constructor(name, age, isBlack) {
        this.name = name
        this.age = age
        this.isBlack = isBlack
    }
}

const user = new Persons('Muhammed', 85, false)
const user1 = new Persons('Muha', 45, true)
const user2 = new Persons('Supreme', 15, false)
const user3 = new Persons('Qido', 35, false)
console.log(user);
console.log(user1);
console.log(user2);
console.log(user3);


//************* USING ARROW FUNCTION 
const createPerson = (name, age, isActive) => {
    const userSchema = {
        name: name,
        age: age,
        isActive: isActive
    }
    return userSchema
}

            // OR 

const createPerson1 = (name, age, isActive) => {
    const userSchema = {
        name,
        age,
        isActive
    }
    return userSchema
}

            // OR 

const createPerson2 = (name, age, isActive) => {
  
    return {name, age, isActive}
}

const user7 = createPerson('Kenny', 300, true)
const user8 = createPerson('Kanaz', 30, true)
console.log(user7);
console.log(user8);


// ******************STATIC KEYWORD******************
class Cars {
    numberOfCArs = 0;
    constructor(model) {
        this.model = model
        this.numberOfCArs += 1
    }

    static startRace() {
        console.log('3...2...1...GO!')
    }
}

const car1 = new Cars("Toyota")
const car2 = new Cars("Volvo")
const car3 = new Cars("Benz")

console.log(car1.numberOfCArs);
console.log(car2.numberOfCArs);
console.log(car3.numberOfCArs);

Cars.startRace()


//*********************INHERITANCE**************
class Animal {
    alive = true;

    eat() {
        console.log(`This ${this.name} can eat`);
    }

    sleep() {
        console.log(`This ${this.name} can sleep`);
    }

}


//extends KEYWORD
class Rabbit extends Animal {       //RABBIT
    name = 'rabbit'

   run() {
        console.log(`This ${this.name} can run`);
    }
}


class Fish extends Animal {         //FISH
    name = 'fish'

   run() {
        console.log(`This ${this.name} can run`);
    }
}


class Goat extends Animal {         //GOAT
    name = 'goat'

    swim() {
        console.log(`This ${this.name} can swim`);
    }
   

    jump() {
        console.log(`This ${this.name} can jump`);
    }
}

const rabbit = new Rabbit();        //If 'static' is not used for the methods. We use it this way
console.log(rabbit);

const fish = new Fish()
const goat = new Goat()

console.log(rabbit.alive);
rabbit.eat();
rabbit.sleep();
rabbit.run();

fish.eat();
fish.sleep();

goat.sleep();
goat.jump();
goat.swim


//******* Getter and Setter ********
// GETTER 
class Vehicle {
    constructor(power){
        // this._gas = 25
        this._power = power  //underscore is required when using getter and setter
    }

    get power() {
        return (`${this._power}hp`)
    }

    get gas() {
        return `${this._gas}L (${this._gas/50*100}%)`
    }

    set gas(value) {
        if(value > 50) {
            value = 50
        } else if (value < 0) {
            value = 0
        }

        this._gas = value
    }
}

let vehicle = new Vehicle(400);
vehicle.gas = 25
console.log(vehicle.power);
console.log(vehicle.gas);






// ********************************* WEB STORAGE API ***************************************
// setItem()
// getItem()

localStorage.setItem('name', 'John Doe');
let result = document.getElementById('result').innerHTML = localStorage.getItem('name');
console.log(result);


sessionStorage.setItem('name', 'Quadri');
let demo = document.getElementById('demo').innerText = sessionStorage.getItem('name');
console.log(demo);