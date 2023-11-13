import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Login } from '../interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {

  invalidAdmin=new EventEmitter<boolean>(false);

  constructor(private http:HttpClient,private router:Router) { }

  login(data:Login){
    return this.http.get(`http://localhost:8080/admin/${data.email}/${data.password}`,
    {observe:'response'}).subscribe((result)=>{
      if(result.body && result.body!=null){     
        this.invalidAdmin.emit(false);
        localStorage.setItem('admin',JSON.stringify(result.body));
        this.router.navigate(['/']);
      }

      else{
        this.invalidAdmin.emit(true);
      }


    })
  }
}
