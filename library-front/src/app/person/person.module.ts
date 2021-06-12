import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from '../app.component';
import { PersonAddComponent } from './components/person-add/person-add.component';
import { PersonUpdateComponent } from './components/person-update/person-update.component';
import { PersonDetailsComponent } from './components/person-details/person-details.component';
import { PersonRentalsComponent } from './components/person-rentals/person-rentals.component';

@NgModule({
    declarations: [
        PersonAddComponent,
        PersonUpdateComponent,
        PersonDetailsComponent,
        PersonRentalsComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class BookModule {}