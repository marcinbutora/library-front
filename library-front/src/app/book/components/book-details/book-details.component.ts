import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/book/models/book';
import { Rental } from 'src/app/rental/model/rental';
import { BookDataService } from '../../services/book-data.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss'],
})
export class BookDetailsComponent implements OnInit {
  id!: number;
  book!: Book;
  rental!: Rental[];
  message!: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bds: BookDataService
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.bds.getBookById(this.id).subscribe((data) => this.book = data);
  }

  getList() {
    this.router.navigate(['/books']);
  }

  emptyRecords() {
    this.message = this.rental?.length <= 0;
  }
}
