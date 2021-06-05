import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/interface/book';
import { PersonDataService } from 'src/app/service/person-data.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  constructor(private pds: PersonDataService) { }
  public book: Book[] | undefined;

  ngOnInit() {
    this.pds.getBookList().subscribe(data => this.book = data);
  }

  delete = () => console.log("test");
}
