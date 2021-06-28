import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book.model';

@Component({
  selector: 'app-book-list-prop',
  templateUrl: './book-list-prop.component.html',
  styleUrls: ['./book-list-prop.component.scss'],
})
export class BookListPropComponent implements OnInit {
  @Input() item: Book;

  constructor() { }

  ngOnInit() {}

}
