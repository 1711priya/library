import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { User } from '../interface';
import { UserRegisterService } from './../services/user-register.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{

  editIcon=faEdit;
  deleteIcon=faTrash;
  
  allUsers:undefined|User[];

  constructor(private userRegService:UserRegisterService){}

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers(){
    this.userRegService.userList().subscribe((result)=>{
      this.allUsers=result;
    });
  }

  deleteUser(id: any){
    console.log(id);
    
  }

}
