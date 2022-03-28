import BooksStoreUtilities from '/modules/bookStoreUtils.js';
import DateUtils from '/modules/DateUtils.js';

export default class UiUtils {
    static displayBooks = () => {
      const cardContainer = document.getElementById('books');
      const storedBooks = BooksStoreUtilities.getBooks();
      cardContainer.innerHTML = '';
      let cardElement = '';

      for (let i = 0; i < storedBooks.length; i += 1) {
        cardElement += `<li class="card">
                    <h3 class="content">${storedBooks[i].title}, &nbsp; by &nbsp;&nbsp;</h3>
                    <h3 class="content p-content"><em>${storedBooks[i].author}</em></h3>
                    <div class="btn"><button class='remove' value="${storedBooks[i].title}" type="button"> Remove</button></div>
                </li> <hr>`;
      }
      cardContainer.innerHTML = cardElement;
    }

    static UpdateUi = (event) => {
      const time = document.querySelector('.time');
      window.addEventListener(event, () => {
        this.displayBooks();
        setInterval(DateUtils.getTime(time), 1000);
      });
    }
}