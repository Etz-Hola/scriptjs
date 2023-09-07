console.log(" The if...else is a type of conditional statement that will execute a block of code when the condition in the if statement is truthy. If the condition is falsy, then the else block will be executedTruthy an falsy values are converted to true or false in  if statements")



const age = 30;
if (age <= 5){
    console.log('You are too old to quit')
}else{
    console.log("keep working")
}




let time = 12;
if (time < 11) {
    console.log ('Morning');
}else if (time => 12) {
    console.log('How is your day going');
    
}else {
    console.log ('goog evening');
}



// SWITCH STATEMENT
const male = 'Khadijat'
switch(male) {
    case 'Sola': console.log('My personal person');
    break;
    case 'Nhim': console.log('My good frind');
    break;
    case 'Lekan': console.log('I, My self');
    break;
    case 'Khadijat': console.log('respect to my young tutor');
    break
    default: console.log('You have entered a wrong name..  CONTACT SUPREME 08031861169');
}


const age5 = 30;
age5 >= 30 ?console.log("You are old enough to Work Hard") :console.log("You are an under age")





// SRING IN DETAILS
const single1 = 'this is a string written inside of single quotes'
const double1 = "this is a string written inside of double quotes"
const bacticks1 = `this is a string written inside of bacticks quotes`

console.log(single1);
console.log(double1);
console.log(bacticks1);


const single2 = '${2 + 2}';
const double2 = "${2 + 2}";
const bacticks2 = `${2 + 2}`;

console.log(single2);
console.log(double2);
console.log(bacticks2);

// TO USE STRENG INSIDE SRING
const greeting = "Hi, I'm Qadir, but people call me 'lekan'"
console.log(greeting)

//BACKTICK STRING
const greeting1 = `Hi, I'm Soji, but people call me "S O J" and 'sojisco'`
console.log(greeting1);


//SRING WITH ESCAPE CHARACTER (\)
const greeting2 = 'Hi, I\'m Rokeeb, but people call me \'Roko\' '
console.log(greeting2);



//STING LENGTH
//this retun the lenght of a string

const name = 'Khadija Musa, Alimi Muaz';
console.log(name.length);

const firstLetter = name[0]
const lastLetter = name[20]
console.log(firstLetter, lastLetter)



//CHANGE STRING CASE
const mixedStringCase = 'Hello, How are you?'

const lowercase = mixedStringCase.toLowerCase();
const uppercae = mixedStringCase.toUpperCase();

console.log(lowercase);
console.log(uppercae);

//SEARCHING FOE A SUBSTRING
//1. STR.INDEXOF()

const exampleStr = 'I love cat, he said, cat are great!';
console.log(exampleStr.indexOf('cat'))
console.log(exampleStr.indexOf('dog'))


const hobbies = 'I love HTML, CSS and JavaScript and react';
const firstIndex = hobbies.indexOf('JavaScript')
const lastIndex = hobbies.lastIndexOf('react')
console.log(firstIndex);
console.log(lastIndex);


// const myChoice = 'I really like Rice';
// const food = myChoice.lastIndexOf('Rice');
// console.log(food)


//INCLUDES()

const fruits = 'Apple. Pawpaw, Orange and Mango'
console.log(fruits.includes('Orange'))
console.log(fruits.includes('Cashew'))

//4.STARTWITH()
const text = "Hello, world, welcome to the universe";
console.log(text.startsWith('Hello'))
console.log(text.startsWith('world'))

//5.ENDSWITH()
const cohorts = "Suprem. Kenny, Roco and Kanas"
console.log(cohorts.endsWith ('Kanas'));
console.log(cohorts.endsWith ('Suprem'));



//CLASS WORK

const GuestList = "Roco, Suprem. Kenny, and Kanas"
const uppercae1 = GuestList.toUpperCase();

console.log (uppercae1)
console.log(GuestList.length)

//SUBSTRING
//6.SLICE() 
//It return the part of the string from start to (but not including) end.

const exampleString = 'hotdog';
console.log(exampleString.slice(0, 3));

const exampleString1 = 'pieneapple';
console.log(exampleString1.slice(4));


//7. SPLIT ()  METHOD
const sentence = 'The quick brown fox jumped over the lazy dog';
console.log(sentence.split(' '))

//8.REVERSE() METHOD
//it revers the order of the elements in an array.
//To use revers
//1. Split a string
//2. Rvers newly created an array
//3. Turn the array into a string using JOIN()
const name2 = 'Qadir and Muhammad';
const reverse = name2.split(' ').reverse().join();
console.log(reverse)



const cohort3 = 'Qadir, Muhammad, suprem, Roco';
const result1 = cohort3.split(' ').reverse().join();
console.log(result1)





//9. REPEAT() METHOD
//It repeat a string as given position

const dogSay = 'woof';
console.log(dogSay.repeat(10));

//10. TRIM() METHOD
//we use TRIM to clean empty spaces


const str = '     @examplegmail.com       ';
console.log(str.trim())

const ab = ['lola', 'tolu', 'sola' ]
const answer = ab.push()
console.log(ab)



//class work
const footballTeam = ('juventus, manunited, hvggjhv, fcmb, madrid, Fcmb' );
const answer7 = footballTeam.split(' ').reverse().join();
console.log(answer7)

const animal = ('cart:meaon, Goat:hahh,   ');
console.log(animal.repeat(10));

const make = 'My Rice';
console.log(make.slice(3));











    //revision 
const myName = "Qadir Adesoye o"
console.log(myName.length)


const mixedString = "Hey, all"
const lCase = mixedString.toLowerCase();
const upperC = mixedString.toUpperCase();

console.log(lCase);
console.log(upperC);



const hobby2 = "Codind, Playing, Sleeping, Dancing, Eating, Playing";
console.log(hobby2.indexOf('Playing'));
console.log(hobby2.lastIndexOf("Eating"));
console.log(hobby2.includes("You"));
console.log(hobby2.startsWith("C"));

const hobby3 = "Dancing, Codind, Playing, Sleeping, Dancing, Eating, Playing";
console.log(hobby3.endsWith('g'))


const pets = 'Cat, Dog and Camel.';
const pet = pets.split(' ').reverse().join();
console.log(pet)

console.log(pets.repeat(3))

console.log(pets.trim())



const stri = '   Yes, i like it that way          '
console.log(stri.trim( ));

const the = 'The quick brown fox jumps over the lazy dog';
console.log(the.slice(10, 19));