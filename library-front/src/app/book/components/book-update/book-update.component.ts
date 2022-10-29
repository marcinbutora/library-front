import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/book/models/book';
import { BookDataService } from '../../services/book-data.service';

@Component({
  selector: 'app-book-update',
  templateUrl: './book-update.component.html',
  styleUrls: ['./book-update.component.scss'],
})
export class BookUpdateComponent implements OnInit {
  book!: Book;
  submitted = false;
  id: any;

  getBack() {
    this.router.navigate(['/books']);
  }
  bookUpdateForm = new FormGroup({
    id: new FormControl(''),
    title: new FormControl('', [Validators.required, Validators.minLength(3)]),
    description: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    isbn: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });

  constructor(
    private router: Router,
    private bds: BookDataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.bds.getBookById(this.id).subscribe((data) => (this.book = data));
  }

  updateBook(id: number) {
    const book = this.bookUpdateForm.value;
    this.bds.updateBook(id, book).subscribe(() => {
      // refreshing the list
      this.bds.getBookList();
    });

    this.bookUpdateForm.reset();
    this.submitted = true;
  }
}
