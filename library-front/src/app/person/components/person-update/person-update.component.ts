import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from '../../model/person';
import { PersonDataService } from '../../service/person-data.service';

@Component({
  selector: 'app-person-update',
  templateUrl: './person-update.component.html',
  styleUrls: ['./person-update.component.scss'],
})
export class PersonUpdateComponent implements OnInit {
  person!: Person;
  submitted = false;
  id: any;

  getBack() {
    this.router.navigate(['/readers']);
  }

  personUpdateForm = new FormGroup({
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
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pds: PersonDataService
  ) {}

  ngOnInit() {
    this.person;
    this.id = this.route.snapshot.params['id'];

    this.pds.getPersonById(this.id).subscribe((data) => (this.person = data));
  }
  updatePerson() {
    const person: Person = this.personUpdateForm.value;
    this.pds.updatePerson(person.id, person).subscribe(() => {
      // refreshing the list
      this.pds.getPersonList();
    });

    this.personUpdateForm.reset();
    this.submitted = true;
  }
}
