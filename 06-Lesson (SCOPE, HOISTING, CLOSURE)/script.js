// ARROW FUNCTION

const name1 = () => {
  console.log("I love the name");
};
name1();

const select = () => {
  const sentence = console.log("I love the word");
  return sentence;
};
select();

//******* EXAMPLE 1
const sayHi = (firstName) => {
  console.log(`Hi, ${firstName}`);
};

sayHi("Joe");

//******* */ EXAMPLE 2
const logAge = (name, age) => {
  console.log(`${name} is ${age} years old`);
};

logAge("Joe", 25);

// *************************************************************************** SCOPE **************************************************************************************

//************************* GLOBAL SCOPE *********************************
const name2 = "John";

const logName = () => {
  console.log(name2);
};

logName();

//************ ANOTHER EXAMPLE (ADVANTAGES)
const name3 = "Kanaz";
const globalScope = () => {
  console.log(name3);
};

const globalScope2 = () => {
  console.log(name3);
};

globalScope();
globalScope2();

// *************ANOTHER EXAMPLE (DISADVANTAGES)
let name4 = "Rocco";

const logName1 = () => {
  console.log(name4);
  name4 = "Muhammed";
};

logName1();
console.log(name4);

//************************* LOCAL SCOPE *********************************
const someFunction = () => {
  const name = "Ola";
  console.log(name);
};

someFunction();
// console.log(name);

// ***************ANOTHER EXAMPLE
const someFunction1 = () => {
  const name = "Yemi";
  console.log(name);

  const anotherFunction = () => {
    console.log(name);
  };
  anotherFunction();
};

someFunction1();

// *****************ANOTHER EXAMPLE
const someFunction2 = () => {
  const name = "John";
  console.log(name);
};
const anotherFunction1 = () => {
  const name = "Kanas";
  console.log(name);
};

someFunction2();
anotherFunction1();

// **************************BLOCK SCOPE ****************************
if (true) {
  const name = "Suberu";
  console.log(name);
}

// *************************************************************************** HOISTING **************************************************************************************

console.log(varHoisting);
var varHoisting = 6

//********** EXAMPLE
hoist();
function hoist() {
  var message = "Something";
  console.log(message);
}


// **********EXAMPLE
console.log(num);
var num;

// **********EXAMPLE
hoisted();
function hoisted() {
  var message = "Hoisting is cool";
  console.log(message);
}

// hoisting();
hoisting();
function hoisting() {
  console.log("this function has been hoisted");
}



// *************************************************************************** CLOSURE **************************************************************************************
// ******* EXAMPLE 
const outer = () => {
  const outerVar = 'Hello';

  const inner = () => {
    const innerVar = 'Hi';
    console.log(outerVar, innerVar);
  }
  return inner
}
// outer()()
const innerFn = outer();
innerFn();              //Hello Hi


//******** EXAMPLE
const init = () => {
  const hobby = "Learning javaScript";
  const displayHobby = () => {
    console.log(hobby);
  }
  return displayHobby
}
const hobbies = init()
hobbies()             //Learning javaScript


//******* EXAMPLE 
// const outerFn = () => {
//   const example = "I am outer Function";
//   console.log(example);

//   const innerFn = () => {
//     console.log('I am inner function');

//     const nestedInnerFn2 = () => {
//       console.log("I am nested inner function");
//     }
//     return nestedInnerFn2
//   }
//   return innerFn
// }
// const outerFunction = outerFn()
// const closure1 = outerFunction()
// const closure2 = closure1()
// outerFn()()()



//****** EXECUTION CONTEXT
// JAVASCRIPT SINGLE THREADED

console.log(quadri);
var quadri = 5
console.log(quadri);

// **************************************************************************
let a = 5
console.log(a);  

function trick() {
  console.log(a+3);
}

trick()

// ***************************

// const try1 = function() {
//   let b = 10
//   console.log(b);
// }

// try1()
// console.log(b);

const check = () => {
  let a = 3
  console.log(a*2);
}

check()

console.log(a);

// ******************************

// checkMate()()

function checkMate() {
  let name = "Rocco"
  console.log(`Outer Function is for ${name}`);
    
    function checking() {
      console.log(`The user is ${name}`);
    }

  return checking
}

const checked = checkMate()
checked()


const outerFn = () => {
  const example = "I am outer Function";
  console.log(example);

    const innerFn = () => {
      console.log('I am inner function');

        const nestedInnerFn2 = () => {
          console.log("I am nested inner function");
        }
      return nestedInnerFn2
    }
  return innerFn
}
const outerFunction = outerFn()
console.log(outerFunction);
const closure1 = outerFunction()
console.log(closure1);
closure1()

// outerFn()()()