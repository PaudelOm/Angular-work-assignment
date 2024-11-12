import { Component } from '@angular/core';
import { Book } from '../../common/book';
import { BookService } from '../../service/book.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { error } from 'console';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrl: './book-form.component.css'
})

export class BookFormComponent {
  book: Book = {
    title: '', author: '', genre: '',
    id: 0
  }; // Initialize with your form fields
  message: string = '';

  constructor(
    private bookService: BookService,
    private router: Router 
  ){};

  onSubmit(form: NgForm) {
    if(form.valid){
      this.bookService.addBook(this.book).subscribe({
        next: (response) =>{
          if(response.status = "CREATED"){
            this.router.navigate(['/books']);
          }else{
            this.message = response.message;
          }
        },
        error: (error) => {
          this.message = error.error.message;
          console.log(error);
        }
      });
    } 
  }
}
