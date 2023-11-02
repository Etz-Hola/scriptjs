console.log('Javascript DOM');

// ****************************SELECTING ELEMENTS***************************** 
const el1 = document.getElementsByClassName('heading1')


const el2 = document.getElementById('heading1');
const header = document.getElementsByTagName('h1');
const lastHead = document.querySelector('.heading2');
const lastHd = document.querySelector('#para');
const all = document.querySelectorAll('h1.heading1')


const textH2 = document.getElementsByClassName('text');
const textH2Id = document.getElementById('headingText');
const textQuery = document.querySelector('#headingText');
const textTag = document.getElementsByTagName('h2');


//********** EXAMPLE (FOR active ul in HTML)*************
const menuItem = document.getElementsByClassName('menu-item');
console.log(menuItem);


// menuItem.forEach((menu) => {
//     menu.addEventListener('click', (event) => {
//         for (let i = 0; i < menuItem.length; i++) {
//             menuItem[i].classList.remove('active')      //Remove class ".active"
//         }
//         event.target.classList.add('active') 
//     })
// })



const menuClicked = (currEl) => {
    for (let i = 0; i < menuItem.length; i++) {
        menuItem[i].classList.remove('active')      //Remove class ".active"
    }
    event.target.classList.add('active')            //Add class to html elements
};


//*********** EXAMPLE (FOR BUTTON) ************
const button = document.querySelector('button') 
button.addEventListener('click', () => {
    alert('Welcome back ')
})


// ******************CREATE ELEMENT*************************
const heading = document.createElement('h1')
console.log(heading);

const body = document.querySelector('body')
console.log(body);

body.appendChild(heading)

heading.innerText = "Hello World!"


// ***********************REMOVE ELEMENT**********************
const favSub = document.querySelector('.fav-subject')
favSub.remove();   //To remove element


//*********************NEW KEYWORD**************************
const arr2 = [1, 2, 3]
console.log(arr2);

const arr3 = new Array(1, 2, 3)
console.log(arr3);

const state = {};
const state1 = new Object();

state.bestState = 'Lagos'
console.log(state);
state1.beststate = 'Abuja'
console.log(state1);


// **********FOR DATE *******
const myDate = new Date();  //Date is a special object built on JavaScript
console.log(myDate);
console.log(myDate.getFullYear()); //Get the year


// ***********************************
console.log(Array());
console.log(Object());
console.log(Number());
console.log(Date());


// *******************************************
const myNumber = new Number(100.23);
console.log(myNumber.toFixed(0)); //To round up to nearest whole number