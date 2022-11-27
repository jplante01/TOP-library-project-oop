let myLibrary = [];

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

function addBookToLibrary(book) {
  myLibrary.push(book);
}


myLibrary.push(new Book('Dune', 'Frank Herbert', 400, true));
myLibrary.push(new Book('Breathe', 'James Nestor', 200, false));

console.log(myLibrary);