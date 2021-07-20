import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';


@Component({
  selector: 'app-new-movie',
  templateUrl: './new-movie.page.html',
  styleUrls: ['./new-movie.page.scss'],
})
export class NewMoviePage implements OnInit {
  newMovie: Movie;
  buttonText ='Add';

  constructor() { }

  ngOnInit() {
    this.newMovie = {
      id: '',
      title: '',
      type: '',
      genres: [],
      image: '',
      releaseDate: '',
      directors: [],
      writers: [],
      actors: [],
      borrowing: false,
    };
  }


}
