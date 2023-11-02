
const library = [
    {
      title: "Assassin Creed",
      author: "Roccomania",
      status: {
        own: true,
        reading: false,
        read: false,
      },
    },

    {
      title: "Adventures of Tom Sawyer",
      author: "Mark Twain",
      status: {
        own: true,
        reading: false,
        read: false,
      },
    },

    {
      title: "Ancient Mariner",
      author: "Coleridge",
      status: {
        own: true,
        reading: false,
        read: false,
      },
    },
  ];
  

  library.forEach(book => book.status.read = true);
  
  const [firstBook,,, otherBooks] = library;

  const libraryStringify = JSON.stringify(library);
  
  // The first book's title
  console.log(firstBook); 

  // The library as a JSON string
  console.log(libraryStringify); 