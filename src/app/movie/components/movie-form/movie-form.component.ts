import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
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

  ngOnInit() {}
}
