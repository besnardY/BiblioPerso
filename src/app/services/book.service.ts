/* eslint-disable max-len */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Book } from '../models/book.model';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  bookCollectionRef: AngularFirestoreCollection<Book>;
  bookDoc: AngularFirestoreDocument;
  userDoc: AngularFirestoreDocument;
  googleBookUrl = 'https://www.googleapis.com/books/v1/volumes?q=';
  apiKey = '';
  selectedBook;

  constructor(
    private http: HttpClient,
    private firestore: AngularFirestore,
    private userServ: UserService
  ) {
    this.userDoc = this.userServ.userDoc;
    console.log(this.userDoc);
  }

  getAllBook() {
    return this.userDoc
      .collection('/book', (ref) => ref.orderBy('title'))
      .snapshotChanges()
      .pipe(
        map((actions) =>
          actions.map((a) => {
            const DATAS = a.payload.doc.data() as Book;
            const ID = a.payload.doc.id;
            return { ID, ...DATAS };
          })
        )
      );
  }

  defineBook(book: Book) {
    this.selectedBook = book;
  }

  getBook() {
    return this.selectedBook;
  }

  searchBook(title: string): Observable<any> {
    if (!title.trim()) {
      return of([]);
    } else {
      const REQ = `${this.googleBookUrl}${title}`;

      return this.http.get<any>(REQ);
    }
  }

  addBook(book: Book): Promise<any> {
    return this.userDoc.collection('/book').add(book);
  }

  updateBook(b: Book): Promise<any> {

    return this.userDoc.collection('/book').doc(this.selectedBook.ID).update({
      authors: b.authors,
      categories: b.categories,
      image: b.image,
      title: b.title,
      publishedDate: b.publishedDate,
      style: b.style,
    });
  }

  borrowBook(borrow): Promise<any>{

    return this.userDoc.collection('/book').doc(this.selectedBook.ID).update({
      borrowing: true,
      borrowerName: borrow.borrowerName,
      borrowingDate: borrow.borrowingDate
    });
  }

  backBook(): Promise<any>{
    return this.userDoc.collection('/book').doc(this.selectedBook.ID).update({
      borrowing: false,
      borrowerName: '',
      borrowingDate: ''
    });
  }

  addVolumeBook(vol: Array<number>): Promise<any>{
    return this.userDoc.collection('/book').doc(this.selectedBook.ID).update({
      volume: vol
    });
  }

  deleteBook(): Promise<any>{
    return this.userDoc.collection('/book').doc(this.selectedBook.ID).delete();
  }
}
