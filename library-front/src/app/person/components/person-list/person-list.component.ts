import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from '../../model/person';
import { PersonDataService } from '../../service/person-data.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss'],
})
export class PersonListComponent implements OnInit {
  constructor(private pds: PersonDataService, private router: Router) {}
  person: Person[]=[];
  personr: Person | undefined;
  removed = false;
  errorRemoved = false;
  errorMessage: string = '';

  ngOnInit() {
    this.pds.getPersonList().subscribe((data) => (this.person = data));
  }

  details(id: number) {
    this.router.navigate(['/reader/details', id]);
  }

  update(id: number) {
    this.router.navigate(['/reader/update', id]);
  }

  delete(id: number) {
    this.pds.deletePerson(id).subscribe(() => {
      this.removed = true;
      this.errorRemoved = false;
      this.router.navigate(['/readers']);      
    }, (error): HttpErrorResponse => {
      console.log(error);
      this.errorRemoved = true;
      this.errorMessage = error.error.message;

      return error;
    })
  }

  addNew() {
    this.router.navigate(['/reader/add']);
  }
}
