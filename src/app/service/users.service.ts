import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IUser } from './user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpc:HttpClient, private router:Router) { }
afg:IUser[]=[];
  getServices(){
    return this.httpc.get<IUser[]>("/assets/user.json"); 
  }
}
 