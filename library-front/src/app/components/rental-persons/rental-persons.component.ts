import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/interface/book';
import { Person } from 'src/app/interface/person';
import { Rental } from 'src/app/interface/rental';
import { RentalService } from 'src/app/service/rental.service';

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
      (this.rental = data), console.log(data);
    });
  }
}
