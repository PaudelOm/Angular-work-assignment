import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { HttpClientModule } from '@angular/common/http';
import { BookService } from './service/book.service';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BookFormComponent } from './components/book-form/book-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes= [
  {path: 'books/new', component: BookFormComponent},
  {path: 'books', component: BookListComponent},
  {path: '', redirectTo: '/books', pathMatch: 'full'},
  {path: '**', redirectTo: '/books', pathMatch: 'full'},
];

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookFormComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    BookService,
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
