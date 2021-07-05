/* eslint-disable max-len */
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { BookService } from 'src/app/services/book.service';

import { Book } from '../../models/book.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  bookList: Array<Book>;
  icon = '';

  constructor(private bookServ: BookService, private navCtrl: NavController) {
    this.bookServ.getAllBook().subscribe((datas => {
      if(datas !== undefined){
        this.bookList = datas;
      }else{
        this.bookList = [];
      }
    }));
    console.log(this.bookList);
  }

  openNewBook(){this.navCtrl.navigateForward('new-book');

  }

}
