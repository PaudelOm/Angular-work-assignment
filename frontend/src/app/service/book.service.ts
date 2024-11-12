import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../common/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  

  private apiUrl = 'http://localhost:8080/books';

  constructor(private http: HttpClient) { }

  getBooks(): Observable<BookResponse> {
    return this.http.get<BookResponse>(`${this.apiUrl}`)
  }

  addBook(book: Book): Observable<BookResponse> {
    return this.http.post<BookResponse>(`${this.apiUrl}`, book)
  }
  
}

export interface BookResponse {
  bookDTOList?: Book[];
  bookDTO?: Book;
  message: string;
  status: string;
}