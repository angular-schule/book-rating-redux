import {BooksState} from '../_reducers/types';
import { Component, OnInit } from '@angular/core';

import { BookStoreService } from './../shared/book-store.service';
import { BookComponent } from './../book/book.component';
import { Book } from '../shared/book';
import { select } from '@angular-redux/store';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  @select()
  booksState$: Observable<BooksState>;

  constructor(private bs: BookStoreService) { }

  ngOnInit() {

  }

  reorderBooks() {
    //this.books.sort((a, b) => b.rating - a.rating);
  }

  addBookToList(book: Book) {
    //this.books.push(book);
  }
}
