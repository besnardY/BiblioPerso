import { Component, ElementRef, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Book } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book.service';
import { EventEmitter } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-search-media',
  templateUrl: './search-media.component.html',
  styleUrls: ['./search-media.component.scss'],
})
export class SearchMediaComponent implements OnInit {
  @Output() datasBook = new EventEmitter();
  @Output() datasMovie = new EventEmitter();
  @Input() item: string;
  book: any;
  movie: any;
  isItemAvailable = false;
  searchForm: FormGroup;

  constructor(private bookServ: BookService, private movieServ: MovieService) {}

  ngOnInit() {
    this.searchForm = new FormGroup({
      search: new FormControl('', [Validators.required]),
    });
  }

  public onKeyUp() {

    const val = this.searchForm.value.search;
    if (this.searchForm.invalid) {
      return;
    }

    if(val && val.trim !== ''){
      this.isItemAvailable = true;
      this.search(val);
    }
  }

  public setBook(item: any) {
	  this.datasBook.emit(item.volumeInfo);
    this.book = [];
  }

  public setMovie(item: any) {
     this.movieServ.getMoviebyApi(item.id).subscribe(
      (datas) => {
        this.datasMovie.emit(datas);

      }, (err) => console.log(err)
    );

    this.movie = [];
  }

  public search(term): void {

    switch (this.item) {
      case 'book':

        this.bookServ.searchBook(term).subscribe(
          (datas) => {
            this.book = datas.items;
          },
          (err) => console.log(err)
        );
        break;
      case 'movie':

        this.movieServ.searchId(term).subscribe(
          (datas) => {
            this.movie = datas.results;
            console.log(datas.results);


          },
          (err) => console.log(err)
        );
        break;


      default:
        break;
    }
  }
}
