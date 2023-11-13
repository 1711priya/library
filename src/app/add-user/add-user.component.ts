import { Component, OnInit } from '@angular/core';
import { HomeServiceService } from '../services/home-service.service';
import { User } from '../interface';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit{

  addUserMessage:string|undefined;
  constructor(private homeService:HomeServiceService){}

  ngOnInit(): void {
    
  }

  submit(data:User){
    console.log(data);
    this.homeService.addUser(data).subscribe((result)=>{
      console.log(result);
      if(result){
        this.addUserMessage="User added";
      }
      setTimeout(()=>(this.addUserMessage=undefined),3000);
    })
    
  }

}
