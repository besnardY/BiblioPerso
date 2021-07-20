import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  userDoc: AngularFirestoreDocument;
  imdbUrl = 'https://imdb-api.com/en/API';
  imdbOptions = 'FullActor,FullCast,';
  apiKey ='k_384w5ngh';
  idSearch: string;
  constructor(private http: HttpClient, private userServ: UserService) {
    this.userDoc = this.userServ.userDoc;
   }

  searchId(title: string, type: string): Observable<any>{
    if (!title.trim()) {
      return of([]);
    } else {
      const REQ = `${this.imdbUrl}/Search${type}/${this.apiKey}/${title}`;

      return this.http.get<any>(REQ);
    }
  }

  getMoviebyApi(id: string): Observable<any>{
    const REQ = `${this.imdbUrl}/Title/${this.apiKey}/${id}/${this.imdbOptions}`;

      return this.http.get<any>(REQ);
  }
}
