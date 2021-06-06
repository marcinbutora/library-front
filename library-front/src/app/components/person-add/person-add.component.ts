import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Person } from 'src/app/interface/person';
import { PersonDataService } from 'src/app/service/person-data.service';

@Component({
  selector: 'app-person-add',
  templateUrl: './person-add.component.html',
  styleUrls: ['./person-add.component.scss']
})
export class PersonAddComponent implements OnInit {

  person!: Person;
  submitted = false;

  personAddForm = new FormGroup({
    id: new FormControl(""),
    firstname: new FormControl("", [
      Validators.required,
      Validators.minLength(3)
    ]),
    lastname: new FormControl("", [
      Validators.required,
      Validators.minLength(5)
    ]),
    city: new FormControl("", [
      Validators.required,
      Validators.minLength(3)
    ])
  }); 
  
  constructor(private router: Router, private pds: PersonDataService) { }

  ngOnInit(): void {
  }
      savePerson() {
        const person: Person = this.personAddForm.value;
        this.pds.createPerson(person).subscribe(
          data => {
            // refreshing the list
            this.pds.getPersonList();
            console.log(data);
            return true;
          }
        );
        console.log(person);
      }
  }