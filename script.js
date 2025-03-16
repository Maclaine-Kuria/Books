let books = {
  (id: 1, title: "The great Gataby", author: "F. Scott Fitzgerald", year: 1925, isAvailable: true),
  (id: 2

    // Function to render booka on the page
function displayBooks ( )  (
const l1braryDiv - document.getElementById("11brary");
l1braryDiv.jnnerHTML - ""; // Clear existing content
books.forEach(book=>1
let bookDiv= document.createElement("div");
bookDiv.classList.add("book");

baokDiv.innerHTML=
<h2>$(book.title}</h2>
<p><strong>Author:</strong> $(book.author)</p>
<p><strong>Year:</strong> $ {book. year}</p>
<p><strong>Status:</strong> ${book.isAvailable ? "Available" :"Borrowed"}</p>
<button class="borrow" $(!book.isAvailable ? "disabled" : "")
onclick="borrowBook ($ {book. id}) ">Borrow</button>

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
