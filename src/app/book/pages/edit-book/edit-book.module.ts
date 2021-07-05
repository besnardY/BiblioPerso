import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditBookPageRoutingModule } from './edit-book-routing.module';

import { EditBookPage } from './edit-book.page';
import { BookFormComponent } from '../../components/book-form/book-form.component';
import { SearchMediaComponent } from 'src/app/general/search-media/search-media.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditBookPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [EditBookPage, BookFormComponent, SearchMediaComponent]
})
export class EditBookPageModule {}
