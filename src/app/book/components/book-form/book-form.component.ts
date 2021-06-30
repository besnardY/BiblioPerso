import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Book } from 'src/app/models/book.model';


// Interface Import
import * as CatMapping from 'src/app/models/catBook.model';
import * as TypeMapping from 'src/app/models/typeBook.model';
import { BookService } from 'src/app/services/book.service';


@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss'],
})
export class BookFormComponent implements OnInit {
  @Input() data: Book;
  categories: Array<CatMapping.Categories>;
  type: Array<TypeMapping.BookType>;
  bookForm: FormGroup;
  submitted = false;


  constructor(private bookServ: BookService) { }


  ngOnInit() {
    this.categories = CatMapping.catMap;
    this.type = TypeMapping.typeMap;

    this.bookForm = new FormGroup({
      title: new FormControl(this.data.title, [Validators.required]),
      authors: new FormControl(this.data.authors, [Validators.required]),
      style: new FormControl(this.data.style, [Validators.required]),
      categories: new FormControl(this.data.categories, [Validators.required]),
      publishedDate: new FormControl(this.data.release),
      image: new FormControl(this.data.image),
    });

  }

  // book form control shorcut
  get f(){
    return this.bookForm.controls;
  }

  // submited function form
  public addNewBook(){
    this.submitted = true;
    if (this.bookForm.invalid) {
      return;
    }
    this.bookServ.addBook(this.bookForm.value);
  }

  //get book selected in auto-completed
  public getNewBook(book){
    const IMAGE = book.imageLinks? book.imageLinks.thumbnail : '../assets/icon/book.png';
    this.bookForm.patchValue(book, book.image = IMAGE);
    console.log(book);

  }
  //Clear book form
  public onClear(){
    this.bookForm.reset();
  }

}
