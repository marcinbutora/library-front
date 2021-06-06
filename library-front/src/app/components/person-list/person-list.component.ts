import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Person } from '../../interface/person';
import { PersonDataService } from '../../service/person-data.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss'],
})
export class PersonListComponent implements OnInit {
  constructor(private pds: PersonDataService, private router: Router) {}
  person!: Person[];
  personOne!: Person;
  id: any;

  ngOnInit() {
    this.pds.getPersonById(this.id).subscribe(data => this.personOne=data);
    this.pds.getPersonList().subscribe((data) => (this.person = data));
  }

  details(id: number) {
    this.router.navigate(['/reader/details', id]);
  }

  update(id: number) {
    this.router.navigate(['/reader/update', id]);
  }

  delete(id: number) {
    this.router.navigate(['/reader/delete', id]);      
    this.pds.deletePerson(id).subscribe(data => this.personOne=data);
    this.pds.getPersonList();
  }

  addNew() {
    this.router.navigate(['/reader/add']);
  }
}
