import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewMoviePageRoutingModule } from './new-movie-routing.module';

import { NewMoviePage } from './new-movie.page';
import { MovieFormComponent } from '../../components/movie-form/movie-form.component';
import { SearchMediaComponent } from 'src/app/general/search-media/search-media.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    NewMoviePageRoutingModule,
  ],
  declarations: [NewMoviePage, MovieFormComponent, SearchMediaComponent]
})
export class NewMoviePageModule {}
