const myName = {
    firsName: 'Qadir',
    lastName: 'Adesoye',
    gender: 'male',
    age: '18',
    car: {
        carName: "Tesla",
        color: "black",
        year: "2021"
    },
};

console.log(myName);
console.log(myName.car);
console.log(myName["car"]);


const naInfo = Object.keys(myName);
console.log(naInfo);

const naValue = Object.values(myName)
console.log(naValue);

const naEntries = Object.entries(myName)
console.log(naEntries);

