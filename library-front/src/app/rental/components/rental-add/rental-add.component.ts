import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Book } from 'src/app/book/models/book';
import { BookDataService } from 'src/app/book/services/book-data.service';
import { Person } from 'src/app/person/model/person';
import { PersonDataService } from 'src/app/person/service/person-data.service';
import { RentalService } from '../../service/rental.service';

@Component({
  selector: 'app-rental-add',
  templateUrl: './rental-add.component.html',
  styleUrls: ['./rental-add.component.scss'],
})
export class RentalAddComponent implements OnInit {
  person: Person[]=[];
  book: Book[]=[];
  created = new Date();
  submitted = false;
  errorSubmit = false;

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
  

  createRental = () => {
    const personId = this.rentalAddForm.controls['person_id'].value;
    const bookId = this.rentalAddForm.controls['book_id'].value;
    this.rds.createRental(bookId, personId).subscribe(() => {
      this.submitted = true;
      this.errorSubmit = false;
      this.rds.getRentalList();
    }, () => {
      this.submitted = false;
      this.errorSubmit = true;
    })
  }
}
