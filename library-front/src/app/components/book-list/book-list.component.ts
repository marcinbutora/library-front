import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/interface/book';
import { BookDataService } from 'src/app/service/book-data.service';
  
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  constructor(private bds: BookDataService) { }
  public book: Book[] | undefined;

  ngOnInit() {
    this.bds.getBookList().subscribe(data => this.book = data);
  }

  delete = () => console.log("test");
}
