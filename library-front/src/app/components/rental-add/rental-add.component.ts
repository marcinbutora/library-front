import { Component, OnInit } from '@angular/core';
import { Book, Person } from 'src/app/interface/rental';
import { BookDataService } from 'src/app/service/book-data.service';
import { PersonDataService } from 'src/app/service/person-data.service';

@Component({
  selector: 'app-rental-add',
  templateUrl: './rental-add.component.html',
  styleUrls: ['./rental-add.component.scss']
})
export class RentalAddComponent implements OnInit {

  person!: Person[];
  book!: Book[];

  constructor(private pds: PersonDataService, private bds: BookDataService) { }

  ngOnInit() {
    this.pds.getPersonList().subscribe((data) => (this.person = data));
    this.bds.getBookList().subscribe((data) => (this.book = data));
  }

}
