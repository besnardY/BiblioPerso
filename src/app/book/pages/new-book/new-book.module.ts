import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewBookPageRoutingModule } from './new-book-routing.module';

import { NewBookPage } from './new-book.page';
import { BookFormComponent } from '../../components/book-form/book-form.component';
import { SearchMediaComponent } from 'src/app/general/search-media/search-media.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewBookPageRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [NewBookPage, BookFormComponent, SearchMediaComponent]
})
export class NewBookPageModule {}
