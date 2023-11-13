
import { Component, OnInit } from '@angular/core';
import { Login, RegisterUser } from '../interface';
import { UserRegisterService } from '../services/user-register.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit{

 showLogin:boolean=true;
 authError:string="";
  // registeredUser:undefined|Reg;

  constructor(private userRegService:UserRegisterService){}

  ngOnInit(): void {
    console.log("here");
    
  }

  userRegister(regUser:RegisterUser){
    this.userRegService.userRegister(regUser);
        // this.registeredUser=result;    
  }

  openRegister(){
    this.showLogin=false;
  }

  openLogin(){
    this.showLogin=true;
  }

  login(data:Login){
    this.userRegService.userLogin(data);
    this.userRegService.inValidUser.subscribe((result)=>{
      
      if(result){
        this.authError="Please enter valid user details";
      }
    })
  }

}
