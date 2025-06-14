// Create an array of books containing different book.

// Use the includes method to check if the array contains a javascript book.

// Print a message to the console indicating whether the element is present in the array or not.

const books = ['Python Crash Course','Clean Code', 'You Don’t Know JS', 'Atomic Habits'];
if(books.includes('Eloquent JavaScript')){
    console.log('Yes, the array contains a JavaScript book.');
}
else{
     console.log('No, the array does not contain a JavaScript book.');
}