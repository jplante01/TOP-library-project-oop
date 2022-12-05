const myLibrary = [];

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
  <td class="center"><img class="read-icon hide" src="./assets/icons/noun-book-checkmark-265198.svg" alt=""><img class="read-icon" src="./assets/icons/noun-book-257956.svg" alt=""></td>
  <td class="center"><img src="./assets/icons/noun-delete-5340923.svg" alt=""></td>
 `;

 document.getElementById('book-table').appendChild(row);
}

myLibrary.push(new Book('Dune', 'Frank Herbert', 400, true));
myLibrary.push(new Book('Breathe', 'James Nestor', 200, false));


myLibrary.forEach(book => addBookToTable(book));

function toggleRead(target) {
  
  let sibling = target.nextElementSibling ? target.nextElementSibling : target.previousElementSibling;

  if (target.className === 'read-icon'){
    target.className = 'read-icon hide';
    sibling.className = 'read-icon';
  }
};

function closePopUp() {
  document.getElementById('pop-up').className = 'hide';
}; 

function openPopUp() {
  document.getElementById('pop-up').className = '';
}; 

//Close pop-up window
document.getElementById('close-form-btn').addEventListener('click', ()=>{
  closePopUp();
});

//Open pop-up window to enter book
document.getElementById('new-book-btn').addEventListener('click', ()=> {
  openPopUp();
});

function clearFields() {
    document.getElementById('name').value = '',
    document.getElementById('author').value = '',
    document.getElementById('pages').value = '',
    document.getElementById('read').value = ''
};

//Submit pop-up form and add book object to myLibrary array
document.getElementById('new-book-form').addEventListener('submit', (e)=>{
  let newBook = new Book(
    document.getElementById('name').value,
    document.getElementById('author').value,
    Number(document.getElementById('pages').value),
    Boolean(document.getElementById('read').value)
  );

  myLibrary.push(newBook);
  addBookToTable(newBook);
  closePopUp();
  clearFields();

  e.preventDefault();
});
