import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Movie } from '../models/movie.model';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  movieList: Array<Movie>;
  type = 'movie';

  constructor(private navCtrl: NavController, private movieServ: MovieService) {
    this.movieServ.getAllMovie().subscribe((datas => {
      if(datas !== undefined){
        this.movieList = datas;
      }else{
        this.movieList = [];
      }
    }));
    console.log(this.movieList);
  }

  openNewMovie(){
    this.navCtrl.navigateForward('new-movie');
  }
}
