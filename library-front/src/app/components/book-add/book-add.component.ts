import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Book } from 'src/app/interface/book';
import { BookDataService } from 'src/app/service/book-data.service';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.scss']
})
export class BookAddComponent implements OnInit {

  book!: Book;
  submitted = false;

  getBack() {
    this.router.navigate(['/books']);
  }

  bookAddForm = new FormGroup({
    id: new FormControl(''),
    title: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    description: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    isbn: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });

  constructor(private router: Router, private bds: BookDataService) { }

  ngOnInit(): void {
  }

  saveBook() {
    const book: Book = this.bookAddForm.value;
    this.bds.createBook(book).subscribe(() => {
      // refreshing the list
      this.bds.getBookList();
    });

    this.bookAddForm.reset();
    this.submitted = true;
  }

}
