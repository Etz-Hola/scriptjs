console.log("Asynchronous javascript");




            //ERROR OBJECT
//ERROR is 


// try {
//     console.lag();
// }


// catch(error) {
//     console.log(error);
// }



// try{
//     let x = window.prompt('Enter a #')
//     x = Number (x)

//     if(isNaN(x)) throw "That wasn't a number"
//     if (x == "") throw "Kindly input valid number"

//     console.log(`${x} is a number`);
// }

// catch(err) {
//     console.log(err);
// }

// finally {
//     console.log(`Congratulation44`);
// }











//Asynchronous javascript
//Inteval and Timers 
//SetInterval()
//setTimeout()

    //SetInterval()
    //this take two (2) agument, call back function, and number of miloseconds.
    //it allow you tom exicute to execute a chunk of code everytime a specify amount of miloseconds passes.
// setInterval(() => {
//         console.log('Hello world');
// }, 1000);


const myInterval = setInterval(() => console.log('Hello'), 1000);
clearInterval(myInterval);

        //setTimeout()
//this allow us to wait a sertain amount of time befor exicuting a chunk of code.

// setTimeout(() => {
//     console.log('Welcome to DLT Africa');
// }, 5000);

setTimeout(() => {
   console.log('At the top'); 
}, 7000);

console.log('At the bottom'); 





//setTimeout
// let suprem = 'small chops'
// let price = 300
// let timer1 = setTimeout(firstMessage, 3000, suprem, price)
// let timer2 = setTimeout(secondMessage, 9000)
// let timer3 = setTimeout(thirdMessage, 6000)

// function firstMessage (suprem, price) {
//     alert(`Hi suprem, my ${suprem} has the lowest price of ${price} in the market`)
// }
// function secondMessage () {
//     alert(`Cold every i need hot tea`)
    
// }
// function thirdMessage () {
//     alert(`It's stingy moment oh Kanaz look away`)
    
// }

// document.getElementById("myButton").onclick = function() {

//     clearTimeout(timer1)
//     clearTimeout(timer2)
//     clearTimeout(timer3)

//     alert(`Yoga thanks for coming`)
// }


//setInterval
// let count = 0

// let max = window.prompt(`count up to #`)
// max = Number(max)

// const myTimer = setInterval(countUp, 1000)
// function countUp() {
//     count +=1
//     console.log(count);

//     if(count >= max) {
//         clearInterval(myTimer)
//     }
// }


//Date OBJECT

let date = new Date()
 let month = date.getMonth()
 let dayOfWeek = date.getDay()
 let hours = date.getHours()
console.log(date)
console.log(month)
console.log(dayOfWeek)
console.log(hours)


document.getElementById("myLabel").innerHTML= formatTime(date)

function formatDate(date) {
    let hours = date.getHours()
    let month = date.getMonth() + 1
    let dayOfWeek = date.getDay() + 1

    return `${hours}/ ${month}/ ${dayOfWeek}`

}

function formatTime(date) {
    let hours = date.getHours()
    let minutes = date.getMinutes() 
    let seconds = date.getSeconds()

    let amOrpm = hours >= 12 ? "pm" : "am"

    return `${hours}: ${minutes} : ${seconds}${amOrpm}`
}

date = date.toLocaleString()
// document.getElementById("myLabel").innerHTML





