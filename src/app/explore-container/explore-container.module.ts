import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponent } from './explore-container.component';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import { BookListPropComponent } from '../book/components/book-list-prop/book-list-prop.component';





@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule,  MatExpansionModule,
    MatIconModule,
    MatGridListModule,],
  declarations: [ExploreContainerComponent,BookListPropComponent ],
  exports: [ExploreContainerComponent]
})
export class ExploreContainerComponentModule {}


