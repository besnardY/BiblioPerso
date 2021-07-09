import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BorrowBookPageRoutingModule } from './borrow-book-routing.module';

import { BorrowBookPage } from './borrow-book.page';
import { BorrowFormComponent } from 'src/app/general/borrow-form/borrow-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BorrowBookPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [BorrowBookPage, BorrowFormComponent]
})
export class BorrowBookPageModule {}
