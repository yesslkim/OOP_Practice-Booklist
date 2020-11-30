//Book class = represents a book
class Book {
  constructor(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}
//UI Class = Handle UI tasks
class UI {
  static displayBooks(){
    const books = Store.getBooks();
    books.forEach(book=> UI.addBookToList(book));
  }

  static addBookToList(book){
    const list = document.querySelector('.book-list > tbody');
    const row = document.createElement('tr');
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><button type="button" class="delete-btn">Delete</button></td>
    `;

    list.appendChild(row);
  }

  static deleteBook(el){
    if(el.classList.contains('delete-btn')){
      el.parentElement.parentElement.remove();
    }
  }

  static clearField(){
    document.querySelector('#title').value='';
    document.querySelector('#author').value='';
    document.querySelector('#isbn').value='';
  }
}

//Store Class = Handles Storage
class Store {
  static getBooks(){
    let books;
    if(localStorage.getItem('books') === null){
      books = [];
    }else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  static addBook(book){
    const books = Store.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBook(isbn){
    const books = Store.getBooks();
    books.forEach((book,index)=>{
      if(book.isbn === isbn){
        books.splice(index,1);
      }
    })
    localStorage.setItem('books',JSON.stringify(books));
  }
}

//Event : Display Books 
document.addEventListener('DOMContentLoaded',UI.displayBooks)

//Event : Add a Book
document.querySelector('#book-form').addEventListener('submit',(e)=>{
  e.preventDefault();
  //get form values;
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const isbn = document.querySelector('#isbn').value;

  if(title==='' || author === '' || isbn === ''){
    alert('빈 값이 있습니다. 다시 입력해주세요!')
  }else {
  //instantiate book
  const book = new Book(title,author,isbn);
  console.log(book)

  //add book to UI
  UI.addBookToList(book);
  Store.addBook(book);
  UI.clearField();
  }
});

//Event : Remove a Book

document.querySelector('.book-list > tbody').addEventListener('click',(e)=>{
  UI.deleteBook(e.target);
  Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
})