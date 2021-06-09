import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/interface/book';
import { Person } from 'src/app/interface/person';
import { Rental } from 'src/app/interface/rental';
import { RentalService } from 'src/app/service/rental.service';

@Component({
  selector: 'app-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.scss']
})
export class RentalListComponent implements OnInit {

  person!: Person[];
  rental!: Rental[];
  book!: Book[];

  constructor(private rds: RentalService) { }

  ngOnInit(){
    this.rds.getRentalList().subscribe(data =>  {
      this.rental = data,
      console.log(data);
      
    })
    
  }

}
