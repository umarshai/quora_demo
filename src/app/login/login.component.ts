import { Component, OnInit } from '@angular/core';
import { Router,CanActivate } from '@angular/router';
import { IUser } from '../service/user';
import { UsersService } from '../service/users.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
 
  public loginform!:FormGroup;
  public auth :boolean=false;
  
  constructor(private router:Router,private users:UsersService,private  formBuilder:FormBuilder) 
  {     
    this.loginform=this.formBuilder.group({
    user:[''],
    pw:['']
    }) 
    
  }
  
  user:IUser[]=[];
  login(){
            this.users.getServices().subscribe(res=> {
              const uuu= res.find((a:any)=>
              {
              return a.user == this.loginform.value.user && a.pw == this.loginform.value.pw;
              });
              if(uuu){
                localStorage.setItem('user',uuu.user);
                localStorage.setItem('pw',uuu.pw);        
                this.router.navigate(['/search']); 
        
              }
              else
              {  
                this.loginform.reset();
                alert("user not found");
              }
        
              });            
          } 
}
