/* eslint-disable max-len */
import { Component } from '@angular/core';

import { Book } from '../../models/book.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  bookList: Array<Book> = [
    {id: '1234', title: 'Le seigneur des anneaux', author: 'David A. Vise', image: 'http://books.google.com/books/content?id=zyTCAlFPjgYC&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE70O4p_T-uO0pOCeMgQKAoLlyTEpI1PpVY02IH8Eqx95XM0u1yFlSIDCV-YGUKI1mjTrrHEfKsQjvPRHiKkZFDvkDG3o4mmB5hJ6cGKoNpxlqmbfOJAl8sBDsE_mmakOLYDErv2u&source=gbs_api',volume: [1,2,3,5], categories:['action', 'aventure', 'Science-fiction'], style: 'Roman' ,release:'15/03/1990',
    borrowing: true, borrowerName:'Jean-dupont', borrowingDate:'15/03/1990'},
    {id: '1234', title: 'livre2', author: 'toi', image: 'http://books.google.com/books/content?id=zyTCAlFPjgYC&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE70O4p_T-uO0pOCeMgQKAoLlyTEpI1PpVY02IH8Eqx95XM0u1yFlSIDCV-YGUKI1mjTrrHEfKsQjvPRHiKkZFDvkDG3o4mmB5hJ6cGKoNpxlqmbfOJAl8sBDsE_mmakOLYDErv2u&source=gbs_api', volume: [1,2,3,5], categories:['action', 'aventure'], style: 'Roman', release:'15/03/1990',
    borrowing: false},
    {id: '1234', title: 'livre3', author: 'eux', categories:['action', 'aventure'], style: 'Roman', release:'15/03/1990',
    borrowing: false}
  ];
  icon = '';
  constructor() {}



}
