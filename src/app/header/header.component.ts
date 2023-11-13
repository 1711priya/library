import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  adminName:string="";
  userName:string="";
  menuType:string='default';
  message:string="";

  constructor(private router:Router){}

  ngOnInit(): void {
    this.router.events.subscribe((val:any)=>{
      if(val.url){
        if(localStorage.getItem('admin') ){
          let adminStore=localStorage.getItem('admin');     
          let adminData=adminStore && JSON.parse(adminStore);
          this.adminName=adminData.name;
          this.menuType="admin";
        }

        else if(localStorage.getItem('user')){
          let userStore=localStorage.getItem('user');
          let userData=userStore && JSON.parse(userStore);
          this.userName=userData.name;
          this.menuType="user";
        }

        else{
          this.menuType="default";
        }
      }
    })
  }

  adminLogout(){
    localStorage.removeItem('admin');
    this.router.navigate(['/']);
    // this.message="Logged out successfully !";
  }

  userLogout(){
    localStorage.removeItem('user');
    this.router.navigate(['/']);
    // this.message="Logged out successfully !";
  }

}
