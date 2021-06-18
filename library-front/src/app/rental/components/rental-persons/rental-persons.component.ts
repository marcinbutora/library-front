import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/book/models/book';
import { Rental } from 'src/app/rental/model/rental';
import { Person } from 'src/app/person/model/person';
import { RentalService } from 'src/app/rental/service/rental.service';

@Component({
  selector: 'app-rental-persons',
  templateUrl: './rental-persons.component.html',
  styleUrls: ['./rental-persons.component.scss']
})
export class RentalPersonsComponent implements OnInit {
  person!: Person[];
  book!: Book[];
  rental!: Rental[];
  id!: number;

  constructor(private rds: RentalService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.person;
    this.id = this.route.snapshot.params['id'];
    this.rds.getBookForRentals(this.id).subscribe((data) => {
      (this.rental = data)     
    });
  }
}
