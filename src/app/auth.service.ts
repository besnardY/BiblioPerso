import { Injectable, } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { UserService } from './services/user.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLog = false;
  redirectUrl: string;
  connectedUser: string;

  constructor(private aFireAuth: AngularFireAuth, private userServ: UserService) {}

  login(login: string, pw: string): Promise<any>{
    return this.aFireAuth.signInWithEmailAndPassword(login, pw).then(cred => {
      this.userServ.getUser(cred.user.uid);
    });
  }

 

  createUser(login: string, pw: string): Promise<any>{
    return this.aFireAuth.createUserWithEmailAndPassword(login, pw);
  }

  logOut(): Promise<any>{
    return this.aFireAuth.signOut();
  }
}
