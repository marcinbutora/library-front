import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../../interface/person';
import { PersonDataService } from '../../service/person-data.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss']
})
export class PersonListComponent implements OnInit {

  constructor(private pds: PersonDataService) { }
  public person: Person[] | undefined;

  ngOnInit() {
    this.pds.getPersonList().subscribe(data => this.person = data);
  }
}