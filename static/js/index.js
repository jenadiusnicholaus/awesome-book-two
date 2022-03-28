/* eslint-disable max-classes-per-file */
/* eslint-disable no-unused-vars */
import UiUtils from '/modules/UI.js';
import BooksStoreUtilities from '/modules/bookStoreUtils.js';

// add book
document.getElementById('addbtn').addEventListener('click', () => {
  const oldBooks = BooksStoreUtilities.getBooks();
  BooksStoreUtilities.addBook(oldBooks);
  UiUtils.displayBooks();
  titleEl.value = '';
  authorEl.value = '';
});

// remove a book
document.getElementById('books').addEventListener('click', (event) => {
  const isButton = event.target.nodeName === 'BUTTON';
  if (!isButton) return;
  BooksStoreUtilities.removeByTitle(event.target.value);
  UiUtils.displayBooks();
});

//  Update ui

UiUtils.UpdateUi('load');