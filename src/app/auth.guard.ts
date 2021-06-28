import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authServ: AuthService, private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     const URL: string = state.url;
    return this.checkLogin(URL);
  }

  checkLogin(url: string){
    if(this.authServ.isLog){
      return true;
    }else{
      this.authServ.redirectUrl = url;
      this.router.navigate(['/login']);
      console.log(url);
      return false;
    }
   }

}
