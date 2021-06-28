import { Injectable, } from '@angular/core';
import {delay , tap} from 'rxjs/operators';
import { Observable, of, } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLog = false;
  redirectUrl: string;

  constructor(private aFireAuth: AngularFireAuth) { }

  login(login: string, pw: string): Promise<any>{
    return this.aFireAuth.signInWithEmailAndPassword(login, pw);
  }

  createUser(login: string, pw: string): Promise<any>{
    return this.aFireAuth.createUserWithEmailAndPassword(login, pw);
  }

  logOut(): Promise<any>{
    return this.aFireAuth.signOut();
  }
}
