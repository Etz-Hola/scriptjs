console.log('Hello World');

//synchronous in javaScript

const functionOne = () => {
    console.log("Function One");
    functionTwo();
    console.log("Function One, Part Two");
};


//Asynchronous in javaScript



//this is how to write  setTimer  sintas
// setTimeout(() => {
    
// }, timeout);

const functionTwo = () => {
    setTimeout(() => {
        console.log("Function Two");
    }, 3000)
}

functionOne();




//Simulating data fetching

// const fetchUser = (username) => {
//     setTimeout(() => {
//         return{user: username};
//     }, 2000);
// }
// const user = fetchUser("Bolaji");
// console.log(user);






// const fetchUser = (username, callback) => {
//     setTimeout(() => {
//         return callback({user: username})
//     }, 2000);
// }

// const fetchUserPhoto = (callback) => {
//     setTimeout(() => {
//         return callback(["photo1", "Photo2"])
//     }, 2000)
// }

// const fetchUserMail = (callback) => {
//     setTimeout(() => {
//         return callback({ email: "lagbaja@gmail.com" })
//     }, 2000)
// }

// const fetchUserFrinds = (callback) => {
//     setTimeout(() => {
//         return callback([ 'Shola', "Tola", "Fola"])
//     }, 2000);
// }

// //callback Hell
// fetchUser("Bolaji", (user) => {
//     console.log(user);
//     fetchUserPhoto((userPhoto) => {
//         console.log(userPhoto);
//         fetchUserMail((email) => {
//             console.log(email);
//             fetchUserFrinds((UserFrind) => {
//                 console.log(UserFrind);
//                 fetchUserFrinds((UserFrind) => {
//                     console.log(UserFrind);
//                     fetchUserFrinds((UserFrind) => {
//                         console.log(UserFrind);
//                         fetchUserFrinds((UserFrind) => {
//                             console.log(UserFrind);
//                         });
//                     });
//                 });
//             });
//         });
//     });
// });



//This is thee sintacts for Promise

// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve ()
//         reject();
//     });
// })
// .then(() => {

// })
// .catch(() => {

// });


new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve ({user: "Adrian"})
        reject("Error fetching the data");
    }, 2000);
})
.then((user) => {
    console.log(user);
})
.catch((err) => {
    console.log(err);
});





const promise = new Promise((resolve, reject) => {
        resolve ()
        reject();
    })
promise.then(() => {}).catch(() => {});

const fetchUser = (username) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Successfully get the user, ${username}`);
            resolve({ user: username });
            reject("Error fetching user");
        }, 2000);
    });
};

const fetchUserPhoto = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("user photo fetched successfully");
            resolve(["photo1", "Photo2"]);
            reject("Photo not fetched");
        }, 2000);
        
    });
};

const fetchUserMail = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("user mail fetched successfully");
            resolve(["mymail@gmail.com"]);
            reject("mail not fetched");
        }, 2000);
        
    });
};

//promis is then and cathch methord 

// fetchUser("Ali")
// .then((user) => console.log(user))
// .then((user) => fetchUserPhoto(user))
// .then((userPhoto) => console.log(userPhoto[1]))
// .then((user) => fetchUserMail(user))
// .then((userMail) => console.log(userMail))
// .catch((err) => console.log(err));



// Asyne/ await promises function
//they look and behave like synchronus 

const fetchNumber = async () => {
    return 25
};

// fetchNumber().then((number) => console.log(number));

const consoleFetchNumber = async () => {
    const fetch = await fetchNumber()
    console.log(fetch);
}
consoleFetchNumber();

const displayData = async () => {
    const user = await fetchUser("MR. Supreme");
    const userPhoto = await fetchUserPhoto();
    const userMail = await fetchUserMail();

    console.log(user);
    console.log(userPhoto);
    console.log(userMail);
}

displayData();