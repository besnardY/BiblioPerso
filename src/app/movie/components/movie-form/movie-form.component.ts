/* eslint-disable max-len */
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Movie } from 'src/app/models/movie.model';
import { MovieService } from 'src/app/services/movie.service';

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

  constructor(private movieServ: MovieService, private router: Router) {}

  ngOnInit() {
    this.movieForm = new FormGroup({
      title: new FormControl(this.data.title, [Validators.required]),
      type: new FormControl(this.data.type, [Validators.required]),
      image: new FormControl(this.data.image, [Validators.required]),
      directors: new FormControl(this.data.directors, [Validators.required]),
      writers: new FormControl(this.data.writers, [Validators.required]),
      actors: new FormControl(this.data.actors, [Validators.required]),
      genres: new FormControl(this.data.genres, [Validators.required]),
      releaseDate: new FormControl(this.data.releaseDate, [
        Validators.required,
      ]),
    });
  }

  get f() {
    return this.movieForm.controls;
  }

  getNewMovie(movie) {

    //TODO if get film with IMDB API
    //   const IMAGE = movie.image
    //   ? movie.image
    //   : '../assets/icon/movie-850.png';

    // this.movieForm.patchValue(movie,
    //   (movie.image = IMAGE,
    //   movie.actors = movie.stars,
    //   movie.directors = movie.fullCast.directors.items[0].name) );

    //TODO if get film with OMDB API
    const IMAGE = movie.Poster ? movie.Poster : '../assets/icon/movie-850.png';
    let date = new Date(movie.Released).toString();
    date = this.convert(date);

    this.movieForm.patchValue(
      (movie = {
        title: movie.Title,
        type: movie.Type,
        image: IMAGE,
        directors: movie.Director,
        writers: movie.Writer,
        actors: movie.Actors,
        genres: movie.Genre,
        releaseDate: date,
      })
    );
  }

  addNewMovie(){
    this.submitted = true;
    if (this.movieForm.invalid) {
      return;
    }
    const author = this.movieForm.value.authors;

    // If only one authors make an Array of authors
    if (typeof author === 'string') {
      this.movieForm.value.authors = author.split(',');
    }

    switch(this.buttonText) {
      case 'Add': {
        this.movieServ.addMovie(this.movieForm.value);
        this.router.navigate(['tabs/tab1']);
         break;
      }
      case 'Update': {
        this.movieServ.updateMovie(this.movieForm.value);
        this.router.navigate(['tabs/tab1']);
         break;
      }
      default: {
        console.log('An error has occured');
         break;
      }
    }

  }

  convert(str) {
    const date = new Date(str);
    const mnth = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join('-');
  }


}
