import { Component, OnInit } from '@angular/core';
import { BookComponent } from './../book/book.component';
import { Book } from '../shared/book';

import { Observable } from 'rxjs/Observable';
import { select } from '@angular-redux/store';
import { BooksState } from '../_reducers/types';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {

  @select()
  booksState$: Observable<BooksState>;

  constructor() { }

  reorderBooks() {
    // TODO: REDUX!
    // this.books.sort((a, b) => b.rating - a.rating);
  }

  addBookToList(book: Book) {
    // TODO: REDUX!
    // this.books.push(book);
  }
}
