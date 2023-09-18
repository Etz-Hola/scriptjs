console.log("LESSON 12 IN JAVAS.");

const view1 = document.getElementById('view1');
console.log(view1);

const view2 = document.querySelector('#view2');
console.log(view2);

const view = document.getElementsByClassName('view');
console.log(view);

const views = document.querySelectorAll('.view');
console.log(views);

const div = view1.querySelectorAll('div') 
console.log(div);

const sameDiv = document.getElementsByTagName('div');
console.log(sameDiv);


const evenDiv = view1.querySelectorAll('div:nth-of-type(2n)');
console.log(evenDiv);


// view1.style.display = 'flex';
// view2.style.display = 'none';

for (let i=0; i < evenDiv.length; i++) {
    evenDiv[i].style.backgroundColor = 'brown'
    // evenDiv[i].style.width = '200px'
    // evenDiv[i].style.height = '200px'

}