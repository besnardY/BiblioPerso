import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/models/movie.model';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-list-prop',
  templateUrl: './movie-list-prop.component.html',
  styleUrls: ['./movie-list-prop.component.scss'],
})
export class MovieListPropComponent implements OnInit {
@Input() item: Movie;

  constructor(private movieServ: MovieService, private router: Router) { }

  ngOnInit() {}

  selectMovie(item: Movie){
    this.movieServ.defineMovie(item);
    this.router.navigate(['/detail-movie']);
  }

}
