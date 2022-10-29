import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Person } from 'src/app/person/model/person';
import { PersonDataService } from '../../service/person-data.service';

@Component({
  selector: 'app-person-add',
  templateUrl: './person-add.component.html',
  styleUrls: ['./person-add.component.scss'],
})
export class PersonAddComponent implements OnInit {
  person!: Person;
  errorSubmit: boolean = false;
  successSubmit: boolean = false;
  errorMessage: string = '';
  created = new Date();

  getBack() {
    this.router.navigate(['/readers']);
  }

  personAddForm = new FormGroup({
    id: new FormControl(''),
    firstname: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    lastname: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    city: new FormControl('', [Validators.required, Validators.minLength(3)]),
    created: new FormControl(this.created, Validators.required)
  });

  constructor(private router: Router, private pds: PersonDataService) {}

  ngOnInit() {
  }
  savePerson() {
    const person = this.personAddForm.value;
    this.pds.createPerson(person).subscribe(() => {
      this.successSubmit = true;
      this.pds.getPersonList();
      this.personAddForm.reset();
    }, (error): HttpErrorResponse => {
      this.errorSubmit = true;
      this.errorMessage = error.error.message;
      return error;
    }
    );
  }
}
