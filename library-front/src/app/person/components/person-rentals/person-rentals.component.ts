import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/book/models/book';
import { Person } from 'src/app/person/model/person';
import { Rental } from 'src/app/rental/model/rental';
import { RentalService } from 'src/app/rental/service/rental.service';

@Component({
  selector: 'app-person-rentals',
  templateUrl: './person-rentals.component.html',
  styleUrls: ['./person-rentals.component.scss'],
})
export class PersonRentalsComponent implements OnInit {
  person!: Person[];
  book!: Book[];
  rental!: Rental[];
  id!: number;

  constructor(private rds: RentalService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.person;
    this.id = this.route.snapshot.params['id'];
    this.rds.getRentalsForPerson(this.id).subscribe((data) => {
      (this.rental = data), console.log(data);
    });
  }
}
