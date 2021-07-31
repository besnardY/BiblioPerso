import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/models/movie.model';
import { AlertService } from 'src/app/services/alert.service';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-detail-movie',
  templateUrl: './detail-movie.page.html',
  styleUrls: ['./detail-movie.page.scss'],
})
export class DetailMoviePage implements OnInit {

  movie: Movie;
  constructor(private movieServ: MovieService, private router: Router, private alertServ: AlertService) { }

  ngOnInit() {
    this.movie = this.movieServ.getMovie();
    console.log(this.movie);

  }

  deleteMovie(): void{
    this.alertServ.presentAlert()
      .then((value) => {
        if (value.role !== 'cancel') {
            this.movieServ.deleteMovie();
            this.router.navigate(['tabs/tab2']);
        }
      })
      .catch((e) => console.log(e));
  }

  giveBackMovie(){
    this.movieServ.backMovie();
    this.router.navigate(['tabs/tab2']);
  }

}
