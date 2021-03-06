import { Component, Input, OnInit } from '@angular/core';

import { Book } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.page.html',
  styleUrls: ['./new-book.page.scss'],
})
export class NewBookPage implements OnInit {
  newBook: Book;
  buttonText = 'Add';

  constructor(private bookServ: BookService) {}

  ngOnInit() {
    this.newBook = {
      id: '',
      title: '',
      authors: [],
      style: '',
      categories: [],
      publishedDate: '',
      borrowing: false,
    };
  }

}
