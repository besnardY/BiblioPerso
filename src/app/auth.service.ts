import { Injectable, } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLog = false;
  redirectUrl: string;
  currentUser: string;

  constructor(private aFireAuth: AngularFireAuth) { }

  login(login: string, pw: string): Promise<any>{
    return this.aFireAuth.signInWithEmailAndPassword(login, pw).then(cred => {
      this.currentUser = cred.user.uid;
    });
  }

  createUser(login: string, pw: string): Promise<any>{
    return this.aFireAuth.createUserWithEmailAndPassword(login, pw);
  }

  logOut(): Promise<any>{
    return this.aFireAuth.signOut();
  }
}
