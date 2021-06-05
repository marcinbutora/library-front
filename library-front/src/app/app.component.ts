import { Component, OnInit } from '@angular/core';
import { Book } from './interface/book';
import { Person } from './interface/person';
import { PersonDataService } from './service/person-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'library-front';

  constructor(private pds: PersonDataService, private router: Router) {}

  person: Person[] | undefined;
  book: Book[] | undefined;

  ngOnInit() {
    this.pds.getPersonList().subscribe(data => this.person = data);
    this.pds.getBookList().subscribe(data => this.book = data);
  }

  readersClick = () => this.router.navigateByUrl('/readers');
  booksClick = () => this.router.navigateByUrl('/books');

}


