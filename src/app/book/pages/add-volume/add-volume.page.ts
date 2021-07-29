import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Book } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-add-volume',
  templateUrl: './add-volume.page.html',
  styleUrls: ['./add-volume.page.scss'],
})
export class AddVolumePage implements OnInit {
  book: Book;
  volArr: Array<number> = new Array;
  volumeForm: FormGroup;
  sortedArray: number[];

  constructor(private bookServ: BookService, private router: Router) { }

  ngOnInit() {
    this.book = this.bookServ.getBook()
    if(this.book.volume !== undefined){
      this.volArr = this.book.volume;
      this.sortedArray = this.volArr.sort((n1,n2) => n1 - n2);
    }
    this.volumeForm = new FormGroup({
      vol: new FormControl('', Validators.required)
    });
  }


  addVolume(){
    const vol = this.volumeForm.value.vol;


    if (vol !== ' ' && !this.volumeForm.invalid) {
      this.volArr.push(vol);
      this.sortedArray = this.volArr.sort((n1,n2) => n1 - n2);
      this.volumeForm.reset();
    }
   }

   removeVol(i: number){
     if (this.sortedArray.length > -1) {
       this.sortedArray.splice(i, 1);
     }

   }

   addToBook(){
    this.bookServ.addVolumeBook(this.sortedArray);
    this.router.navigate(['tabs/tab1']);
   }

}
