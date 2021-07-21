/* eslint-disable max-len */
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Movie } from 'src/app/models/movie.model';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.scss'],
})
export class MovieFormComponent implements OnInit {
  @Input() data: Movie;
  @Input() buttonText: string;

  movieForm: FormGroup;
  submitted = false;

  constructor() {}

  ngOnInit() {
    this.movieForm = new FormGroup({
      title: new FormControl(this.data.title, [Validators.required]),
      type: new FormControl(this.data.type, [Validators.required]),
      image: new FormControl(this.data.image, [Validators.required]),
      directors: new FormControl(this.data.directors, [Validators.required]),
      writers: new FormControl(this.data.writers, [Validators.required]),
      actors: new FormControl(this.data.actors, [Validators.required]),
      genres: new FormControl(this.data.genres, [Validators.required]),
      releaseDate: new FormControl(this.data.releaseDate, [Validators.required]),
    });
  }

  get f() {
    return this.movieForm.controls;
  }

  getNewMovie(movie){
    const IMAGE = movie.image
    ? movie.image
    : '../assets/icon/movie-850.png';

  this.movieForm.patchValue(movie,
    (movie.image = IMAGE,
    movie.actors = movie.stars,
    movie.directors = movie.fullCast.directors.items[0].name) );

    console.log(movie);

  }


}
