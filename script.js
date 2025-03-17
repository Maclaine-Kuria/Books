// Sanple books in the library
let books"[
( id: 1, title: &quot;The Great Gatsby&quot;, author: &quot;F. Scote Fitzgerald&quot;,year: 1925, isAvailable: true)
( id: 2, title: &quot;1984&quot;, author: &quot;George Orwell&quot;, year: 1949.iaAvailable: true)
( id: 3, title: &quot;To Kill a Mockingbird&quot;, author: &quot;Harper Lee&quot;, year:1960, isAvailable: true )
];
// Function to render books on the page
function displayBooks() {
const libraryDiv - document.getElementById{&quot;library&quot;);
libraryDiv.JnnerHTML - -m; // Clear existing content
books,forEach(book-&gt;(
let bookbiv - document.createElement(&quot;div&quot;}:
bookDiv.classList.add(&quot;book&quot;);
bookDiv.InnerHTML-
&lt;h2&gt;s(book,title)&lt;/h2&gt;
&lt;p&gt;&lt;strong&gt;uthor:&lt;/ntrong&gt; $(book.author}&lt;/p&gt;
&lt;p&gt;&lt;strong&gt;Year:&lt;/strong&gt; $lbook.yearj&lt;/p&gt;
&lt;p&gt;&lt;strong&gt;Status:&lt;/strong&gt; $lbook.isAvailable ? &quot;Available&quot;:

&quot;Borrowed&quot;}&lt;/p&gt;

&lt;button class-&quot;borrow&quot; $(lbook,isAvailable ?

&quot;disabled&quot;:&quot;&quot;1onclick=&quot;borrowBook($lbook.id)}&quot;&gt;Borrow&lt;/button&gt;
&lt;button class-&quot;return&quot; $(book,isAvallable ? &quot;disabled&quot;:--1

onclick-&quot;returnBook(${[book.id}}&quot;&gt;Return&lt;/button&gt;

;
libraryDiv.appendChild (bookDiv):
)1:
1
// Function to borrow a book
function borrowBook(bookId)(
let book - pooks.findlb -&gt; b.id --- bookId):
if (book ssfbook.isAvailable) {
book.isAvallable- false:
alert(&#39;You have borrowed &quot;${book.title)&quot;.&#39;};
displayBooks0):

// Function to return a book
function returnBook(bookId)(
let book - books.find(b-&gt;b.id --- bookId);
1f tbook 66 lbook.isAvallable) {
book.isAvallable - true:
alert( You have returned &quot;$ibook.titlei&quot;.):
displayBooks():

// Initial display of books
displayBooks():
