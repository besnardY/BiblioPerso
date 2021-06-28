import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookDetailPageRoutingModule } from './book-detail-routing.module';

import { BookDetailPage } from './book-detail.page';
import { BookListPropComponent } from '../../components/book-list-prop/book-list-prop.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookDetailPageRoutingModule
  ],
  declarations: [BookDetailPage, BookListPropComponent]
})
export class BookDetailPageModule {}
