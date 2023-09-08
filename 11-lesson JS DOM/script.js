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
    event.target.classList.add('active');
}





const button = document.querySelector('button')
button.addEventListener('click', () => {
    alert('welcome back')
})