import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from 'src/app/interface/person';
import { PersonDataService } from 'src/app/service/person-data.service';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.scss']
})
export class PersonDetailsComponent implements OnInit {

  id!: number;
  person: Person | undefined;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private pds: PersonDataService) { }

  ngOnInit() {
    this.person;
    this.id = this.route.snapshot.params['id'];

    this.pds.getPersonById(this.id).subscribe(data =>
      this.person = data);

  }

  getList() {
    this.router.navigate(['/readers']);
  }

}
