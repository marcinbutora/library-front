import { Component, OnInit } from '@angular/core';
import { Book } from './book/models/book';
import { Person } from './person/model/person';
import { Router } from '@angular/router';
import { RentalService } from './rental/service/rental.service';
import { Rental } from './rental/model/rental';
import { BookDataService } from './book/services/book-data.service';
import { PersonDataService } from './person/service/person-data.service';

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
