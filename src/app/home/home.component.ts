import { BookService } from './../services/book.service';
import { HomeServiceService } from '../services/home-service.service';
import { Book, User } from './../interface';
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  bList:undefined|Book[];

  // userList:undefined|User[];
  // message:undefined|string;

  constructor(private homeService:HomeServiceService, private bookService:BookService){

  }
  
  ngOnInit(): void {
    
  }

  // list(){
  //   this.homeService.userList().subscribe((result)=>{
  //     console.log(result);
  //     this.userList=result;      
  //   })
  // }


  /*--------------------Major------------------- */

 



}
