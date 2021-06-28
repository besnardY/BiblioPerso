import { Component, ElementRef, OnInit, Output, ViewChild } from '@angular/core';
import { Book } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book.service';
import { EventEmitter } from '@angular/core';



@Component({
  selector: 'app-search-media',
  templateUrl: './search-media.component.html',
  styleUrls: ['./search-media.component.scss'],
})
export class SearchMediaComponent implements OnInit {
  @Output() datasBook = new EventEmitter();
  book: any;
  isItemAvailable = false;


  constructor(private bookServ: BookService) {}

  ngOnInit() {}

  public onKeyUp(ev: any) {
    const val = ev.target.value;
    if(val && val.trim !== ''){
      this.isItemAvailable = true;
      this.search(val);
    }
  }

  public setBook(item: any) {
	  this.datasBook.emit(item.volumeInfo);
    this.book = [];
  }

  public search(term): void {
    this.bookServ.searchBook(term).subscribe(
      (datas) => {
        this.book = datas.items;
      },
      (err) => console.log(err)
    );
    console.log(this.book);
  }
}
