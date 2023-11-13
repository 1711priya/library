import { AdminLoginService } from './../services/admin-login.service';
import { Component, OnInit } from '@angular/core';
import { Login } from '../interface';

@Component({
  selector: 'app-admin-auth',
  templateUrl: './admin-auth.component.html',
  styleUrls: ['./admin-auth.component.css']
})
export class AdminAuthComponent implements OnInit {

  authError:string="";

constructor(private adminloginService:AdminLoginService){}

  ngOnInit(): void {
    
  }

  login(data:Login){
    console.log(data);
    this.adminloginService.login(data);
    this.adminloginService.invalidAdmin.subscribe((result)=>{
      if(result){
        this.authError="Invalid Credential";
      }
    })
    
  }

}
