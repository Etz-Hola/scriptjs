import {animals, schools} from "./dog.js"
console.log(animals, schools);




// step 1
// create an array of object called library. Add 3
// object with a property of title, author, status.Title and author should
// be string (whatever value u want) and status should be another object with
// the properties of own, reading and read. which should all be boolean value
// for all status, set own to true and rewarding them to false

// step 2
// you finished reading all the books. set the read value for all
// of them to true. Do not edit the initial object. set the value
// using dot notation.

// step 3

// Destructure the title the first book and rename the variable the firstbook

// step 4
// Turn the library object in to a JSON string

// Step 1
const library = [
    {
      title: "	Something Wicked This Way Comes",
      author: "Ray Bradbury",
      status: {
        own: true,
        read: false,
        reading: false,
      },
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      status: {
        own: true,
        read: false,
        reading: false,
      },
    },
    {
      title: "The Unbearable Lightness of Being",
      author: "Milan Kundera",
      status: {
        own: true,
        read: false,
        reading: false,
      },
    },
  ];
  



  //Second  Step 
  library.forEach((book) => {
    book.status.read = true;
  });
  
  // 3rd Step
  const [firstBook,,,remainBooksToRead] = library;
  
  // 4rd Step
  const liJsonStrings = JSON.stringify(library);
  
  console.log(firstBook);
  console.log(liJsonStrings);






  