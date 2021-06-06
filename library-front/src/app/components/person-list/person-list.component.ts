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
  person: Person[] | undefined;

  ngOnInit() {
    this.pds.getPersonList().subscribe((data) => (this.person = data));
  }

  details(id: number) {
    this.router.navigate(['/reader/details', id]);
    console.log(id);
  }

  addNew() {
    this.router.navigate(['/reader/add']);
  }
}
