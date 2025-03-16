let books = {
  (id: 1, title: "The great Gataby", author: "F. Scott Fitzgerald", year: 1925, isAvailable: true),
  (id: 2
<button class="return" $(book.isAvailable ? "disabled" : "")
onclick="returnBook ($ibook.id) ) ">Return</button>
;

libraryDiv.appendChild(bookDiv);
1);
2

// Function to borrow a book
function borrowBook (bookId){
let book - pooks.find(b -> b.id --- bookId);
if (book sclbook.isAvailable) (
book.isAvailable - false;
alert('You have borrowed "$(book.title)".');
displayBooks  ();



// Function to return a book
function returnBook(bookId){
let book = books.find(b => b.id =mm bookId);
if (book && !book.isAvailable) (
book.isAvailable = true;
alert ('You have returned "$(book.title)".');
displayBooks  ( );



// Initial display of books
displayBooks (  );
