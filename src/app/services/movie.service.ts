import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Movie } from '../models/movie.model';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  userDoc: AngularFirestoreDocument;
  imdbUrl = 'https://imdb-api.com/en/API';
  omdbUrl ='http://www.omdbapi.com/?apikey=';
  imdbOptions = 'FullActor,FullCast,';
  imdbApiKey ='';
  omdbApiKey = '';
  idSearch: string;
  constructor(private http: HttpClient, private userServ: UserService) {
    this.userDoc = this.userServ.userDoc;
   }

   getAllMovie() {
    return this.userDoc
      .collection('/movie', (ref) => ref.orderBy('title'))
      .snapshotChanges()
      .pipe(
        map((actions) =>
          actions.map((a) => {
            const DATAS = a.payload.doc.data() as Movie;
            const ID = a.payload.doc.id;
            return { ID, ...DATAS };
          })
        )
      );
  }

  searchId(title: string): Observable<any>{
    console.log(title);

    if (!title.trim()) {
      return of([]);
    } else {
      const REQ = `${this.imdbUrl}/Search/${this.imdbApiKey}/${title}`;


      return this.http.get<any>(REQ);
    }
  }

  getMoviebyApi(id: string): Observable<any>{
    //TODO if IMDB API
    // const REQ = `${this.imdbUrl}/Title/${this.apiKey}/${id}/${this.imdbOptions}`;

     //TODO if OMDB API
    const REQ = `${this.omdbUrl}${this.omdbApiKey}${id}`;
      return this.http.get<any>(REQ);
  }

  addMovie(movie: Movie){
    return this.userDoc.collection('/movie').add(movie);
  }

  updateMovie(updateMovie: Movie){

  }
}
