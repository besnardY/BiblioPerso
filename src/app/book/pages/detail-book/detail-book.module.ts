import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailBookPageRoutingModule } from './detail-book-routing.module';

import { DetailBookPage } from './detail-book.page';
import { BookListPropComponent } from '../../components/book-list-prop/book-list-prop.component';
import { SearchMediaComponent } from 'src/app/general/search-media/search-media.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailBookPageRoutingModule,

  ],
  declarations: [DetailBookPage, BookListPropComponent, SearchMediaComponent]
})
export class DetailBookPageModule {}
