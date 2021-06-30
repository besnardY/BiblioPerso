/* eslint-disable max-len */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../auth.service';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root',
})

export class BookService {
  bookCollectionRef: AngularFirestoreCollection<Book>;
  bookDoc: AngularFirestoreDocument<Book>;
  userId: string;
  googleBookUrl = 'https://www.googleapis.com/books/v1/volumes?q=';
  apiKey = '';

  constructor(private http: HttpClient, private firestore: AngularFirestore, private afAuth: AngularFireAuth, private authServ: AuthService) {
        this.userId = this.authServ.currentUser;
        this.bookCollectionRef = this.firestore.collection<Book>(`users/${this.userId}/book`);
  }

  getAllBook(){
  return this.bookCollectionRef.snapshotChanges().pipe(
    map( actions => actions.map(a => {
      const DATAS = a.payload.doc.data() as Book;
      const ID = a.payload.doc.id;
      return {ID, ...DATAS};
    }))
  );


  }

  searchBook(title: string): Observable<any> {

    if (!title.trim()) {
      return of([]);

    } else {
      const REQ = `${this.googleBookUrl}${title}`;

      return this.http.get<any>(REQ);
    }
  }

  addBook(book: Book): Promise<any>{
//     console.log(this.bookCollectionRef.ref, this.userId);
// return ;
   return this.bookCollectionRef.add(book);

  }

}
