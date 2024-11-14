import { Component, OnInit, ViewChild } from '@angular/core';
import { Book } from '../../common/book';
import { BookService } from '../../service/book.service';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { error } from 'console';
import { response } from 'express';
import { validateHeaderName } from 'http';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrl: './book-form.component.css'
})

export class BookFormComponent implements OnInit{

  book: Book = {
    title: '', author: '', genre: '',
    id: 0
  }; // Initialize with your form fields
  message: string = '';
  dynamic: string = '';
  keypressed: number= 0;

  reactiveForm: FormGroup;

  constructor(
    private bookService: BookService,
    private router: Router 
  ){}
  
  onSubmit() {
    console.log(this.reactiveForm);
    console.log(this.reactiveForm.controls["year"].value);
     if (this.reactiveForm.valid) {
      this.book.author = this.reactiveForm.controls["author"].value;
      this.book.genre = this.reactiveForm.controls["genre"].value;
      this.book.title = this.reactiveForm.controls["title"].value;
      this.book.publishedYear = this.reactiveForm.controls["year"].value;
      this.bookService.addBook(this.book).subscribe({
        next: (response) => {
          console.log(response.status);
          if (response.status === 'CREATED') {
            this.router.navigate(['/books']);
          } else {
            this.message = 'Failed to add the book.';
          }
        },
        error: (error) => {
          console.log(error.error.message);
          //console.error('Error:', error);
          this.message = error.error.message;
        }
      });
     }
  }

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      title: new FormControl("Ready Player One", [Validators.required, Validators.minLength(4)]),
      author: new FormControl("Earnist Clint", Validators.required),
      
      year: new FormControl(2015, Validators.required),
       
      genre: new FormControl("SCI-FI", Validators.required)
    })

   
  }
}
