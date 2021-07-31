import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BorrowMoviePageRoutingModule } from './borrow-movie-routing.module';

import { BorrowMoviePage } from './borrow-movie.page';
import { BorrowFormComponent } from 'src/app/general/borrow-form/borrow-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BorrowMoviePageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [BorrowMoviePage, BorrowFormComponent]
})
export class BorrowMoviePageModule {}
