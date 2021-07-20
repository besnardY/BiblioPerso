import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book.service';


@Component({
  selector: 'app-book-list-prop',
  templateUrl: './book-list-prop.component.html',
  styleUrls: ['./book-list-prop.component.scss'],
})
export class BookListPropComponent implements OnInit {
  @Input() item: Book;

  constructor(private router: Router, private bookServ: BookService) { }

  ngOnInit() {}

  selectBook(book: Book){
    this.bookServ.defineBook(book);
    this.router.navigate(['/detail-book']);
  }


}
