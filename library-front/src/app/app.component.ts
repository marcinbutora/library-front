import { Component, OnInit } from '@angular/core';
import { Book } from './interface/book';
import { Person } from './interface/person';
import { PersonDataService } from './service/person-data.service';
import { Router } from '@angular/router';
import { BookDataService } from './service/book-data.service';
import { RentalService } from './service/rental.service';
import { Rental } from './interface/rental';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'library-front';

  constructor(
    private pds: PersonDataService,
    private router: Router,
    private bds: BookDataService,
    private rds: RentalService
  ) {}

  person: Person[] | undefined;
  book: Book[] | undefined;
  rental: Rental[] | undefined;

  ngOnInit() {
    this.pds.getPersonList().subscribe((data) => (this.person = data));
    this.bds.getBookList().subscribe((data) => (this.book = data));
    this.rds.getRentalList().subscribe((data) => (this.rental = data));
  }

  readersClick = () => this.router.navigateByUrl('/readers');
  booksClick = () => this.router.navigateByUrl('/books');
  rentalsClick = () => this.router.navigateByUrl('/rentals');
}
