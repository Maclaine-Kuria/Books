// Sample books in the library
let books = [
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925, isAvailable: true },
    { id: 2, title: "1984", author: "George Orwell", year: 1949, isAvailable: true },
    { id: 3, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, isAvailable: true }
];

// Function to render books on the page
function displayBooks(filteredBooks = books) {
    const libraryDiv = document.getElementById("library");
    libraryDiv.innerHTML = ""; // Clear existing content

    filteredBooks.forEach(book => {
        let bookDiv = document.createElement("div");
        bookDiv.classList.add("book");

        bookDiv.innerHTML = `
            <h2>${book.title}</h2>
            <p><strong>Author:</strong> ${book.author}</p>
            <p><strong>Year:</strong> ${book.year}</p>
            <p><strong>Status:</strong> ${book.isAvailable ? "Available" : "Borrowed"}</p>
            <button class="borrow" ${!book.isAvailable ? "disabled" : ""} onclick="borrowBook(${book.id})">Borrow</button>
            <button class="return" ${book.isAvailable ? "disabled" : ""} onclick="returnBook(${book.id})">Return</button>
        `;

        libraryDiv.appendChild(bookDiv);
    });
}

// Function to borrow a book
function borrowBook(bookId) {
    let book = books.find(b => b.id === bookId);
    if (book && book.isAvailable) {
        book.isAvailable = false;
        alert(`You have borrowed "${book.title}".`);
        displayBooks();
    }
}

// Function to return a book
function returnBook(bookId) {
    let book = books.find(b => b.id === bookId);
    if (book && !book.isAvailable) {
        book.isAvailable = true;
        alert(`You have returned "${book.title}".`);
        displayBooks();
    }
}

// Function to add a new book
function addBook() {
    const title = document.getElementById("book-title").value;
    const author = document.getElementById("book-author").value;
    const year = document.getElementById("book-year").value;
    const status = document.getElementById("book-status").value === "true";

    if (title && author && year) {
        const newBook = {
            id: books.length + 1, 
            title,
            author,
            year: parseInt(year),
            isAvailable: status
        };

        books.push(newBook);
        displayBooks();
        document.getElementById("search-bar").value = ""; // Clear search after adding a book
    } else {
        alert("Please fill in all fields.");
    }
}

// Function to search books by title or author
function searchBooks() {
    const query = document.getElementById("search-bar").value.toLowerCase();
    const filteredBooks = books.filter(book => 
        book.title.toLowerCase().includes(query) || 
        book.author.toLowerCase().includes(query)
    );
    displayBooks(filteredBooks);
}

// Initial display of books
displayBooks();

