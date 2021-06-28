import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Book } from 'src/app/models/book.model';


// Interface Import
import * as CatMapping from 'src/app/models/catBook.model';
import * as TypeMapping from 'src/app/models/typeBook.model';


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


  constructor() { }

  ngOnInit() {
    this.categories = CatMapping.catMap;
    this.type = TypeMapping.typeMap;

    this.bookForm = new FormGroup({
      title: new FormControl(this.data.title, [Validators.required]),
      authors: new FormControl(this.data.author, [Validators.required]),
      style: new FormControl(this.data.style, [Validators.required]),
      categories: new FormControl(this.data.categories, [Validators.required]),
      publishedDate: new FormControl(this.data.release),
    });

  }

  get f(){
    return this.bookForm.controls;
  }

  public addNewBook(){
    this.submitted = true;
    if (this.bookForm.invalid) {
      return;
    }
  }

  public getNewBook(book: Book){
    this.bookForm.patchValue(book);

  }

  public onClear(){
    this.bookForm.reset();
  }

}
