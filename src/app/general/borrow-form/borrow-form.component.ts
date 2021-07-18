import { Component, Input, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-borrow-form',
  templateUrl: './borrow-form.component.html',
  styleUrls: ['./borrow-form.component.scss'],
})
export class BorrowFormComponent implements OnInit {
  @Input() element: string;
  borrowForm: FormGroup;
  submitted = false;

  constructor(private bookServ: BookService, private router: Router) { }

  ngOnInit() { this.borrowForm = new FormGroup({
    item: new FormControl(this.element, [Validators.required]),
    borrowerName: new FormControl('', [Validators.required]),
    borrowingDate: new FormControl(this.currentDate())
  });
  }

  currentDate() {
    const currentDate = new Date();
    return currentDate.toISOString().substring(0,10);
  }

  get f() {
    return this.borrowForm.controls;
  }

  addNewElement(){
    this.submitted = true;
    if (this.borrowForm.invalid) {
      return;
    }

    const element = this.borrowForm.value;

    switch (element.item) {
      case 'book':
        this.bookServ.borrowBook(element);
        this.router.navigate(['tabs/tab1']);
        break;
      case 'movie':

        break;
      case 'music':

        break;
      case 'game':

        break;
      default:
        break;
    }
  }
}
