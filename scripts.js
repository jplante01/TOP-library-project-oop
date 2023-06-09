let myLibrary = [];

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
 let idx = myLibrary.indexOf(book);
 row.setAttribute('data-index', idx);
 let snippet = (book.read) ?
  '<td class="center"><img class="read-icon hide" src="./assets/icons/noun-book-checkmark-265198.svg" alt=""><img class="read-icon" src="./assets/icons/noun-book-257956.svg" alt=""></td>':
  '<td class="center"><img class="read-icon" src="./assets/icons/noun-book-checkmark-265198.svg" alt=""><img class=" hide read-icon" src="./assets/icons/noun-book-257956.svg" alt=""></td>';
  
 row.innerHTML = `
  <td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.pages}</td>
  <td>${book.read}</td>`
  + snippet +
  `<td class="center"><img class="delete" src="./assets/icons/noun-delete-5340923.svg" alt=""></td>
 `;

 document.getElementById('book-table').appendChild(row);
}

//Reload table
function reloadBooks() {
  while(document.getElementById('book-table-header').nextElementSibling !== null) { 
    document.getElementById('book-table-header').nextElementSibling.remove()
  }
  
  myLibrary.forEach(book => addBookToTable(book))
  loadEventListeners();
}

/************************************ Create and add example books for testing ***********************/
myLibrary.push(new Book('Dune', 'Frank Herbert', 400, true));
myLibrary.push(new Book('Breathe', 'James Nestor', 200, false));
myLibrary.push(new Book('The Adventures of Tom Sawyer', 'Mark Twain', 350, true));
myLibrary.push(new Book('Crash', 'Tom Jones', 400, false));
myLibrary.push(new Book('American Kingpin', 'Lex Dire', 400, true));
reloadBooks();
/************************************ Create and add example books for testing ***********************/

function toggleRead(target) {
  
  let sibling = target.nextElementSibling ? target.nextElementSibling : target.previousElementSibling;
  let index = target.parentElement.parentElement.dataset.index;

  if (target.className === 'read-icon'){
    target.className = 'read-icon hide';
    sibling.className = 'read-icon';
  }
   
  myLibrary[index].read = !myLibrary[index].read;
};



function loadEventListeners() {
  
  let readIconNodes = document.getElementsByClassName('read-icon');

  for (i = 0; i < readIconNodes.length; i++) {
    readIconNodes[i].addEventListener('click', (e) => {
      toggleRead(e.target);
    });
  } 
  
  let deleteNodes = document.getElementsByClassName('delete');

  for (i = 0; i < deleteNodes.length; i++) {
    deleteNodes[i].addEventListener('click', (e) => {
      let index = e.target.parentElement.parentElement.dataset.index;
      myLibrary.splice(index, 1);
      reloadBooks();
    });
  }

}

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
  reloadBooks();
  closePopUp();
  clearFields();

  e.preventDefault();
});

// test
// test again