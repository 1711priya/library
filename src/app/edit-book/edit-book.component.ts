import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Book } from '../interface';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit{

  bookData:undefined|Book;
  message:undefined|string;

  constructor(private activatedRoute:ActivatedRoute,private bookService:BookService,private router:Router){}

  ngOnInit(): void {
    let bookId=this.activatedRoute.snapshot.paramMap.get('id');

    bookId && this.bookService.getBookById(bookId).subscribe((data)=>{
       this.bookData=data;
       
    })
  }
  update(data:Book){
    
    if(this.bookData){
      data.id=this.bookData.id;      
    }
    
    this.bookService.updateBook(data).subscribe((result)=>{

      this.message="Record updated successfully!";
      console.log(this.message);
      
      this.router.navigate(['/view-books']);
    });
  }

}
