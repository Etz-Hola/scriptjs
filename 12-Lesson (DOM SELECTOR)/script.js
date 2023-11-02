const view1 = document.getElementById('view1');
console.log(view1);

const view2 = document.querySelector('#view2')  //Only works for a single ID or Class
console.log(view2);

const view = document.getElementsByClassName('view');
console.log(view);

const views = document.querySelectorAll('.view')  //Works for all ID or Class with matching name

const div = view1.querySelectorAll('div');   //without 'document' only works for ID (Selects all 'div' in ID of 'view1')
console.log(div);

const sameDiv = document.getElementsByTagName('div');   //Selects all the 'div' in the HTML
console.log(sameDiv);

const evenDiv = view1.querySelectorAll('div:nth-of-type(2n)') //Selecting the even 'div'
console.log(evenDiv);


view1.style.display = 'flex';
view2.style.display = 'none';

for(let i = 0; i < evenDiv.length; i++) {
    evenDiv[i].style.backgroundColor = 'brown'
    evenDiv[i].style.width = '200px'
    evenDiv[i].style.height = '200px'
}