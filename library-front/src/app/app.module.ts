import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PersonListComponent } from './person/components/person-list/person-list.component';
import { BookListComponent } from './book/components/book-list/book-list.component';
import { PersonAddComponent } from './person/components/person-add/person-add.component';
import { BookAddComponent } from './book/components/book-add/book-add.component';
import { PersonUpdateComponent } from './person/components/person-update/person-update.component';
import { BookUpdateComponent } from './book/components/book-update/book-update.component';
import { PersonDetailsComponent } from './person/components/person-details/person-details.component';
import { BookDetailsComponent } from './book/components/book-details/book-details.component';
import { RentalListComponent } from './rental/components/rental-list/rental-list.component';
import { PersonRentalsComponent } from './person/components/person-rentals/person-rentals.component';
import { RentalPersonsComponent } from './rental/components/rental-persons/rental-persons.component';
import { RentalAddComponent } from './rental/components/rental-add/rental-add.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonListComponent,
    BookListComponent,
    PersonAddComponent,
    BookAddComponent,
    PersonUpdateComponent,
    BookUpdateComponent,
    PersonDetailsComponent,
    BookDetailsComponent,
    RentalListComponent,
    PersonRentalsComponent,
    RentalPersonsComponent,
    RentalAddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
