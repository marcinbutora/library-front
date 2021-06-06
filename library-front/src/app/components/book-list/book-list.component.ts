import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/interface/book';
import { BookDataService } from 'src/app/service/book-data.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  constructor(private bds: BookDataService, private router: Router) {}
  public book!: Book[];

  ngOnInit() {
    this.bds.getBookList().subscribe((data) => (this.book = data));
  }

  details(id: number) {
    this.router.navigate(['/book/details', id]);
  }

  update(id: number) {
    this.router.navigate(['/book/update', id]);
  }

  delete(id: number) {
    this.router.navigate(['/book/delete', id]);
  }

  addNew() {
    this.router.navigate(['/book/add']);
  }
}
