import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatePipe, registerLocaleData } from '@angular/common';
import { Person } from '../../interface/person';
import { PersonDataService } from '../../service/person-data.service';
import localePl  from '@angular/common/locales/pl';
registerLocaleData(localePl, 'pl');

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss'],
})
export class PersonListComponent implements OnInit {
  constructor(private pds: PersonDataService, private router: Router) {}
  person!: Person[];

  pipe = new DatePipe('pl');

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
    this.router.navigate(['/reader/delete', id]);      
  }

  addNew() {
    this.router.navigate(['/reader/add']);
  }
}
