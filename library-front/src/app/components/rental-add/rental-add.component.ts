import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Book, Person, Rental } from 'src/app/interface/rental';
import { BookDataService } from 'src/app/service/book-data.service';
import { PersonDataService } from 'src/app/service/person-data.service';
import { RentalService } from 'src/app/service/rental.service';

@Component({
  selector: 'app-rental-add',
  templateUrl: './rental-add.component.html',
  styleUrls: ['./rental-add.component.scss'],
})
export class RentalAddComponent implements OnInit {
  person!: Person[];
  book!: Book[];
  created = new Date();
  submitted = false;

  getBack() {
    this.router.navigate(['/readers']);
  }

  rentalAddForm = new FormGroup({
    id: new FormControl(''),
    book_id: new FormControl(''),
    person_id: new FormControl(''),
    rented_date: new FormControl(this.created, Validators.required),
  });

  constructor(
    private pds: PersonDataService,
    private bds: BookDataService,
    private rds: RentalService,
    private router: Router
  ) {}

  ngOnInit() {
    this.pds.getPersonList().subscribe((data) => (this.person = data));
    this.bds.getBookList().subscribe((data) => (this.book = data));
  }

  createRental() {
    const rental: Rental = this.rentalAddForm.value;
    this.rds.createRental(this.rentalAddForm.value).subscribe(() => {
      // refreshing the list
      this.rds.getRentalList();
    });

    this.rentalAddForm.reset();
    this.submitted = true;
  }
}
