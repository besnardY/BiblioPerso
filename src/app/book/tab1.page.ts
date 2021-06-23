/* eslint-disable max-len */
import { Component } from '@angular/core';

import { Book } from '../models/book.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  bookList: Array<Book> = [
    {id: '1234', title: 'livre1', author: 'moi',volume: [1,2,3,5], categories:['action', 'aventure', 'Science-fiction'], release:'15/03/1990',
    borrowing: true, borrowerName:'Jean-dupont', borrowingDate:'15/03/1990'},
    {id: '1234', title: 'livre2', author: 'toi',volume: [1,2,3,5], categories:['action', 'aventure'], release:'15/03/1990',
    borrowing: false},
    {id: '1234', title: 'livre3', author: 'eux', categories:['action', 'aventure'], release:'15/03/1990',
    borrowing: false}
  ];
  constructor() {}



}
