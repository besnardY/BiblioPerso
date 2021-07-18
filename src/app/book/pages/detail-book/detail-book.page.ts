import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-detail-book',
  templateUrl: './detail-book.page.html',
  styleUrls: ['./detail-book.page.scss'],
})
export class DetailBookPage implements OnInit {

  book: Book;
  constructor(private bookServ: BookService, private router: Router) { }

  ngOnInit() {
    this.book = this.bookServ.getBook();
  }

  deleteBook(): void{
    this.bookServ.deleteBook();
    this.router.navigate(['tabs/tab1']);
  }

  giveBackBook(): void{
    this.bookServ.backBook();
    this.router.navigate(['tabs/tab1']);
  }

}
