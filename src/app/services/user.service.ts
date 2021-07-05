import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userDoc: AngularFirestoreDocument;
  selectedUser;

  constructor(private firestore: AngularFirestore) { }

  getUser(id: string){
    this.userDoc = this.firestore.doc(`users/${id}`);
    console.log(this.userDoc);

    return this.userDoc.valueChanges();
  }

}
