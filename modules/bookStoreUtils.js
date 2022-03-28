/* eslint-disable max-classes-per-file */
/* eslint-disable no-unused-vars */
import ElementUtils from './elementsUtils.js';

const message = document.getElementById('message');
const addBookFormEl = document.querySelector('#form');
const mainContainerEl = document.getElementById('container');
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

// utility methods
export default class BooksStoreUtilities {
    static getBooks =() => JSON.parse(localStorage.getItem('books') || '[]');

    static removeByTitle =(title) => {
      const books = this.getBooks();
      const filteredBooks = books.filter((item) => item.title !== title);
      localStorage.setItem('books', JSON.stringify(filteredBooks));
    }

    static addBook = (books) => {
      const author = ElementUtils.getElementById('author').value;
      const title = ElementUtils.getElementById('title').value;
      if (books.some((book) => book.title === title)) {
        message.textContent = 'Title must be unique';
        message.style.display = 'block';
      } else if (title === '' && author === '') {
        message.textContent = 'Fill in all the field';
        message.style.display = 'block';
      } else {
        books.push(new Book(title, author));
        localStorage.setItem('books', JSON.stringify(books));
        message.textContent = '';
        message.style.display = 'none';
        addBookFormEl.style.display = 'none';
        mainContainerEl.style.display = 'block';
      }
    }
}