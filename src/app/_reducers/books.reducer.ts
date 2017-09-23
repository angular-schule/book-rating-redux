import { IActionPayload } from '../_actions/actionPayload';
import { Book } from './../shared/book';
import { Action } from 'redux';
import * as si from 'seamless-immutable';

import { BooksActions } from '../_actions/books.action';
import { BooksState } from './types';

const INITIAL_BOOKS_STATE: BooksState = si.from({
  books: [],
  isLoading: false,
  selected: Book.empty()
});

export function booksReducer(
  state: BooksState = INITIAL_BOOKS_STATE, action: IActionPayload<Book[] | string>
): BooksState {

  switch (action.type) {

    case BooksActions.LOAD_PENDING:
      return state.set('isLoading', true);

    case BooksActions.LOAD_COMPLETED:
      return state.set('isLoading', false)
                  .set('books', action.payload);

    case BooksActions.BOOK_SELECTED:
      const foundBook = state.books.find(b => b.isbn === action.payload);
      return foundBook ? state.set('selected', foundBook) : state;

  default:
    return state;
  }
}
