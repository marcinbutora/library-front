import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from 'src/app/interface/person';
import { PersonDataService } from 'src/app/service/person-data.service';
import localePl  from '@angular/common/locales/pl';
import { DatePipe, registerLocaleData } from '@angular/common';
import { RentalService } from 'src/app/service/rental.service';
import { Rental } from 'src/app/interface/rental';
registerLocaleData(localePl, 'pl');

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.scss'],
})
export class PersonDetailsComponent implements OnInit {
  id!: number;
  person!: Person;
  rental!: Rental[];
  message!: boolean;
  pipe = new DatePipe('pl');

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pds: PersonDataService,
    private rds: RentalService
  ) {}

  ngOnInit() {
    this.person;
    this.id = this.route.snapshot.params['id'];
    this.pds.getPersonById(this.id).subscribe((data) => (this.person = data));
    this.id = this.route.snapshot.params['id'];
    this.rds.getRentalsForPerson(this.id).subscribe((data) => {
      (this.rental = data), console.log(data);
    });
  }

  emptyRecords() {
    if(this.rental?.length > 0) {
      this.message = false;
    } else {
      this.message = true;
    }
  }

  getList() {
    this.router.navigate(['/readers']);
  }
}
