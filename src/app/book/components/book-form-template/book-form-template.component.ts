import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Book } from 'src/app/models/book.model';
// Interface Import
import * as CatMapping from 'src/app/models/catBook.model';
import * as TypeMapping from 'src/app/models/typeBook.model';
import { BookService } from 'src/app/services/book.service';


@Component({
  selector: 'app-book-form-template',
  templateUrl: './book-form-template.component.html',
  styleUrls: ['./book-form-template.component.scss'],
})
export class BookFormTemplateComponent implements OnInit {

  @Input() data: Book;
  @ViewChild('nexBook') courseForm: NgForm;

  titleResule: string[];
  book: Book;
  categories: Array<CatMapping.Categories>;
  type: Array<TypeMapping.BookType>;

  constructor(private bookServ: BookService) { }

  ngOnInit() {
    this.categories = CatMapping.catMap;
    this.type = TypeMapping.typeMap;
    this.data = {
      id: '',
      title: '',
      author: '',
      style: '',
      categories: [],
      release: '',
      borrowing: false,
    };
  }

  public addNewBook(form: NgForm){

    if(form.valid){
      if (this.fieldCheck(form.value.courseName)) {
        console.log(form.value);
        console.log(form.valid);
      }
    }
  }


  public onClear(){
    this.courseForm.reset();
  }

  public getNewBook(book: Book){
	this.data = {
		id: '',
		title: book.title,
		author: '',
		style: '',
		categories: [],
		release: '',
		borrowing: false,
	  };
}

  private fieldCheck(item: any): boolean{
    console.log(item);
    let check = false;
    if(item !== undefined || item.length > 0){
      check = true;
    }
    return check;
  }

}
