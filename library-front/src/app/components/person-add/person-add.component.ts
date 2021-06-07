import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Person } from 'src/app/interface/person';
import { PersonDataService } from 'src/app/service/person-data.service';

@Component({
  selector: 'app-person-add',
  templateUrl: './person-add.component.html',
  styleUrls: ['./person-add.component.scss'],
})
export class PersonAddComponent implements OnInit {
  person!: Person;
  submitted = false;
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
    const person: Person = this.personAddForm.value;
    this.pds.createPerson(this.personAddForm.value).subscribe(() => {
      // refreshing the list
      this.pds.getPersonList();
    });

    this.personAddForm.reset();
    this.submitted = true;
  }
}
