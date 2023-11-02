console.log('Hello World');

const functionOne = () => {
   console.log("Function One");
   functionTwo();
   console.log("Function One, Part Two");
};

const functionTwo = () => {
   console.log("Function Two");
}

functionOne();

//********************************************************
// const fetchUser = (username) => {   
//    setTimeout(() => {
//       return{user: username};
//    }, 3000)
// } 

// const user = fetchUser('Bolaji');
// console.log(user);


// const fetchUser = (username, callback) => {   
//    setTimeout(() => {
//       return callback({user: username});
//    }, 3000)
// } 

// const fetchUserPhoto = (callback) => {
//    setTimeout(() => {
//       return callback(['Photo1', 'Photo2'])
//    }, 2000)
// }

// const fetchUserMail = (callback) => {
//    setTimeout(() => {
//       return callback({email: 'lagbaja@gmail.com'})
//    }, 2000)
// }

// const fetchUserFriends  = (callback) => {
//    setTimeout(() => {
//       return callback({friend1:'Bolaji', friend2: 'Kemi', friend3: 'Kunle'})
//    }, 2000)
// }

// fetchUser('Bolaji', (user) => {
//    console.log(user);
//    fetchUserPhoto((userPhoto) => {
//       console.log(userPhoto);
//       fetchUserMail((email) => {
//          console.log(email);
//          fetchUserFriends((userFriends) => {
//             console.log(userFriends);
//          })
//       })
//    })
// });


// **************************************************PROMISE****************************************

/*
new Promise((resolve, reject) => {
   setTimeout(() => {
      reject();
   }, 2000)
}).then(() => {  //.then is needed
}).catch(() => {
})

new Promise((resolve, reject) => {
   setTimeout(() => {
      // resolve({user: "Adrian"})
      reject('Error fetching the data');
   }, 2000)
}).then((user) => {  //.then is needed
   console.log(user);
}).catch((err) => {
   console.log(err);
})
*/


// *******************************************************
// SYNTAX 
const promise = new Promise ((resolve, reject) => {
   resolve()
   reject()
})

promise.then(() => {}).catch(() => {})

// *********************************************************************
const fetchUser = (username) => {
   return new Promise ((resolve, reject) => {
      setTimeout(() =>{
         console.log('Successfully get the user< ali');
         resolve({user:username});
         reject('Error fetching user')
      }, 2000)
   })
};

const fetchUserPhoto = () => {
   return new Promise ((resolve, reject) => {
      setTimeout(() => {
         console.log("User photo fetched successfully");
         resolve(['Photo1', 'Photo2']);
         reject('Photo not fetched');
      }, 2000)
   })
}


const fetchUserMail = () => {
   return new Promise ((resolve, reject) => {
      setTimeout(() => {
         console.log('mail fetched successfully');
            resolve({email: 'lagbaja@gmail.com'})
            reject ('email not fetched')
          }, 2000)
   })
 }

//  *******Promises Fetch Using .then and .catch*************
/*
fetchUser('Ali')
.then((user) => console.log(user))
.then((user) => fetchUserPhoto(user))
.then((userPhoto) => console.log(userPhoto))
.then((user) => fetchUserMail(user))
.then((userMail) => console.log(userMail))
.catch((err) => console.log((err)))
*/


// *****************Fetch using Async/await promises Method ***************
const fetchNumber = async() => {
   return 25
}
// fetchNumber().then((number) => console.log(number))


// ******************************
const consoleFetchNumber = async () => {
   const fetch = await fetchNumber()
   console.log(fetch);

}
consoleFetchNumber();

// *********************************
const displayData = async () => {
   const user = await fetchUser('Supreme')
   const userPhoto = await fetchUserPhoto()
   const userMail = await fetchUserMail()

   console.log(user);
   console.log(userPhoto);
   console.log(userMail);
}

displayData()