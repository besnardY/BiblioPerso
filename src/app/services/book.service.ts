import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  googleBookUrl = 'https://www.googleapis.com/books/v1/volumes?q=';
  apiKey = '';

  constructor(private http: HttpClient) {}

  searchBook(title: string): Observable<any> {

    if (!title.trim()) {
      return of([]);

    } else {
      const REQ = `${this.googleBookUrl}${title}`;

      return this.http.get<any>(REQ);
    }
  }

}
