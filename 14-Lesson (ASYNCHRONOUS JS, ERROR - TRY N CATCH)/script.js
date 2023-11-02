// ****************************************ASYNCHRONOUS JAVASCRIPT************************************************
//**************** setInterval()
//**************** setTimeout()



//************************************** setTimeout() *************************************************
// setTimeout(() => {
//    console.log('Welcome to DLT Africa'); 
// }, 2000);

// console.log('Here we go');

// // EXAMPLE
// setTimeout(() => {
//    console.log('at the top'); 
// }, 7000);

//    console.log('at the bottom'); 



// // **************EXAMPLE
// let supreme = 'small chops'
// let price = 300;

// // **********
// let timer1 = setTimeout(firstMessage, 3000, supreme, price)
// function firstMessage(supreme, price) {
//    alert(`Hi Supreme, my ${supreme} has the lowest price of ${price} in the market`)
// }

// // **********
// let timer2 = setTimeout(secondMessage, 9000)
// function secondMessage() {
//    alert(`Cold every day. I need hot tea`)
// }

// // ***********
// let timer3 = setTimeout(thirdMessage, 6000)
// function thirdMessage() {
//    alert(`It's stingy moment oh  Kanaz look away`)
// }

// // *****************************
// //To clear the timeout after clicking the button
// document.getElementById('myButton').onclick = function() {
//    clearTimeout(timer1)
//    clearTimeout(timer2)
//    clearTimeout(timer3)

//    alert('Yoga thanks for coming')
// }



//*************************************** setInterval() **********************************************
// setInterval(() => {
//     console.log('Hello World!');
// }, 1000);

const myInterval = setInterval(() => {
   console.log('Hello World!');
}, 2000);


clearInterval(myInterval);   //To clear Interval


// ****************** EXAMPLE
// let count = 0
// let max = window.prompt(`Count up to #`);
// max = Number(max)

// const myTimer = setInterval(countUp, 1000);

// function countUp() {
//     count +=1
//     console.log(count);

//     if(count >= max) {
//         clearInterval(myTimer)
//     }
// }





/********************************ERROR OBJECT *****************************/
//*********** try and catch and finally
// try {
//    console.lag()
// }

// catch(error) {
//    console.log(error);
// }

try {
   // let x = window.prompt('Enter a number')
   x = Number(x)

   if(isNaN(x)) throw "That wasn't a number"

   if (x == '') throw "Kindly input valid number"

   console.log(`${x} is a number`);
}

catch(err) {
   console.log(err);
}

finally {
   console.log(`Congratulations 💃💃`);
}



// ************************************************ DATE OBJECT*****************************************
let date = new Date()
let year = date.getFullYear()
console.log(year);

let month = date.getMonth()
console.log(month);

let dayOfWeek = date.getDay()
console.log(dayOfWeek);

let hours = date.getHours()
console.log(hours);



document.getElementById('dateLabel').innerHTML = formatTime(date)

function formatDate(date) {
   let hours = date.getHours();
   let month = date.getMonth()+1;
   let dayOfWeek = date.getDay()+1;

return `${hours}/ ${month}/ ${dayOfWeek}`

}

function formatTime(date) {
   let hours = date.getHours();
   let minutes = date.getMinutes();
   let seconds = date.getSeconds();

   let amOrpm = hours >= 12 ? "pm" : "am"
   return `${hours}: ${minutes} : ${seconds}${amOrpm}`

}




// // Display date in browser
date = date.toLocaleString()
console.log(date);
// const myLabel = document.getElementById('dateLabel')
// myLabel.innerText = date