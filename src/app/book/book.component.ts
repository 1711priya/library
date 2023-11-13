import { HttpClient } from '@angular/common/http';
import { BookService } from './../services/book.service';
import { Component, OnInit } from '@angular/core';
import { Book } from '../interface';
import {faTrash,faEdit} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit{

  allBooks:undefined|Book[];
  editIcon=faEdit;
  deleteIcon=faTrash;

  message:undefined|string;
  showButton:boolean=false;
  
  constructor(private bookService:BookService){}


  ngOnInit(): void {
    let adminObj=localStorage.getItem('admin');
    let adminName=adminObj && JSON.parse(adminObj)[0];
    // adminObj.name
    
    this.getAllBooks();
  }

  deleteById(id:number){
    this.bookService.deleteBook(id).subscribe((result)=>{
      if(result){
        this.message="Book deleted successfully!";
        this.getAllBooks();
      }
    })
  }

  getAllBooks(){
    this.bookService.bookList().subscribe((result)=>{    
      this.allBooks=result;
      console.log("All books are "+this.allBooks);
 
    })
  }


}
