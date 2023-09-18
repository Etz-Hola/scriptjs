console.log("hello Monday");

//HIGHER ODER FUNCTION
//A higher order function is a function that takes one or more functions as arguments, or returns a function as its result. There are several different types of higher order functions like map and reduce





//it accep and take a funtion as a paremeter, or return a function back to you.
//why function take an 

//higher order function as to do with some methord bellow (the following methord are cxalled higher order function)
//(1) forEach methord
//(2) filth methord
//(3) map methord
//(4) sort methord
//(5) reduce methord



//HIGHER ODER FUNCTION
function double(n) {
    return n * 2
}
// double(5)
console.log(double(5));


const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

  //for loop method
  for (let i = 0; i < companies.length; i++) {
    console.log(companies[i]);
  }

  //forEach method
  companies.forEach(function(Company) {
    console.log(Company.name);
  })

  //Filter method
  //get 21 and older

//   let canDrink = []
//   for (let i = 0; i < ages.length; i++) {
//     if (ages [i] >= 21) {
//         canDrink.push(ages[i])
//     }
//   }
//   console.log(canDrink);


//filter method
// const canDrink = ages.filter(function (age) {
//     if(age >= 21) {
//         return true
//     }
// })
// console.log(canDrink);



const canDrink = ages.filter(age => age >=21)
console.log(canDrink);


// const retailsCompanies = companies.filter(function(company) {
//     if (company.category =="Retail") {
//         return true
//     }
// })
// console.log(retailsCompanies);


const retailsCompanies = companies.filter(company => company.category == "Retail")
console.log(retailsCompanies);



const lastedTenYear = companies.filter(company => (company.end - company.start >= 10))
console.log(lastedTenYear);



const companyName = companies.map(function (company) {
    return company.name
})
console.log(companyName);

//marp method
const testMap = companies.map(company => `${company.name}
 [${company.start} - ${company.end}]`);
 console.log(testMap);



const agemap = ages
        .map(age => Math.sqrt(age))
        .map(age => age * 2)
      console.log(agemap);


      //Sort method
// const soredCompanies = companies.sort(function(c1, c2) {
//         if (c1.start > c2.start) {
//           return 1
//         } else{
//           return -1
//         }
// })

// console.log(soredCompanies);

const soredCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1))
console.log(soredCompanies);

const sortAges = ages.sort((a, b) => a-b)
console.log(sortAges);
//reduce method
let ageSum = 0
for (let i = 0; i < ages.length; i++) {
  ageSum += ages[i]

}
console.log(ageSum);



const ageSum1 = ages.reduce(function(total, age) {
  return total + age
}, 0)

console.log(ageSum1);

//ES6 styles
const ageSum2 = ages.reduce((total, age) => total + age, 0)

console.log(ageSum2);

//to get the total years of all companies
const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0)
console.log(totalYears);

//combined all method
const combined = ages
  .map(age => age * 2)
  .filter(age => age >= 40)
  .sort((a, b) => a-b)
  .reduce((a, b) => a +b, 0)

console.log(combined);


//Spread and rest Operator (...)
const add = (a, b) => {
  return a + b
}
console.log(add(2, 2, 2, 2));

//rest operator
const addNo = (... args) => {
  return args.reduce((acc, val) => acc + val)
}
console.log(addNo(2, 2, 2, 2));


const numbers = [1, 2, 3, 4, 5]
numbers.push(6)
console.log(numbers);

const numbers1 = [1, 2, 3, 4, 5]
console.log(numbers1);
const newNumbers = [... numbers1, 6, 7 , 8]
  console.log(newNumbers);


//object and array Destructuring
const persons = {
  firstName: "Gary",
  lastName: "Vee",
    car: {
      color: "Red",
      wheel: 4
    },
    animal: {
      dog: {
        name: "Fluffy",
        age: 20
      },
      cat: {
        name: "Kitty",
        age: 10
      }
    }
}
console.log(persons);

//Destructuring
const {firstName, lastName, car:{color,wheel}, animal:{cat, dog}} = persons
console.log(persons);



//Array
const introduction = ["Hello", "i", "am", "Surah"]
console.log(introduction);
const [greeting,,,name] = introduction
console.log(greeting, name);


