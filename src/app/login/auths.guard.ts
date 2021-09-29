import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from '../service/users.service';

@Injectable({
  providedIn: 'root'
})
export class AuthsGuard implements CanLoad {
  constructor(private user:UsersService, private router:Router){}
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if(localStorage.getItem('user')&& localStorage.getItem('pw')){
      return true;
    }
    else{
      this.router.navigate(['/login']);
      return false;
    }
  }
}
