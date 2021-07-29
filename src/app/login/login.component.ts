import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { LoaderService } from '../services/loader.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  message: string;
  login: string;
  pw: string;
  submitted = false;

  constructor(public authServ: AuthService, private router: Router, private ionLoader: LoaderService) {}

  ngOnInit(): void {
    this.setMessage();
    this.loginForm = new FormGroup({
      login: new FormControl(this.login, [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ]),
      pw: new FormControl(this.pw, [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  setMessage() {
    this.message = this.authServ.isLog ? 'connected' : 'Not connected';
  }

  loginUser(values) {
    this.submitted = true;
    if (this.loginForm.invalid) {
      this.message = '';
      return;
    }

    this.authServ.login(values.login, values.pw).then(() => {
      this.authServ.isLog = true;
      this.setMessage();
        const REDIRECT = this.authServ.redirectUrl ? this.authServ.redirectUrl : 'tabs/tab1';
        this.router.navigate([REDIRECT]);
    },err => {

      this.authServ.isLog = false;
      this.message = err.message;

    });
  }

  logOut() {
    this.authServ.logOut().then(() => {
      this.authServ.isLog = false;
      this.setMessage();
    });
  }

  createUser(values: any){
    this.message = 'Creation in progress ...';
    this.submitted = true;
    if (this.loginForm.invalid) {
      this.message = '';
      return;
    }


    this.authServ.createUser(values.login, values.pw).then(() => {
      this.message = 'Your account has been successfully created';
    },err => {
      this.message = err.message;
    });
  }
}
