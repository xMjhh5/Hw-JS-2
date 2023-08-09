//Create an array called "books" that contains at least 5 objects,
let books = [
    {
        "title": "book 1",
        "author": "Mohammed",
        "pages": 200,
        "available": true,
    },
    {
        "title": "book 2",
        "author": "Ali",
        "pages": 300,
        "available": true,
    },
    {
        "title": "book 3",
        "author": "faisl",
        "pages": 200,
        "available": false,
    },
    {
        "title": "book 4",
        "author": "khald",
        "pages": 150,
        "available": true,
    },
    {
        "title": "book 5",
        "author": "Hassan",
        "pages": 400,
        "available": false,
    },
]

//Use a for loop to iterate through the books array and print out the title, author, and number of pages for each book.
for (const i in books) {
    let book = books[i];
    console.log("title : " + book.title , " , author : " + book.author + " ,pages : " + book.pages);
    }

//Create a function called "borrowBook" that takes in two parameters,
// the title of the book and the name of the borrower. The function should check if the book is available for borrowing,
// and if so, it should update the book's availability to false and add a new property to the book object called "borrower" with the value of the borrower's name.
// If the book is not available, the function should print out a message saying so.
let title;
let borrowerName;
function borrowBook(title , borrowerName) {
    let book = books.find((e) => (e.title == title));
    if (book) {
        if (book.available) {
            book.available = false;
            book.borrower = borrowerName;
            console.log(book.borrower + " has borrowed " + book.title);
            return;
        } else {
            console.log(title + " is not available for borrowing.")
        }
    }else{
        console.log(title + " does not exist");
        return;
    }

}

console.log("----------------------------------------");
console.log();

//Create a function called "returnBook" that takes in the title of the book as a parameter.
//  The function should check if the book has a "borrower" property and if so, it should update the book's
//   availability to true and remove the "borrower" property.
// If the book does not have a "borrower" property, the function should print out a message saying that the book was never borrowed.

function returnBook(title) {
    let book = books.find((e) => (e.title == title));
    if (book) {
        if (book.borrower) {
            book.available = true;
            delete book.borrower;
        
            console.log("update property borrowed ");
            return;
        } else {
            console.log(title + " book was never borrowed")
        }
    }else{
        console.log(title + " does not exist");
        return;
    }
    
}

//Test your functions by borrowing and returning a few books from the books array.
borrowBook("book 1" , "saad");
returnBook("book 1");
console.log("----------------------------------------");
console.log();


//Use a for loop to iterate through the books array and print out the title, author, number of pages, and borrower (if any) for each book.
borrowBook("book 4" , "Turki");
for (const i in books) {
    book = books[i];
    let checkValue = book.borrower == undefined ? book.borrower = "No Name" : null;
     borrower = checkValue;
     console.log("Title : " + book.title + " , Author : " + book.author + " , Pages : " + book.pages + " , borrower Name : " + book.borrower);
}

console.log("----------------------------------------");
console.log();
//Create a function called "addBook" that takes in an object representing a new book and adds it to the books array.
function addBook(newBook){
    books.push(newBook);
    console.log("New book add" )
}
let NewBook = {
    "title": "book 6",
    "author": "kmal",
    "pages": 80,
    "available": false,
}
addBook(NewBook);

console.log("----------------------------------------");
console.log();
//Create a function called "searchBook" that takes in a search term as a parameter and returns an array of all books
// in the books array that contain the search term in the title, author or borrower name.
function searchBook(term){
    let newArr = [];
    // const isContain= books.includes(term)
    for (const i in books) {
        book = books[i];
    if (book.title.includes(term) || book.author.includes(term) || book.borrower === term) {
        newArr.push(book);
        return newArr;
    }   
}

}

//Test your searchBook function by calling it with different search terms and print out the results.
console.log(searchBook("li"));
console.log(searchBook("fai"));
console.log(searchBook("5"));