import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Login, RegisterUser, User } from '../interface';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserRegisterService {
  baseUrl="http://localhost:8080/regUsers";
  inValidUser=new EventEmitter<boolean>(false);

  constructor(private http:HttpClient,private router:Router) { }

  userRegister(regUser:RegisterUser){
    console.log(regUser);
    return this.http.post(`${this.baseUrl}`,regUser,{observe:'response'}).subscribe((result)=>{
      if(result){
        localStorage.setItem('user',JSON.stringify(result.body));

        //Now redirect to home
        this.router.navigate(['/home']);
      }
    });
  }

  userLogin(data:Login){

    this.http.get<RegisterUser>(`http://localhost:8080/regUsers/login?email=${data.email}&password=${data.password}`,
    {observe:'response'})
    .subscribe((result)=>{

      if(result && result.body!==null){
                
        this.inValidUser.emit(false);
        localStorage.setItem('user',JSON.stringify(result.body));
        this.router.navigate(['/']);
        
      }else{
        console.log("invalid credentials");
        
        this.inValidUser.emit(true);
      }
    })
  }

  userList(){
    return this.http.get<User[]>(`http://localhost:8080/regUsers`);
  }
}
