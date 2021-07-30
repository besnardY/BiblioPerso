import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Book } from 'src/app/models/book.model';
import { AlertService } from 'src/app/services/alert.service';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-detail-book',
  templateUrl: './detail-book.page.html',
  styleUrls: ['./detail-book.page.scss'],
})
export class DetailBookPage implements OnInit {
  book: Book;

  constructor(
    private bookServ: BookService,
    private router: Router,
    private alertServ: AlertService
  ) {}

  ngOnInit() {
    this.book = this.bookServ.getBook();
  }

  deleteBook(): void {
    this.alertServ.presentAlert()
      .then((value) => {
        if (value.role !== 'cancel') {
            this.bookServ.deleteBook();
            this.router.navigate(['tabs/tab1']);
        }
      })
      .catch((e) => console.log(e));
  }

  giveBackBook(): void {
    this.bookServ.backBook();
    this.router.navigate(['tabs/tab1']);
  }

}
