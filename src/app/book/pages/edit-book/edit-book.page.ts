import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.page.html',
  styleUrls: ['./edit-book.page.scss'],
})
export class EditBookPage implements OnInit {
  book: Book;
  buttonText = 'Update';
  constructor( private bookServ: BookService) { }

  ngOnInit() {
    this.book = this.bookServ.getBook();

  }

}
