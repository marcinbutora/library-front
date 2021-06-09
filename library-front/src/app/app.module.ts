import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PersonListComponent } from './components/person-list/person-list.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { PersonAddComponent } from './components/person-add/person-add.component';
import { BookAddComponent } from './components/book-add/book-add.component';
import { PersonUpdateComponent } from './components/person-update/person-update.component';
import { BookUpdateComponent } from './components/book-update/book-update.component';
import { PersonDetailsComponent } from './components/person-details/person-details.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { RentalListComponent } from './components/rental-list/rental-list.component';
import { PersonRentalsComponent } from './components/person-rentals/person-rentals.component';

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
