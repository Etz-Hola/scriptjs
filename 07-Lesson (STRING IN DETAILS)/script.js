const a = 9;
const b = 5;

// if (a > b) {
//     console.log(`${a} is greater than ${b}`);
// } else if (a === b) {
//     console.log(`${a} is equal to ${b}`);
// } else {
//     console.log(`${a} is less than ${b}`);
// }



a>b? console.log(`${a} is greater than ${b}`) : a===b ? console.log(`${a} is equal to ${b}`) : console.log(`${a} is less than ${b}`);


const age = 8;

switch (age) {
    case 19: console.log("You are old enough");
        break;
    case 18: console.log('You are mature');
    break;
   default: console.log('You are young');
}


// ******************************************** STRING *************************************************
// EXAMPLE 1
const single = 'This is a string written inside a of single quotes';
const double = "This is a string written inside of double quotes";
const backticks = `This is a string written inside of backticks quotes`;
console.log(single);
console.log(double);
console.log(backticks);

// EXAMPLE 2
const single1 = '${2+2}';
const double1 = "${2+2}";
const backticks1 = `${2+2}`;
console.log(single1);
console.log(double1);
console.log(backticks1);

// ************(STRING INSIDE STRING)**************
// EXAMPLE 3 
const greetings = "Hi, I'm John. I'm not ready"
console.log(greetings);

// EXAMPLE 4
const greeting1 = `Hi, I'm John, but people call me "Johnny`;
console.log(greeting1);

// *************Escape Character (\)********************
// EXAMPLE 5 
const greeting2 = 'Hi, I\'m Roqib but people call me \'Rocco\'';
console.log(greeting2);

// ****************STRING LENGTH *******************
//Returns the length of a string
const name = 'Khadijah Musa, Alimi Muaz';
console.log(name.length);

//USING POSITION OF CHAR 
const firstLetter = name[0];
const lastLetter = name[name.length-1];

console.log(firstLetter);
console.log(lastLetter);

// CHANGE STRING CASE 
const mixedStringCase = 'Hello, How are you?';
const lowerCase = mixedStringCase.toLowerCase();
const upperCase = mixedStringCase.toUpperCase();

console.log(lowerCase);
console.log(upperCase);

//********************SEARCHING FOR A SUBSTRING
// 1. STR.INDEXOF()
const exampleStr = 'I love cat, he said, cat are great!';
console.log(exampleStr.indexOf('cat'));
console.log(exampleStr.indexOf('dog'));

const hobbies = 'I love HTML, CSS and javaScript'
const index = hobbies.indexOf('javaScript');
console.log(index);

// 2. LASTINDEXOF()
const sentence = 'I am hungry, I need to eat eat';
const lastInd = sentence.lastIndexOf('eat');
console.log(lastInd);

// 3. INCLUDES()
const fruits = 'Apple, Pawpaw, Orange and mango';
console.log(fruits.includes('Pawpaw'));
console.log(fruits.includes('cashew'));

// 4. STARTWITH()
const text = 'Hello, world, welcome to the universe';
console.log(text.startsWith('He'));

// 5. ENDSWITH()
const cohorts = "Supreme, Kenny, Rokeeb and Kanas";
console.log(cohorts.endsWith('Kanas'));

// CLASS WORK 
const guestList = "Ade, Ola, Rocco, Muhammed, Supreme, Kenny"

const guestLength = guestList.length;
const UpperGuestList = guestList.toUpperCase();

console.log(guestLength);
console.log(UpperGuestList);

// SUBSTRING
// 6. SLICE()
const exampleString = 'hotdog';
console.log(exampleString.slice(0,3));
console.log(exampleString.slice(3));
console.log(exampleString.slice(-1));

const exampleString1 = 'pineapple';
console.log(exampleString1.slice(0,4));
console.log(exampleString1.slice(4));


// 7. SPLIT
const sentence1 = 'The quick brown fox jumped over the lazy dog';
console.log(sentence1.split(' '));

// 8. REVERSE() and JOIN()
const name4 = 'Rocco and Muhammad';
const split1 = name4.split(' ')
const reverse$ = split1.reverse()
const join1 = reverse$.join('-');
console.log(split1); 
console.log(reverse$); 
console.log(join1); 

const cohort3 = 'Muaz, Kenny, Supreme, Muhammad, Rocco, Kanas, Quadri';
const result = cohort3.split(', ').reverse().join(', ');
console.log(result);


// 9. REPEAT() METHOD 
const dogSays = "woof ";
console.log(dogSays.repeat(10));

// 10. TRIM() 
const str = '       @examplegmail.com     '
console.log(str.trim());


// *******************CLASSWORK

const footballTeam = 'Chelsea, Aresenal, Manchester United, Liverpool, Real Madrid';
const reverse1 = footballTeam.split(', ').reverse().join(', ');
console.log(reverse1);


const catSound = 'Meow ';
console.log(catSound.repeat(10));


const myDay = 'I ate rice when I was hungry';
console.log(myDay.slice(6, 10));



// CLASSWORK
const fullName = "Yusuf Roqib Olasunkanmi";
console.log(fullName.length);


//CLASSWORK
const mixedPhrase = 'Hey, all';
const phraseUpperCase = mixedPhrase.toUpperCase();
const phraseLowerCase = mixedPhrase.toLowerCase();

console.log(phraseUpperCase);
console.log(phraseLowerCase);


//CLASSWORK
const myHobbies = 'Gaming, Eating, Sleeping, Coding, Eating, Exercising, Reading, Cooking';
const indexOfHobbies = myHobbies.indexOf('Eating');
const LastIndexOfHobbies = myHobbies.lastIndexOf('Eating');

console.log(indexOfHobbies);
console.log(LastIndexOfHobbies);


//CLASSWORK
const includesHobbies = myHobbies.includes('Gaming');
console.log(includesHobbies);


//CLASSWORK
const startHobbies = myHobbies.startsWith('G');
console.log(startHobbies);


// CLASSWORK
const endOfHobbies = myHobbies.endsWith('g');
console.log(endOfHobbies);


//CLASSWORK
const reverseHobbies = myHobbies.split(', ').reverse().join(', ');
console.log(reverseHobbies);


//CLASSWORK
const myWord = "Hello ";
console.log(myWord.repeat(10));


// CLASSWORK
const badWord = '      Here we go     ';
console.log(badWord.trim());


// CLASSWORK
const sentence2 = 'The quick brown fox jumped over the lazy dog';
const slicedWord = sentence2.slice(10, 19);
console.log(slicedWord);