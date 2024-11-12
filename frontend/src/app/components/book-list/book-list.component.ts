import { Component, OnInit } from '@angular/core';
import { Book } from '../../common/book';
import { Observable } from 'rxjs';
import { BookService } from '../../service/book.service';
import { ActivatedRoute } from '@angular/router';
import { error } from 'console';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})

export class BookListComponent implements OnInit{
  constructor(
    private bookService: BookService,
    private route: ActivatedRoute
  ){}

  books: Book[] = [];

  listBook() {
    this.bookService.getBooks().subscribe({
      next:
      response => {
        this.books = response.bookDTOList ?? []; // Default to an empty array if undefined
      },
      error:
      error => {
        console.log("Subscription Error", error)
      }
    })
  }

  ngOnInit(): void {
    this.listBook();
  }

}
