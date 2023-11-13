import { Book } from './../interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) { }

  bookList(){
    console.log("Get all books");
    return this.http.get<Book[]>('http://localhost:8080/books');
  }

  deleteBook(id:number){
    return this.http.delete<Book>(`http://localhost:8080/books/${id}`);
  }

  updateBook(book:Book){
    return this.http.put<Book>(`http://localhost:8080/books/${book.id}`,book);
  }

  getBookById(id:string){
    return this.http.get<Book>(`http://localhost:8080/books/${id}`);
  }

}
