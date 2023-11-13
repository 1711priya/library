import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interface';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {

  baseUrl="http://localhost:8080/regUsers";

  constructor(private http:HttpClient) { }

  addUser(data:User){
     
    return this.http.post(`${this.baseUrl}`,data); 
  }

  userList(){
    console.log(" get service called");
    return this.http.get<User[]>(`${this.baseUrl}`);     //for REST- 8080

    // return this.http.get<User[]>('http://localhost:3000/users');        //for db.json- 3000
  }

}
