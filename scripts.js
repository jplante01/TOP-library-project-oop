const myLibrary = [];
const bookTable = document.getElementById('book-table');

// Book constructor
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  
  this.info = function() {
    let status = this.read ? 'has been read' : 'not read yet'
    return this.title + ', ' + this.pages + ' pages, ' + status;
  }
}

//Adds book object to library array
function addBookToLibrary(book) {
  myLibrary.push(book);
}

//Adds book to page as table row
function addBookToTable(book) {
 let row = document.createElement('tr');

 row.innerHTML = `
  <td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.pages}</td>
  <td>${book.read}</td>
  <td class="center"><a href="#" ></a>X</td>
  <td class="center"><a href="#" class="delete"></a>X</td>
 `;

 bookTable.appendChild(row);
}

myLibrary.push(new Book('Dune', 'Frank Herbert', 400, true));
myLibrary.push(new Book('Breathe', 'James Nestor', 200, false));


myLibrary.forEach(book => addBookToTable(book));


// UI.prototype.addBookToList = function(book){
//   const list = document.getElementById('book-list');
//   // create tr element
//   const row = document.createElement('tr');
//   row.innerHTML = `
//     <td>${book.title}</td>
//     <td>${book.author}</td>
//     <td>${book.isbn}</td>
//     <td><a href="#" class="delete"></a>X</td>
//   `;

//   list.appendChild(row);
// }
