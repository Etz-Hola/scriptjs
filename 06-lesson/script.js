console.log("we go agan today");

const name1 = () => {
  console.log("i love you");
};
name1();

const select = () => {
  const sentence = console.log("i love the guy");
  return sentence;
};
select();

// PARAM AND ARGUMENT

const sayHi = (firstName) => {
  console.log(`Hi, ${firstName}`);
};

sayHi("Joe");

const logAge = (name, age) => {
  console.log(`${name} is ${age} years old`);
};
logAge("Joe", "25");

// GLOBALL SCOPE

const name = "John";
const logName = () => {
  console.log(name);
};

logName();

const name3 = "Qadir";
const globaScope = () => {
  console.log(name3);
};
const globaScope2 = () => {
  console.log(name3);
};

globaScope();

let letter = "Hello";
const logName4 = () => {
  console.log(letter);

  letter = "Hi";
};

logName4();
console.log(letter);




// LOCAL SCOPE

const someFunction = () => {
  const name = "James";
  console.log(name);
};
someFunction();

const someFunction1 = () => {
  const name = "S O J";
  console.log(name);

  const anotherFuction = () => {
    console.log(name);
  };
  anotherFuction();
};

someFunction1();

const someFunction2 = () => {
  const name = "John";
  console.log(name);
};
const anotherFuction1 = () => {
  const name = "Kanas";
  console.log(name);
};
someFunction2();
anotherFuction1();




// BLOCK SCOPE

if (true) {
  const name = "Suberu";
  console.log(name);
}




// HOISTING

var hosting;
console.log(hosting);

function hoist() {
  var message = "something";
  console.log(message);
}
hoist();

console.log(num);
var num;

function hoisted() {
  var message = "Hoisting is cool";
  // return message
  console.log(message);
}
hoisted();

hoisting();
function hoisting() {
  console.log("this function as been hoisted");
}



// hoisting()

const outer = () => {
  const outerVar = "Hello";

  const inner = () => {
    const inerVar = "Hi";
    console.log(outerVar, inerVar);
  };
  return inner;
};

const innerFn = outer;
innerFn();



const inIt = () => {
  const hobby = "Learning JavaScript";
  const displayHobby = () => {
    console.log(hobby);
  };
  displayHobby();
};
inIt();



const thirdExample = () => {
  const example = "example 3";
  console.log(example);
  const anotherFn = () => {
    const example2 = "example 4";
    console.log(example2);
    const anotherFn2 = () => {
       const example3 = "example 5";
       console.log(example3);
    };
    anotherFn2();
  };
  anotherFn();
};
thirdExample();
